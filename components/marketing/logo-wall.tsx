import { Container } from "./primitives";

/* ------------------------------------------------------------------ */
/* Logo wall — social proof strip.                                     */
/*                                                                     */
/* PLACEHOLDER CONTENT: `logos` holds wordmark text stubs until real   */
/* customer logo files are supplied. To go live, drop logo images into */
/* /public and swap each entry for an <Image>. Do NOT add fabricated   */
/* customer counts or ratings here — only real proof.                  */
/* ------------------------------------------------------------------ */

const logos = [
  "Northwind",
  "Acme Cloud",
  "Lumen",
  "Payflow",
  "Servio",
  "Cadence",
];

export function LogoWall({
  headline = "Teams building great software trust 3Guide to help their users succeed",
}: {
  headline?: string;
}) {
  return (
    <section className="border-y border-slate-200/70 bg-canvas-deep py-14">
      <Container>
        <p className="text-center text-sm font-medium text-slate-500">
          {headline}
        </p>
        <div
          data-stagger
          className="mt-9 grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-6"
        >
          {logos.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center text-lg font-medium tracking-tight text-slate-400 grayscale transition hover:text-slate-600"
              title="Placeholder — replace with a real customer logo"
            >
              {name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
