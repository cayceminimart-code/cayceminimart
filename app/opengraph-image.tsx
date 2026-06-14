import { ImageResponse } from "next/og";

export const alt =
  "Cayce Mini Mart | Premium Convenience Store & Gas in Cayce, SC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// Generate this image at build time (required for `output: export` / GitHub Pages).
export const dynamic = "force-static";

// Generated at build time → served as a static PNG (no runtime cost).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0a0a0c 0%, #16080a 55%, #2a0d10 100%)",
          padding: "80px",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#e6b566",
            fontSize: 30,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          Cayce, South Carolina
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 104,
            fontWeight: 800,
            lineHeight: 1.02,
            marginTop: 18,
            letterSpacing: -2,
          }}
        >
          Cayce Mini Mart
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            color: "#d4d4d8",
            marginTop: 22,
            maxWidth: 900,
          }}
        >
          Premium fuel, fresh snacks &amp; everyday essentials.
        </div>
        <div style={{ display: "flex", marginTop: 44, gap: 18 }}>
          <div
            style={{
              display: "flex",
              background: "#b81d24",
              padding: "16px 30px",
              borderRadius: 16,
              fontSize: 28,
              fontWeight: 600,
            }}
          >
            Open 7 Days
          </div>
          <div
            style={{
              display: "flex",
              border: "2px solid #e6b566",
              color: "#e6b566",
              padding: "16px 30px",
              borderRadius: 16,
              fontSize: 28,
              fontWeight: 600,
            }}
          >
            2335 Charleston Hwy
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
