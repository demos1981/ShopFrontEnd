import React, { useState } from "react";
import { useAddProductMutation } from "app/store/api/productApi";
import { AddProductMedia } from "./AddProductMedia";

export const AddProduct: React.FC = () => {
  const [articles, setArticles] = useState("");
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [barcode, setBarcode] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [role, setRole] = useState("new");
  const [sex, setSex] = useState("unisex");
  const [imageUrl, setImageUrl] = useState(""); // Assuming you might want to add image URL later
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [productId, setProductId] = useState<number | null>(null);
  const [productCreated, setProductCreated] = useState(false);

  const [addProduct, { isLoading, error }] = useAddProductMutation();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!articles) newErrors.articles = "Add articles";
    if (!brand) newErrors.brand = "Add Brand";
    if (!name) newErrors.name = "Add name";
    if (!description) newErrors.description = "Add description";
    if (quantity <= 0) newErrors.quantity = "Add quantity";
    if (price <= 0) newErrors.price = "Price must be > 0";
    if (!barcode) newErrors.barcode = "Add barcode";
    if (!color) newErrors.color = "Add color";
    if (!size) newErrors.size = "Add size";
    if (!role) newErrors.role = "Add role";
    if (!sex) newErrors.sex = "Add sex";
    if (!category) newErrors.category = "Add category";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      alert("Bugs in form:\n\n" + Object.values(newErrors).join("\n"));
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const newProduct = await addProduct({
        articles,
        brand,
        name,
        description,
        quantity,
        price,
        barcode,
        color,
        size,
        role,
        sex,
        imageUrl, // Assuming you want to add image URL later
        category,
      }).unwrap(); // 👈 `unwrap()` дозволяє обробити помилки як звичайний `try/catch`

      if (newProduct?.id) {
        console.log("Product created with ID:", newProduct.id);
        setProductId(newProduct.id);
        setProductCreated(true);
        alert("Продукт створено. Тепер завантажте медіафайли.");

        // Очистка форми
        setArticles("");
        setBrand("");
        setName("");
        setDescription("");
        setQuantity(0);
        setPrice(0);
        setBarcode("");
        setColor("");
        setSize("");
        setRole("new");
        setSex("unisex");
        setCategory("");
      }
    } catch (err) {
      alert("Помилка при створенні продукту");
      console.error(err);
    }
  };

  return (
    <div className=" min-h-screen flex items-center justify-center max-w-md bg-base-gray text-base-gray-light">
      <div className="p-8 rounded-md shadow-md  max-w-md bg-base-gray-dark ">
        <h1 className="text-2xl font-bold mb-4">Add Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 ">Articles</label>
            <input
              type="text"
              value={articles}
              onChange={(e) => setArticles(e.target.value)}
              className="mt-2 px-4 py-2 border rounded w-full text-base-gray-dark"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Brand</label>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="mt-2 px-4 py-2 border rounded w-full text-base-gray-dark"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 px-4 py-2 border rounded w-full text-base-gray-dark"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-2 px-4 py-2 border rounded w-full text-base-gray-dark"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Quantity</label>
            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="mt-2 px-4 py-2 border rounded w-full text-base-gray-dark"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Price</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="mt-2 px-4 py-2 border rounded w-full text-base-gray-dark"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Barcode</label>
            <input
              type="text"
              value={barcode}
              onChange={(e) => setBarcode(e.target.value)}
              className="mt-2 px-4 py-2 border rounded w-full text-base-gray-dark"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Color</label>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="mt-2 px-4 py-2 border rounded w-full text-base-gray-dark"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Size</label>
            <input
              type="text"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="mt-2 px-4 py-2 border rounded w-full text-base-gray-dark"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-2 px-4 py-2 border rounded w-full text-base-gray-dark bg-white"
              required
            >
              <option value="new">New</option>
              <option value="stock">Stock</option>
              <option value="old">Old</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Sex</label>
            <select
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              className="mt-2 px-4 py-2 border rounded w-full text-base-gray-dark bg-white"
              required
            >
              <option value="unisex">Unisex</option>
              <option value="man">Man</option>
              <option value="woman">Woman</option>
              <option value="children">Children</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-2 px-4 py-2 border rounded w-full text-base-gray-dark"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 px-4 py-2 border bg-base-gray text-base-gray-dark rounded w-full hover:bg-base-blue hover:text-base-gray-dark transition duration-300"
          >
            {isLoading ? "Додаємо..." : "Add Product"}
          </button>
        </form>
      </div>
      {productId && <AddProductMedia productId={productId} />}
    </div>
  );
};
