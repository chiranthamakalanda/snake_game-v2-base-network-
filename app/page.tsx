import Image from "next/image";

export default function Home() {
  return (
    <html lang="en">
      <head>
        <meta name="base:app_id" content="69f6736de5227b2ca7cbabad" />
      </head>
      <iframe
        src="/index.html"
        style={{
          width: "100%",
          height: "100vh",
          border: "none",
        }}
        title="Snake Game"
      />
    </html>
  );
}
