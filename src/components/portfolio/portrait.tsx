"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const scenes = [
  { src: "bruce-camera.png", alt: "Bruce holding a camera", caption: "Off the keyboard." },
  { src: "bruce-billiards.png", alt: "AI-created portrait of Bruce as a billiards player", caption: "One more game of pool." },
  { src: "bruce-football.png", alt: "AI-created portrait of Bruce as a football player", caption: "Or a little extra time." },
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
        {scenes.map((item, index) => <Image key={item.src} src={`/assets/portraits/${item.src}`} alt={item.alt} width={1086} height={1448} priority={index === 0} loading={index ? "eager" : undefined} sizes="(max-width: 760px) 90vw, 480px" className={index === scene ? "portrait-frame is-active" : "portrait-frame"} aria-hidden={index !== scene} onLoad={() => { loaded.current.add(index); if (loaded.current.size === scenes.length) setReady(true); }} />)}
      </div>
      <figcaption className="portrait-caption">
        <span>{scenes[scene].caption}<small>Playful AI portraits inspired by my hobbies.</small></span>

      </figcaption>
    </figure>
  );
}
