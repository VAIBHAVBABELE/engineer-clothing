import React, { useState } from "react";
import AppHeader from "./components/AppHeader";
import Customizer from "./components/Customizer";
import ProductPreview from "./components/ProductPreview";

export default function App() {
  const [customization, setCustomization] = useState({
    color: "#FFFFFF",
    size: "M",
    fabric: "cotton",
    pattern: "solid",
  });

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <AppHeader />
      <main className="container mx-auto mt-4 p-4">
        <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden">
          <Customizer customization={customization} setCustomization={setCustomization} />
          <ProductPreview customization={customization} />
        </div>
      </main>
      <footer className="text-center text-gray-500 text-sm p-4">
        © 2025 Engineers Clothing Private Limited. All rights reserved.
      </footer>
    </div>
  );
}
