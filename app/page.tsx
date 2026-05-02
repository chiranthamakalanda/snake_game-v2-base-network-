import Image from "next/image";

export default function Home() {
  return (
    
      <iframe
        src="/index.html"
        style={{
          width: "100%",
          height: "100vh",
          border: "none",
        }}
        title="Snake Game"
      />
  );
}
