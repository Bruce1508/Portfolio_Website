"use client";
import { useEffect, useRef, useState } from "react";
import OrganizationLogo from "./organization-logo";
import Image from "next/image";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { places, placeGroups } from "@/data/places";
export default function MapExplorer() {
  const container = useRef<HTMLDivElement>(null);
  const markers = useRef<{ button: HTMLButtonElement; ids: string[] }[]>([]);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selected, setSelected] = useState(places[0]?.id);
  const [status, setStatus] = useState("Loading the map…");
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  const active = places.find((p) => p.id === selected);
  useEffect(() => {
    if (!token || !container.current) return;
    let instance: mapboxgl.Map;
    let disposed = false;
    const timeout = window.setTimeout(() => {
      if (!disposed)
        setStatus(
          "The map is taking a while to load. Your stories are still available alongside it.",
        );
    }, 15000);
    try {
      instance = new mapboxgl.Map({
        container: container.current,
        accessToken: token,
        style: "mapbox://styles/mapbox/standard",
        center: places[0]?.coordinates ?? [-79.3832, 43.6532],
        zoom: 15.5,
        pitch: 55,
        bearing: -20,
        antialias: true,
      });
      map.current = instance;
      instance.addControl(new mapboxgl.NavigationControl(), "top-right");
      instance.on("load", () => {
        window.clearTimeout(timeout);
        if (!disposed) setStatus("");
      });
      instance.on("error", () => {
        window.clearTimeout(timeout);
        if (!disposed)
          setStatus(
            "The map couldn’t load. You can still read the stories here.",
          );
      });
      placeGroups.forEach((group) => {
        const place = group[0];
        const button = document.createElement("button");
        button.className = "memory-marker";
        button.dataset.incoming = String(place.role === "Incoming");
        button.textContent = group.length > 1 ? String(group.length) : "";
        button.setAttribute(
          "aria-label",
          `Explore ${group.map((p) => p.title).join(", ")}`,
        );
        markers.current.push({ button, ids: group.map((p) => p.id) });
        button.addEventListener("click", () =>
          setSelected((current) => {
            const index = group.findIndex((p) => p.id === current);
            return group[(index + 1) % group.length].id;
          }),
        );
        new mapboxgl.Marker({ element: button })
          .setLngLat(place.coordinates)
          .addTo(instance);
      });
      const observer = new ResizeObserver(() => instance.resize());
      observer.observe(container.current);
      return () => {
        disposed = true;
        window.clearTimeout(timeout);
        observer.disconnect();
        instance.remove();
        map.current = null;
        markers.current = [];
      };
    } catch {
      window.clearTimeout(timeout);
      setStatus(
        "Interactive maps aren’t available in this browser. You can still read the stories here.",
      );
      return () => {
        disposed = true;
        instance?.remove();
        map.current = null;
        markers.current = [];
      };
    }
  }, [token]);
  useEffect(() => {
    markers.current.forEach(({ button, ids }) =>
      button.setAttribute("aria-pressed", String(ids.includes(selected))),
    );
    if (active && map.current)
      map.current.flyTo({
        center: active.coordinates,
        zoom: active.locationNote ? 14.5 : 16,
        pitch: 55,
        duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? 0
          : 1500,
      });
  }, [active, selected]);
  const showAll = () => {
    const bounds = new mapboxgl.LngLatBounds();
    places.forEach((place) => bounds.extend(place.coordinates));
    map.current?.fitBounds(bounds, {
      padding: 55,
      pitch: 0,
      bearing: 0,
      duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? 0
        : 1500,
    });
  };
  return (
    <div className="map-explorer">
      <div className="live-map">
        <div
          ref={container}
          className="map-canvas"
          aria-label="Interactive 3D map"
        />
        {(status || !token) && (
          <p className="map-message" role="status">
            {!token
              ? "The map is unavailable. Explore the events alongside it."
              : status}
          </p>
        )}
        {token && !status && (
          <button className="map-show-all" onClick={showAll}>
            Show all places
          </button>
        )}
      </div>
      <aside className="memory-sidebar" aria-label="Events and memories">
        {active && (
          <div className="memory-detail" aria-live="polite" aria-atomic="true">
            <span
              className="memory-role"
              data-incoming={active.role === "Incoming"}
            >
              {active.role} · {active.city}
            </span>
            {active.id === "seneca" && <OrganizationLogo name="Seneca Polytechnic" />}
            <h3>{active.title}</h3>
            <p>{active.description}</p>
            {active.photos?.length ? <div className="memory-photos">
              {active.photos.map(photo => <figure key={photo.src}>
                <Image src={photo.src} alt={photo.alt} width={640} height={480} sizes="(max-width: 760px) 90vw, 320px" />
                {photo.caption && <figcaption>{photo.caption}</figcaption>}
              </figure>)}
            </div> : null}
            {active.reflection && <blockquote className="memory-reflection">{active.reflection}</blockquote>}
            <p className="memory-venue">{active.venue}</p>
            {active.locationNote && <small>{active.locationNote}</small>}
          </div>
        )}
        <h2 className="memory-index-title">Explore the entries</h2>
        <div className="memory-list" aria-label="Choose an event" tabIndex={0}>
          {places.map((p) => (
            <button
              key={p.id}
              aria-pressed={selected === p.id}
              onClick={() => setSelected(p.id)}
            >
              {p.title}
              <small>
                {p.role} · {p.city}
              </small>
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
}
