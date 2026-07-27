import { ImageResponse } from "next/og";

export const alt = "SomtoScript — Full-stack web development for startups and small businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#0a1f3a",
          backgroundImage:
            "radial-gradient(circle at 0% 0%, rgba(59,130,246,0.35), transparent 55%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: 999,
              border: "1px solid rgba(96,165,250,0.4)",
              backgroundColor: "rgba(59,130,246,0.15)",
              padding: "10px 24px",
              fontSize: 24,
              color: "#93c5fd",
            }}
          >
            Full-stack web development
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              maxWidth: 940,
            }}
          >
            Fast, beautiful websites and web apps that help businesses grow.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 30,
              color: "#a1a1aa",
            }}
          >
            Custom sites · SaaS platforms · E-commerce · AI integration
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 38,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            SomtoScript
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#71717a" }}>
            Next.js · React · Node.js · TypeScript
          </div>
        </div>
      </div>
    ),
    size
  );
}
