import React from "react";
import { useGetWomenProductsQuery } from "app/store/api/productApi";

export const WomansProduct: React.FC = () => {
  const { data: products, isLoading, error } = useGetWomenProductsQuery();
  console.log("Products:", products);
  if (isLoading) return <p>Loading womens products...</p>;
  if (error) return <p>Error loading womens products.</p>;
  if (!products || products.length === 0) {
    return <p>No products found.</p>;
  }
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Women's Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={product.photoUrl}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
