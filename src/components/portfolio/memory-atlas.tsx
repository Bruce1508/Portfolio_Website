"use client";
import dynamic from "next/dynamic";
const MapExplorer = dynamic(() => import("./map-explorer"), {
  ssr: false,
  loading: () => <div className="atlas-loading" role="status">Opening the map…</div>,
});
export default function MemoryAtlas() { return <MapExplorer />; }
