import ProductCard from "../components/ProductCard.jsx";

export default function Home() {
  const products = [
    { id: 1, name: "Cool T-Shirt", price: 499, img: "https://via.placeholder.com/150" },
    { id: 2, name: "Casual T-Shirt", price: 699, img: "https://via.placeholder.com/150" },
    { id: 3, name: "Trendy T-Shirt", price: 899, img: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} name={p.name} price={p.price} img={p.img} />
      ))}
    </div>
  );
}
