import React, { memo } from "react";
import TShirtIcon from "./TShirtIcon";

const FABRIC_INFO = {
  cotton: {
    name: "Cotton",
    season: "Summer",
    description: "Lightweight, breathable fabric ideal for hot weather. Soft, comfortable, and perfect for daily wear during warm seasons.",
    icon: "☀️",
  },
  wool: {
    name: "Wool",
    season: "Winter",
    description: "Warm and insulating fabric that keeps you comfortable in cold weather. Ideal for winter clothing and offers excellent heat retention.",
    icon: "❄️",
  },
  polyester: {
    name: "Polyester",
    season: "All-Season",
    description: "Durable, quick-drying fabric that works well in all seasons. Easy to maintain, resistant to wrinkles, and ideal for active wear.",
    icon: "🌦️",
  },
  linen: {
    name: "Linen",
    season: "Spring/Summer",
    description: "Premium, lightweight fabric that keeps you cool. Soft and breathable, perfect for warm weather and casual wear.",
    icon: "🌸",
  },
};


function ProductPreview({ customization }) {
  return (
    <div className="w-full md:w-1/2 p-4 flex flex-col items-center justify-center bg-gray-200 rounded-lg">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Custom Design</h2>
      <div className="w-64 h-64 md:w-80 md:h-80 transition-all duration-300">
        <TShirtIcon color={customization.color} pattern={customization.pattern} />
      </div>
      <div className="mt-4 p-4 bg-white rounded-lg shadow-inner w-full max-w-md">
        <h3 className="font-bold text-gray-800 mb-2">Fabric Information:</h3>
        <div className="flex items-start">
          <span className="text-3xl mr-3" role="img" aria-label="fabric icon">
            {FABRIC_INFO[customization.fabric].icon}
          </span>
          <div>
            <p className="font-semibold text-gray-700">
              {FABRIC_INFO[customization.fabric].name} - {FABRIC_INFO[customization.fabric].season}
            </p>
            <p className="text-gray-600 text-sm">
              {FABRIC_INFO[customization.fabric].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ProductPreview);
