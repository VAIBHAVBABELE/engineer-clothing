import React, { useMemo, useState } from "react";

const Customizer = ({ customization, setCustomization }) => {
  const [orderStatus, setOrderStatus] = useState(null);

  const handleOrder = () => {
    setOrderStatus("processing");
    setTimeout(() => {
      setOrderStatus("success");
      console.log("Order Placed:", customization);
    }, 2000);
    setTimeout(() => {
      setOrderStatus(null);
    }, 5000);
  };

  const OptionWrapper = ({ title, children }) => (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-700 border-b-2 border-gray-300 pb-2 mb-3">{title}</h3>
      <div className="flex flex-wrap gap-3">{children}</div>
    </div>
  );

  const colors = useMemo(
  () => [
    { name: "White", value: "#FFFFFF" },
    { name: "Black", value: "#2d3748" },
    { name: "Red", value: "#e53e3e" },
    { name: "Blue", value: "#3182ce" },
    { name: "Green", value: "#38a169" },
    { name: "Yellow", value: "#f6e05e" },
    { name: "Purple", value: "#9f7aea" },
    { name: "Orange", value: "#ed8936" },
  ],
  []
);


  const sizes = useMemo(() => ["S", "M", "L", "XL", "XXL"], []);
  const fabrics = useMemo(() => ["cotton", "wool", "polyester", "linen"], []);
  const patterns = useMemo(
  () => [
    { name: "Solid", value: "solid" },
    { name: "Lined", value: "lined" },
    { name: "Carbon", value: "carbon" },
    { name: "Dots", value: "dots" },
    { name: "Stripes", value: "stripes" },       // Horizontal or vertical stripes
    { name: "Plaid", value: "plaid" },           // Checkered pattern
    { name: "Camouflage", value: "camouflage" }  // Military style camo
  ],
  []
);

  return (
    <div className="w-full md:w-1/2 p-6 bg-white overflow-y-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Design Your T-Shirt</h2>

      <OptionWrapper title="1. Select Color (रंग)">
        {colors.map((c) => (
          <button
            key={c.value}
            onClick={() => setCustomization((prev) => ({ ...prev, color: c.value }))}
            className={`w-10 h-10 rounded-full border-2 transition-transform duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              customization.color === c.value ? "ring-4 ring-offset-2 ring-blue-500" : "border-gray-300"
            }`}
            style={{ backgroundColor: c.value }}
            aria-label={`Select ${c.name} color`}
            title={c.name}
          />
        ))}
      </OptionWrapper>

      <OptionWrapper title="2. Select Size (आकार)">
        {sizes.map((s) => (
          <button
            key={s}
            onClick={() => setCustomization((prev) => ({ ...prev, size: s }))}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              customization.size === s ? "bg-blue-600 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            aria-label={`Select size ${s}`}
          >
            {s}
          </button>
        ))}
      </OptionWrapper>

      <OptionWrapper title="3. Select Fabric (कपड़ा)">
        {fabrics.map((f) => (
          <button
            key={f}
            onClick={() => setCustomization((prev) => ({ ...prev, fabric: f }))}
            className={`px-4 py-2 rounded-lg font-semibold capitalize transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              customization.fabric === f ? "bg-blue-600 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            aria-label={`Select ${f} fabric`}
          >
            {f}
          </button>
        ))}
      </OptionWrapper>

      <OptionWrapper title="4. Select Design/Pattern (डिज़ाइन/पैटर्न)">
        {patterns.map((p) => (
          <button
            key={p.value}
            onClick={() => setCustomization((prev) => ({ ...prev, pattern: p.value }))}
            className={`px-4 py-2 rounded-lg font-semibold capitalize transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              customization.pattern === p.value ? "bg-blue-600 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            aria-label={`Select ${p.name} pattern`}
          >
            {p.name}
          </button>
        ))}
      </OptionWrapper>

      <div className="mt-8 border-t-2 pt-6">
        {orderStatus === "success" ? (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg" role="alert">
            <p className="font-bold">Order Successful</p>
            <p>Your custom T-shirt selection complete.</p>
          </div>
        ) : (
          <button
            onClick={handleOrder}
            disabled={orderStatus === "processing"}
            className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
            aria-label="Place order for custom t-shirt"
          >
            {orderStatus === "processing" ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              "Order Now"
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Customizer;
