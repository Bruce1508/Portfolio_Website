"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const scenes = [
  { src: "bruce-camera.png", alt: "Bruce holding a camera", caption: "Wait… is this thing recording?" },
  { src: "bruce-billiards.png", alt: "AI-created portrait of Bruce as a billiards player", caption: "I calculated this shot. Probably." },
  { src: "bruce-football.png", alt: "AI-created portrait of Bruce as a football player", caption: "One more match. Then I’ll code." },
];
export default function Portrait() {
  const [scene, setScene] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const loaded = useRef(new Set<number>());
  const figure = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPlaying(!preference.matches);
    const change = () => setPlaying(!preference.matches);
    preference.addEventListener("change", change);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    if (figure.current) observer.observe(figure.current);
    return () => { preference.removeEventListener("change", change); observer.disconnect(); };
  }, []);
  useEffect(() => {
    if (!playing || !ready || !visible) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setScene(value => (value + 1) % scenes.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [playing, ready, visible]);
  return (
    <figure ref={figure} className="portrait">
      <div className="portrait-sequence" aria-label="Bruce’s hobbies in three portraits">
        {scenes.map((item, index) => <Image key={item.src} src={`/assets/portraits/${item.src}`} alt={item.alt} width={1086} height={1448} priority={index === 0} loading={index ? "eager" : undefined} sizes="(max-width: 760px) 90vw, 680px" className={index === scene ? "portrait-frame is-active" : "portrait-frame"} aria-hidden={index !== scene} onLoad={() => { loaded.current.add(index); if (loaded.current.size === scenes.length) setReady(true); }} />)}
      </div>
      <div className="portrait-thought" key={scene}>
        <svg viewBox="0 0 300 150" aria-hidden="true">
          <path d="M40 106C10 109 2 76 23 62C9 37 39 17 63 27C74 3 111 0 129 19C150 0 185 5 195 24C224 8 254 22 254 43C285 38 304 65 286 83C300 108 273 129 249 119C230 144 194 138 182 124C156 143 129 134 117 120C92 138 60 128 57 110Z" />
          <ellipse cx="194" cy="140" rx="10" ry="6" />
        </svg>
        <span>{scenes[scene].caption}</span>
        <i aria-hidden="true" />
      </div>
    </figure>
  );
}
