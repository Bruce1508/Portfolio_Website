import Image from "next/image";

const logos: Record<string, { src: string; kind: string }> = {
  "Seneca Polytechnic": { src: "/assets/organizations/seneca.svg", kind: "seneca" },
  "Real Fruit Bubble Tea": { src: "/assets/organizations/real-fruit.png", kind: "real-fruit" },
  "Maple Photo Imaging": { src: "/assets/organizations/maple.png", kind: "maple" },
};
export default function OrganizationLogo({ name }: { name: string }) {
  const logo = logos[name];
  if (!logo) return null;
  return <span className={`organization-logo organization-logo-${logo.kind}`}><Image src={logo.src} alt="" width={160} height={160} sizes="96px" /></span>;
}
