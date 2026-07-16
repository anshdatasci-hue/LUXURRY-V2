import { createProduct } from "@/actions/product-actions";

export default function ProductForm({ brands, categories }) {
  return (
    <form
  action={createProduct}
  className="space-y-5 rounded-xl border p-6"
>

      {/* Product Name */}
      <div>
        <label className="mb-1 block font-medium">
          Product Name
        </label>

        <input
          name="name"
          className="w-full rounded-lg border p-2"
        />
      </div>

      {/* Slug */}
      <div>
        <label className="mb-1 block font-medium">
          Slug
        </label>

        <input
          name="slug"
          className="w-full rounded-lg border p-2"
        />
      </div>

      {/* Brand */}
      <div>
        <label className="mb-1 block font-medium">
          Brand
        </label>

        <select
          name="brand_id"
          className="w-full rounded-lg border p-2"
        >
          <option value="">Select Brand</option>

          {brands.map((brand) => (
            <option
              key={brand.id}
              value={brand.id}
            >
              {brand.name}
            </option>
          ))}
        </select>
      </div>

      {/* Category */}
      <div>
        <label className="mb-1 block font-medium">
          Category
        </label>

        <select
          name="category_id"
          className="w-full rounded-lg border p-2"
        >
          <option value="">Select Category</option>

          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Description */}
      <div>
        <label className="mb-1 block font-medium">
          Description
        </label>

        <textarea
          name="description"
          rows={4}
          className="w-full rounded-lg border p-2"
        />
      </div>

      {/* Price */}
      <div>
        <label className="mb-1 block font-medium">
          Price
        </label>

        <input
          type="number"
          name="price"
          className="w-full rounded-lg border p-2"
        />
      </div>

      {/* Image URL */}
      <div>
        <label className="mb-1 block font-medium">
          Image URL
        </label>

        <input
          name="image_url"
          className="w-full rounded-lg border p-2"
        />
      </div>

      {/* Featured */}
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="featured"
        />

        Featured Product
      </label>

      <button
        type="submit"
        className="rounded-lg bg-black px-5 py-2 text-white"
      >
        Create Product
      </button>

    </form>
  );
}