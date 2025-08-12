import { ProductProps } from "types/productTypes";
import adminApi from "./adminApi";

const enchancedProductApi = adminApi.enhanceEndpoints({
  addTagTypes: ["Product"],
});

export const productApi = enchancedProductApi.injectEndpoints({
  endpoints: (builder) => ({
    // GET /items
    getProducts: builder.query<ProductProps[], void>({
      query: () => "items",
      providesTags: ["Product"],
    }),
    // GET /items/mans
    getManProducts: builder.query<ProductProps[], void>({
      query: () => "items/mans", //  бекенд-ендпоінт
      providesTags: ["Product"],
    }),
    // GET /items/womens
    getWomenProducts: builder.query<ProductProps[], void>({
      query: () => "items/womens", //  бекенд-ендпоінт
      providesTags: ["Product"],
    }),
    // GET /items/childrens
    getChildrenProducts: builder.query<ProductProps[], void>({
      query: () => "items/kids", //  бекенд-ендпоінт
      providesTags: ["Product"],
    }),
    // GET /items/new
    getNewArrivalProducts: builder.query<ProductProps[], void>({
      query: () => "items/new", //  бекенд-ендпоінт
      providesTags: ["Product"],
    }),
    // GET /items/accessories
    getAccessoriesProducts: builder.query<ProductProps[], void>({
      query: () => "items/accessories", //  бекенд-ендпоінт
      providesTags: ["Product"],
    }),
    // POST /items
    addProduct: builder.mutation<ProductProps, Omit<ProductProps, "id">>({
      query: (newProduct) => ({
        url: "items",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: newProduct,
      }),
      invalidatesTags: ["Product"],
    }),

    // DELETE /items/:id
    deleteProduct: builder.mutation<void, number>({
      query: (id) => ({
        url: `items/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

// Хуки для використання в компонентах
export const {
  useGetProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useGetManProductsQuery,
  useGetWomenProductsQuery,
  useGetChildrenProductsQuery,
  useGetNewArrivalProductsQuery,
  useGetAccessoriesProductsQuery,
} = productApi;
