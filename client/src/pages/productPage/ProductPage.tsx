import React from "react";
import { HeaderLayouts } from "layouts";
import { ProductDisplay } from "components";

export const ProductPage: React.FC = () => {
  const product = {
    id: 1,
    articles: "Nike bag",
    brand: "Nike Brand",
    name: "Sample Product",
    description: "Product",
    quantity: 10,
    price: 100,
    barcode: "1234567890",
    color: "Red",
    size: "M",
    role: "NEW",
    sex: "MAN",
    category: "Clothing",
    imageUrl: "https://via.placeholder.com/150", // Replace with the actual image URL
  };
  return (
    <>
      <HeaderLayouts />
      <ProductDisplay
        id={product.id}
        articles={product.articles}
        brand={product.brand}
        name={product.name}
        description={product.description}
        quantity={product.quantity}
        price={product.price}
        barcode={product.barcode}
        color={product.color}
        size={product.size}
        role={product.role}
        sex={product.sex}
        category={product.category}
        photoUrl={product.imageUrl} // Ensure this is a valid URL
      />
    </>
  );
};
