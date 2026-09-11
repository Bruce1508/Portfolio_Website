/** Bruce-confirmed participation. Coordinates are [longitude, latitude]; no dates inferred. */
export type MemoryPlace = {
  id: string;
  title: string;
  coordinates: [number, number];
  venue: string;
  city: string;
  role: "Hacker" | "Incoming" | "Attendee";
  description: string;
  locationNote?: string;
  /** Bruce’s own reflection; omit until supplied. */
  reflection?: string;
  photos?: { src: string; alt: string; caption?: string }[];
};
const uoft: [number, number] = [-79.3958, 43.6629];
const campusNote = "Approximate campus location; event building not specified.";
export const places: MemoryPlace[] = [
  {
    id: "summerhacks",
    title: "SummerHacks",
    coordinates: [-79.4028, 43.64081],
    venue: "STACKT market · 28 Bathurst Street",
    city: "Toronto",
    role: "Hacker",
    description: "Participated in SummerHacks at STACKT market.",
  },
  {
    id: "seneca",
    title: "Seneca Hackathon",
    coordinates: [-79.3503082, 43.7937915],
    venue: "Seneca Newnham · 1750 Finch Avenue East",
    city: "Toronto",
    role: "Hacker",
    description: "Participated in the hackathon at Seneca’s Newnham campus.",
    locationNote: campusNote,
  },
  {
    id: "hack-the-north",
    title: "Hack The North",
    coordinates: [-80.5452429, 43.4701994],
    venue: "University of Waterloo",
    city: "Waterloo",
    role: "Incoming",
    description: "Next stop: Hack The North at the University of Waterloo.",
    locationNote: campusNote,
  },
  {
    id: "deltahacks",
    title: "DeltaHacks",
    coordinates: [-79.9153063, 43.2647837],
    venue: "McMaster University · 1280 Main Street West",
    city: "Hamilton",
    role: "Hacker",
    description: "Participated in DeltaHacks at McMaster University.",
    locationNote: campusNote,
  },
  {
    id: "hack-the-future",
    title: "Hack The Future",
    coordinates: uoft,
    venue: "University of Toronto",
    city: "Toronto",
    role: "Hacker",
    description: "Participated in Hack The Future at UofT.",
    locationNote:
      "UofT reference pin at St. George; event campus and building not specified.",
  },
  {
    id: "hack-the-6ix",
    title: "Hack The 6ix",
    coordinates: [-79.3972491, 43.6597682],
    venue: "Bahen Centre · 40 St George Street",
    city: "Toronto",
    role: "Hacker",
    description:
      "Participated in Hack The 6ix at the Bahen Centre for Information Technology.",
  },
  {
    id: "newhacks",
    title: "NewHacks",
    coordinates: uoft,
    venue: "University of Toronto · St. George",
    city: "Toronto",
    role: "Hacker",
    description: "Participated in NewHacks at UofT’s St. George campus.",
    locationNote: campusNote,
  },
  {
    id: "hacktrent",
    title: "HackTrent",
    coordinates: [-78.2893817, 44.3572933],
    venue: "Trent University",
    city: "Peterborough",
    role: "Hacker",
    description: "Participated in HackTrent at Trent University.",
    locationNote:
      "Approximate Symons campus location; event building not specified.",
  },
  {
    id: "anthropic",
    title: "Anthropic AI Toronto Hackathon",
    coordinates: uoft,
    venue: "Online · presentation at UofT",
    city: "Toronto",
    role: "Hacker",
    description:
      "Participated online, with an in-person presentation at the University of Toronto.",
    locationNote:
      "Presentation reference pin at St. George; exact venue not specified.",
  },
  {
    id: "devfest",
    title: "Google DevFest Vancouver",
    coordinates: [-123.1134717, 49.2756315],
    venue: "JW Marriott Parq Vancouver · 39 Smithe Street",
    city: "Vancouver",
    role: "Attendee",
    description: "Attended Google DevFest in Vancouver.",
  },
  {
    id: "homecoming",
    title: "Homecoming",
    coordinates: [-79.3133148, 43.6668336],
    venue: "1665 Queen Street East",
    city: "Toronto",
    role: "Attendee",
    description: "Attended Homecoming during Toronto Tech Week.",
  },
  {
    id: "notion",
    title: "Notion Toronto Community Conference Day",
    coordinates: [-79.3977, 43.6426],
    venue: "BrainStation · 482 Front Street West, 2nd floor",
    city: "Toronto",
    role: "Attendee",
    description:
      "Joined the Notion community networking event during Toronto Tech Week.",
    locationNote: "Approximate venue location at The Well.",
  },
  {
    id: "tech-week",
    title: "Toronto Tech Week · community events",
    coordinates: [-79.3893584, 43.6603021],
    venue: "108 College Street",
    city: "Toronto",
    role: "Attendee",
    description:
      "Attended a mix of deep tech summits, founder workshops, and speaker sessions. This entry groups the events at this address.",
  },
];

/** Shared campus pins retain every event in the sidebar. */
export const placeGroups = places.reduce<MemoryPlace[][]>((groups, place) => {
  const group = groups.find(
    ([first]) => first.coordinates.join() === place.coordinates.join(),
  );
  if (group) group.push(place);
  else groups.push([place]);
  return groups;
}, []);
