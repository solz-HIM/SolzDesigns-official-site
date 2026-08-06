import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/**
 * The social preview card, generated at build time.
 *
 * The old site pointed og:image at /og-image.jpg, which was never added to
 * public/ — so every share to WhatsApp, Facebook or LinkedIn rendered a broken
 * or blank preview. In a market where most referral traffic arrives through a
 * WhatsApp link, that is a real cost, not a cosmetic one.
 *
 * Satori only accepts ttf/otf/woff, so the page's variable Archivo cannot be
 * reused here. A single static ExtraBold cut (112KB) is committed under
 * assets/ instead — comfortably inside the 500KB budget, and it keeps the
 * card's display weight identical to the site's. Archivo is licensed under the
 * SIL Open Font License 1.1, which permits redistribution.
 */

export const alt =
  "Solz Designs — web design agency in Harare, Zimbabwe. Websites from $80.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ACID = "#D4F035";
const INK = "#0B0B0B";
const OLIVE = "#3A4210";

export default async function Image() {
  // Read from disk rather than fetching URLs — no network dependency, and the
  // build cannot break because a font CDN blipped at deploy time.
  const [logo, archivo] = await Promise.all([
    readFile(join(process.cwd(), "public", "logo.png")),
    readFile(join(process.cwd(), "assets", "Archivo-ExtraBold.ttf")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: ACID,
          padding: "64px 72px",
          fontFamily: "Archivo",
        }}
      >
        {/* Top rail: logo chip + category */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 76,
                height: 76,
                borderRadius: 18,
                backgroundColor: INK,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logoSrc} width={54} height={54} alt="" />
            </div>
            <div
              style={{
                fontSize: 30,
                fontWeight: 700,
                color: INK,
                letterSpacing: "-0.01em",
              }}
            >
              SOLZ DESIGNS
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: "0.18em",
              color: OLIVE,
            }}
          >
            HARARE · ZIMBABWE
          </div>
        </div>

        {/* The statement */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              letterSpacing: "0.34em",
              color: OLIVE,
            }}
          >
            CREATIVE
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 132,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.045em",
              color: INK,
              marginTop: 10,
            }}
          >
            WEB DESIGN
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 46,
              letterSpacing: "0.3em",
              color: OLIVE,
              marginTop: 14,
            }}
          >
            ZIMBABWE
          </div>
        </div>

        {/* Bottom rail: the three facts worth putting in a preview */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          {["Websites from $80", "Live in 5–10 days", "You own the code"].map(
            (label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  backgroundColor: INK,
                  color: ACID,
                  fontSize: 24,
                  fontWeight: 600,
                  padding: "16px 28px",
                  borderRadius: 999,
                }}
              >
                {label}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Archivo",
          data: archivo.buffer.slice(
            archivo.byteOffset,
            archivo.byteOffset + archivo.byteLength,
          ) as ArrayBuffer,
          weight: 800,
          style: "normal",
        },
      ],
    },
  );
}
