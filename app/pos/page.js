"use client"
//============================================================================
import React, { useState } from "react";
import { Input } from "../components/ui/input/input";
import ProductCard from "../components/ui/card/productCard";
import { Breadcrumbs } from "../components/ui/Breadcrumb/breadcrumb";
import CategoryViewer from "../components/CategoryViewer.jsx";
import { useFetchCategory } from "../controllers/vendor/category.js";
import { FaTag } from "react-icons/fa";
import ProductDetailsPos from "../components/ui/modal/ProductDetailsPos.jsx";
import { AddButton } from "../components/ui/button/addButton.jsx";
import Layout from "../layouts/Layout";
//=========================================================================================

const Pos = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Pos" },
  ];
  const sampleProduct = {
    name: "Avocado Sandwich",
    image: "/products/product.jpg",
    price: 15,
    variants: [
      { label: "Small", price: 500 },
      { label: "Medium", price: 747 },
      { label: "Large", price: 359 },
    ],
    addons: ["Extra Cheese", "Bacon", "Tomato"],
  };
  const { categories } = useFetchCategory();
  const [showModal, setShowModal] = useState(false);
  //=========================================================================================

  return (
    <>
      <Layout>
        <div className="flex flex-col lg:flex-row gap-4 p-4">

          {/* Product List */}
          <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
            <Breadcrumbs items={breadcrumbs} />




            <label className="text-sm sm:text-base text-primary-text font-medium flex items-center gap-2 mt-4 mb-1">
              <FaTag className="text-accent" />
              Select a Category
            </label>





            <CategoryViewer
              categories={categories}
              onSelect={(category) => setProduct({ ...product, categoryId: category })}
            />
            <label className="text-sm sm:text-base text-primary-text font-medium flex items-center gap-2 mt-4">
              <FaTag className="text-accent" />
              Find Products
            </label>
            <Input
              fullwidth='true'
              type="text"
              placeholder="Search products by name ,type or category ..."
              className="p-2 border rounded w-full md:w-2/3 mb-4"
            />

            <div className="bg-background-section grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4  p-4 rounded-lg shadow-md h-screen overflow-y-auto scrollbar">
              {[...Array(18)].map((_, i) => (
                <ProductCard
                  setShowModal={setShowModal}
                />

              ))}
            </div>
          </div>

          {/* Billing Section */}
          <div className="w-full lg:w-1/3 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Billing Section</h2>
            <div className="space-y-2">
              <p>Subtotal: <span className="float-right">$100.00</span></p>
              <p>Discount: <span className="float-right">-$10.00</span></p>
              <p className="font-bold">Total: <span className="float-right">$90.00</span></p>
            </div>
            <div className="mt-4">
              <AddButton
                fullwidth='true'
              >
                Place Order
              </AddButton >
            </div>
          </div>
        </div>
        <ProductDetailsPos
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          product={sampleProduct}
        />
      </Layout>
    </>

  );
};
//=========================================================================================

export default Pos;
//=========================================================================================
