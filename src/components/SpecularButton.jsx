'use client';

import { useEffect, useRef } from 'react';
import './SpecularButton.css';

const PAD = 24;
const TAU = Math.PI * 2;

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const wrap = value => value - Math.floor(value);

const loopPosition = (x, y, halfX, halfY, r) => {
  const innerX = halfX - r;
  const innerY = halfY - r;
  const arc = (Math.PI / 2) * r;
  const quarter = innerX + innerY + arc;
  const ax = Math.abs(x);
  const ay = Math.abs(y);
  const qx = ax - innerX;
  const qy = ay - innerY;
  let s;
  if (qx > 0 && qy > 0) s = innerY + Math.atan2(qy, qx) * r;
  else if (qx > qy) s = Math.min(ay, innerY);
  else s = innerY + arc + innerX - Math.min(ax, innerX);
  if (x < 0) s = y >= 0 ? 2 * quarter - s : 2 * quarter + s;
  else if (y < 0) s = 4 * quarter - s;
  return wrap(s / Math.max(4 * quarter, 0.0001));
};

const rimPoint = (position, halfX, halfY, r) => {
  const innerX = halfX - r;
  const innerY = halfY - r;
  const arc = (Math.PI / 2) * r;
  const quarter = innerX + innerY + arc;
  let s = wrap(position) * 4 * quarter;
  let signX = 1;
  let signY = 1;
  if (s > 3 * quarter) {
    s = 4 * quarter - s;
    signY = -1;
  } else if (s > 2 * quarter) {
    s -= 2 * quarter;
    signX = -1;
    signY = -1;
  } else if (s > quarter) {
    s = 2 * quarter - s;
    signX = -1;
  }
  let x = innerX - (s - innerY - arc);
  let y = halfY;
  if (s <= innerY) {
    x = halfX;
    y = s;
  } else if (s <= innerY + arc) {
    const angle = (s - innerY) / Math.max(r, 0.0001);
    x = innerX + Math.cos(angle) * r;
    y = innerY + Math.sin(angle) * r;
  }
  return [x * signX, y * signY];
};

const SpecularButton = ({
  children = 'Get Started',
  size = 'lg',
  radius = 18,
  tint = '#FEFFFA',
  tintOpacity = 0.04,
  blur = 0,
  textColor = '#FEFFFA',
  lineColor = '#FEFFFA',
  baseColor = '#092742',
  intensity = 1,
  idleIntensity = 0.35,
  shineSize = 10,
  shineFade = 34,
  thickness = 1.2,
  glow = 1,
  speed = 0.35,
  followMouse = true,
  proximity = 250,
  autoAnimate = false,
  disabled = false,
  onClick,
  className = '',
  type = 'button',
  style,
  ...rest
}) => {
  const buttonRef = useRef(null);
  const canvasRef = useRef(null);
  const wakeRef = useRef(null);

  const settings = {
    radius: Math.max(0, radius),
    lineColor: String(lineColor),
    baseColor: String(baseColor),
    intensity: Math.max(0, intensity),
    idleIntensity: clamp(idleIntensity, 0, 1),
    shineSize: Math.max(0, shineSize),
    shineFade: Math.max(0, shineFade),
    thickness: Math.max(0, thickness),
    glow: Math.max(0, glow),
    speed,
    followMouse,
    proximity: Math.max(1, proximity),
    autoAnimate,
    disabled
  };
  const settingsRef = useRef(settings);
  settingsRef.current = settings;

  useEffect(() => {
    const button = buttonRef.current;
    const canvas = canvasRef.current;
    if (!button || !canvas) return undefined;

    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    const view = { width: 1, height: 1, ratio: 1 };
    const pointer = { x: 0, y: 0, known: false };
    const state = { spot: 0, level: 0, press: 0, ready: false };
    let raf = 0;
    let last = 0;
    let visible = true;

    const cornerRadius = s => Math.min(s.radius, view.width / 2, view.height / 2);

    const restSpot = s => {
      const r = cornerRadius(s);
      const inset = r * (1 - Math.SQRT1_2);
      return loopPosition(inset - view.width / 2, view.height / 2 - inset, view.width / 2, view.height / 2, r);
    };

    const aim = s => {
      if (!s.followMouse || s.disabled || !pointer.known) return null;
      const rect = button.getBoundingClientRect();
      const scale = rect.width / view.width || 1;
      const halfX = view.width / 2;
      const halfY = view.height / 2;
      const x = (pointer.x - rect.left - rect.width / 2) / scale;
      const y = (rect.top + rect.height / 2 - pointer.y) / scale;
      const distance = Math.hypot(Math.max(Math.abs(x) - halfX, 0), Math.max(Math.abs(y) - halfY, 0));
      const t = clamp(1 - distance / s.proximity, 0, 1);
      const near = t * t * (3 - 2 * t);
      const nearest = loopPosition(x, y, halfX, halfY, cornerRadius(s));
      if (distance > 0) return { spot: nearest, near };
      const depth = clamp(Math.min(halfX - Math.abs(x), halfY - Math.abs(y)) / (halfY * 0.8), 0, 1);
      const sway = restSpot(s) - (x / halfX) * 0.06 - (y / halfY) * 0.02;
      const offset = sway - nearest - Math.round(sway - nearest);
      return { spot: wrap(nearest + offset * depth * depth * (3 - 2 * depth)), near };
    };

    const draw = s => {
      const { width, height, ratio } = view;
      const canvasW = canvas.width;
      const canvasH = canvas.height;

      ctx.clearRect(0, 0, canvasW, canvasH);
      ctx.save();
      ctx.scale(ratio, ratio);
      ctx.translate(PAD + width / 2, PAD + height / 2);

      const halfX = width / 2;
      const halfY = height / 2;
      const r = cornerRadius(s);

      const drawRoundRect = (x, y, w, h, radius) => {
        if (ctx.roundRect) {
          ctx.beginPath();
          ctx.roundRect(x, y, w, h, radius);
        } else {
          ctx.beginPath();
          ctx.moveTo(x + radius, y);
          ctx.lineTo(x + w - radius, y);
          ctx.arcTo(x + w, y, x + w, y + radius, radius);
          ctx.lineTo(x + w, y + h - radius);
          ctx.arcTo(x + w, y + h, x + w - radius, y + h, radius);
          ctx.lineTo(x + radius, y + h);
          ctx.arcTo(x, y + h, x, y + h - radius, radius);
          ctx.lineTo(x, y + radius);
          ctx.arcTo(x, y, x + radius, y, radius);
          ctx.closePath();
        }
      };

      const currentLevel = s.autoAnimate ? 1 : state.level + state.press * 0.8;
      const alphaFactor = clamp(s.intensity * currentLevel, 0, 1);

      // 1. Base subtle border
      ctx.save();
      drawRoundRect(-halfX, -halfY, width, height, r);
      ctx.strokeStyle = s.baseColor ? `${s.baseColor}44` : 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = Math.max(1, s.thickness);
      ctx.stroke();
      ctx.restore();

      // 2. Specular rim point
      const [rimX, rimY] = rimPoint(state.spot, halfX, halfY, r);
      const pull = 1 - Math.min(0.35 * halfY, Math.hypot(rimX, rimY)) / Math.max(Math.hypot(rimX, rimY), 0.0001);
      const entryX = rimX * pull;
      const entryY = rimY * pull;

      // 3. Inner pool glow (clipped inside the button body)
      if (alphaFactor > 0.01) {
        ctx.save();
        drawRoundRect(-halfX, -halfY, width, height, r);
        ctx.clip();

        const poolRadius = Math.max(halfX, halfY) * 1.3;
        const poolGrad = ctx.createRadialGradient(entryX, entryY, 0, entryX, entryY, poolRadius);
        const poolAlpha = 0.15 * s.glow * alphaFactor;
        poolGrad.addColorStop(0, `rgba(255, 255, 255, ${poolAlpha})`);
        poolGrad.addColorStop(0.5, `rgba(255, 255, 255, ${poolAlpha * 0.25})`);
        poolGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = poolGrad;
        ctx.fillRect(-halfX, -halfY, width, height);
        ctx.restore();
      }

      // 4. Primary specular rim beam
      if (alphaFactor > 0.01) {
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';

        const beamRadius = Math.max(24, (s.shineSize + s.shineFade) * 1.6);
        const beamGrad = ctx.createRadialGradient(rimX, rimY, 0, rimX, rimY, beamRadius);
        const beamAlpha = clamp(0.95 * alphaFactor, 0, 1);
        beamGrad.addColorStop(0, `rgba(255, 255, 255, ${beamAlpha})`);
        beamGrad.addColorStop(0.3, `rgba(255, 255, 255, ${beamAlpha * 0.65})`);
        beamGrad.addColorStop(0.7, `rgba(255, 255, 255, ${beamAlpha * 0.18})`);
        beamGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        drawRoundRect(-halfX, -halfY, width, height, r);
        ctx.strokeStyle = beamGrad;
        ctx.lineWidth = Math.max(1.5, s.thickness * 2.2);
        ctx.stroke();

        // 5. Outer bloom glow
        if (s.glow > 0) {
          const bloomGrad = ctx.createRadialGradient(rimX, rimY, 0, rimX, rimY, beamRadius * 1.4);
          const bloomAlpha = clamp(0.35 * s.glow * alphaFactor, 0, 1);
          bloomGrad.addColorStop(0, `rgba(255, 255, 255, ${bloomAlpha})`);
          bloomGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

          drawRoundRect(-halfX, -halfY, width, height, r);
          ctx.strokeStyle = bloomGrad;
          ctx.lineWidth = Math.max(2, s.thickness * 3.8);
          ctx.stroke();
        }

        // 6. Secondary backlight on opposite rim
        const [backRimX, backRimY] = rimPoint(state.spot + 0.5, halfX, halfY, r);
        const backRadius = beamRadius * 0.7;
        const backGrad = ctx.createRadialGradient(backRimX, backRimY, 0, backRimX, backRimY, backRadius);
        const backAlpha = clamp(0.4 * alphaFactor, 0, 1);
        backGrad.addColorStop(0, `rgba(255, 255, 255, ${backAlpha})`);
        backGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        drawRoundRect(-halfX, -halfY, width, height, r);
        ctx.strokeStyle = backGrad;
        ctx.lineWidth = Math.max(1, s.thickness * 1.3);
        ctx.stroke();

        ctx.restore();
      }

      ctx.restore();
    };

    const frame = now => {
      raf = 0;
      if (!visible) return;
      const s = settingsRef.current;
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
      last = now;
      const target = aim(s);
      const spinning = s.autoAnimate && !reduce;
      const steering = !!target && target.near > 0;
      if (!state.ready) {
        state.spot = restSpot(s);
        state.level = s.autoAnimate ? 1 : s.idleIntensity;
        state.ready = true;
      }
      let diff = 0;
      if (spinning && !steering) {
        state.spot = wrap(state.spot + (s.speed / TAU) * dt);
      } else {
        diff = (steering ? target.spot : restSpot(s)) - state.spot;
        diff -= Math.round(diff);
        state.spot = wrap(state.spot + diff * (1 - Math.exp(-dt * 8)));
      }
      const level = s.autoAnimate ? 1 : s.idleIntensity + (1 - s.idleIntensity) * (target ? target.near : 0);
      state.level += (level - state.level) * (1 - Math.exp(-dt * 7));
      state.press *= Math.exp(-dt * 5);
      draw(s);
      const settling = Math.abs(diff) > 0.0002 || Math.abs(level - state.level) > 0.001 || state.press > 0.002;
      if (settling || (spinning && !steering)) raf = requestAnimationFrame(frame);
      else last = 0;
    };

    const wake = () => {
      if (!raf && visible) raf = requestAnimationFrame(frame);
    };

    const measure = entry => {
      const box = entry?.borderBoxSize?.[0];
      view.width = Math.max(1, box ? box.inlineSize : button.offsetWidth);
      view.height = Math.max(1, box ? box.blockSize : button.offsetHeight);
      view.ratio = Math.min(window.devicePixelRatio || 1, 3);
      canvas.width = Math.max(1, Math.round((view.width + PAD * 2) * view.ratio));
      canvas.height = Math.max(1, Math.round((view.height + PAD * 2) * view.ratio));
      if (state.ready) draw(settingsRef.current);
      wake();
    };

    const onPointerMove = event => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.known = true;
      wake();
    };

    const onPointerDown = event => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.known = true;
      if (!settingsRef.current.disabled) state.press = 1;
      wake();
    };

    const onPointerEnd = event => {
      if (event.pointerType === 'mouse') return;
      pointer.known = false;
      wake();
    };

    const onPointerLeave = () => {
      pointer.known = false;
      wake();
    };

    const resizeObserver = new ResizeObserver(entries => measure(entries[entries.length - 1]));
    resizeObserver.observe(button);

    const intersection = new IntersectionObserver(entries => {
      visible = entries.some(entry => entry.isIntersecting);
      if (visible) {
        last = 0;
        wake();
      }
    });
    intersection.observe(button);

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerup', onPointerEnd, { passive: true });
    window.addEventListener('pointercancel', onPointerEnd, { passive: true });
    document.documentElement.addEventListener('pointerleave', onPointerLeave);
    button.addEventListener('pointerdown', onPointerDown);

    measure();
    wakeRef.current = wake;

    return () => {
      cancelAnimationFrame(raf);
      wakeRef.current = null;
      resizeObserver.disconnect();
      intersection.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerEnd);
      window.removeEventListener('pointercancel', onPointerEnd);
      document.documentElement.removeEventListener('pointerleave', onPointerLeave);
      button.removeEventListener('pointerdown', onPointerDown);
    };
  }, []);

  useEffect(() => {
    wakeRef.current?.();
  });

  return (
    <button
      ref={buttonRef}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`specular-button specular-button--${size}${className ? ` ${className}` : ''}`}
      style={{
        '--sb-radius': `${radius}px`,
        '--sb-tint': tint,
        '--sb-tint-opacity': tintOpacity,
        '--sb-blur': `${blur}px`,
        '--sb-text-color': textColor,
        ...style
      }}
      {...rest}
    >
      <canvas ref={canvasRef} className="specular-button__light" aria-hidden="true" />
      <span className="specular-button__label">{children}</span>
    </button>
  );
};

export default SpecularButton;
