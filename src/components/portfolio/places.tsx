"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const MapExplorer = dynamic(() => import("./map-explorer"), {
  ssr: false,
  loading: () => <p role="status">Opening the map…</p>,
});
export default function Places() {
  const [open, setOpen] = useState(false);
  return (
    <section className="section" id="places">
      <div className="section-heading">
        <div>
          <h2>Places & memories</h2>
        </div>
        <span className="section-note">Hackathons & community</span>
      </div>
      <div className="places-panel">
        <div className="map-illustration" aria-hidden="true">
          <svg viewBox="0 0 500 300" preserveAspectRatio="xMidYMid slice">
            <rect width="500" height="300" fill="#e4e8db" />
            <path
              d="M-40 260 Q180 170 260 300 L540 300 L540 190 Q340 100 200 210Z"
              fill="#c9dcd9"
            />
            <g transform="translate(250 120) rotate(-28) skewX(22)">
              <g stroke="#f8f8ef" strokeWidth="15">
                <path d="M-400 -90H400M-400 10H400M-400 100H400M-150 -250V300M-20 -250V300M110 -250V300M230 -250V300" />
              </g>
              {Array.from({ length: 20 }, (_, i) => {
                const x = (i % 5) * 105 - 240,
                  y = Math.floor(i / 5) * 74 - 115,
                  h = 12 + (i % 3) * 9;
                return (
                  <g key={i}>
                    <path d={`M${x} ${y}v${-h}h52v${h}z`} fill="#c9cfbf" />
                    <path
                      d={`M${x + 52} ${y}v${-h}l13 -12v${h}z`}
                      fill="#b3bda9"
                    />
                    <path
                      d={`M${x} ${y - h}l13 -12h52l-13 12z`}
                      fill="#fafaf0"
                    />
                  </g>
                );
              })}
            </g>
            <circle cx="260" cy="140" r="23" fill="#49694e" opacity=".12" />
            <circle
              cx="260"
              cy="140"
              r="7"
              fill="#49694e"
              stroke="white"
              strokeWidth="3"
            />
          </svg>
          <span className="map-preview-label">Illustrated preview</span>
        </div>
        <div className="places-copy">
          <h3>Where building takes me.</h3>
          <p>
            From hackathons across Ontario to DevFest in Vancouver. Places I’ve
            built, learned, and met people along the way — with Hack The North
            up next.
          </p>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="button">
                Explore the map <ArrowUpRight size={15} />
              </button>
            </DialogTrigger>
            <DialogContent className="map-dialog">
              <DialogTitle>Places & memories</DialogTitle>
              <DialogDescription>
                13 entries, including one upcoming hackathon. Select an event to
                explore.
              </DialogDescription>
              {open && <MapExplorer />}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
