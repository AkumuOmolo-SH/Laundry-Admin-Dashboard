import react from "react";

export default function Background() {
  return (
    <div 
    className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/50 to-white/70"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    />
  );
}
