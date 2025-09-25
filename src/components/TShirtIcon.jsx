import React from "react";

export default function TShirtIcon({ color, pattern }) {
  const getPatternFill = () => {
  switch (pattern) {
    case "lined":
      return (
        <defs>
          <pattern id="lined" patternUnits="userSpaceOnUse" width="4" height="4">
            <rect width="4" height="4" fill={color} />
            <path d="M0,4 L4,0" stroke="#000" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
      );

    case "dots":
      return (
        <defs>
          <pattern id="dots" patternUnits="userSpaceOnUse" width="10" height="10">
            <rect width="10" height="10" fill={color} />
            <circle cx="5" cy="5" r="2" fill="#000" opacity="0.2" />
          </pattern>
        </defs>
      );

    case "carbon":
      return (
        <defs>
          <pattern id="carbon" patternUnits="userSpaceOnUse" width="6" height="6">
            <rect width="6" height="6" fill={color} />
            <rect x="0" y="0" width="3" height="3" fill="#000" opacity="0.1" />
            <rect x="3" y="3" width="3" height="3" fill="#000" opacity="0.1" />
          </pattern>
        </defs>
      );

    case "stripes":
      return (
        <defs>
          <pattern id="stripes" patternUnits="userSpaceOnUse" width="8" height="8">
            <rect width="8" height="8" fill={color} />
            <path d="M0,0 L0,8" stroke="#000" strokeWidth="1" opacity="0.2" />
          </pattern>
        </defs>
      );

    case "plaid":
      return (
        <defs>
          <pattern id="plaid" patternUnits="userSpaceOnUse" width="12" height="12">
            <rect width="12" height="12" fill={color} />
            <path d="M0,0 L12,0" stroke="#000" strokeWidth="1" opacity="0.2" />
            <path d="M0,0 L0,12" stroke="#000" strokeWidth="1" opacity="0.2" />
          </pattern>
        </defs>
      );

    case "camouflage":
      return (
        <defs>
          <pattern id="camouflage" patternUnits="userSpaceOnUse" width="20" height="20">
            <rect width="20" height="20" fill={color} />
            <circle cx="5" cy="5" r="4" fill="#000" opacity="0.1" />
            <circle cx="15" cy="10" r="3" fill="#000" opacity="0.1" />
            <circle cx="10" cy="15" r="4" fill="#000" opacity="0.1" />
          </pattern>
        </defs>
      );

    default:
      return null;
  }
};


  const getFillColor = () => {
    if (pattern === "solid") return color;
    return `url(#${pattern})`;
  };

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
      {getPatternFill()}
      <path
        d="M25,10 L75,10 L90,20 L80,30 L70,25 L70,85 L30,85 L30,25 L20,30 L10,20 Z"
        fill={getFillColor()}
        stroke="#4A5568"
        strokeWidth="1"
      />
      <path
        d="M40,10 C40,5 60,5 60,10"
        fill="none"
        stroke="#4A5568"
        strokeWidth="1"
      />
    </svg>
  );
}
