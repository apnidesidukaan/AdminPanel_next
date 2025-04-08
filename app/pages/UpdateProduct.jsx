import React, { useState, useEffect } from "react";
import { FaImage, FaTag, FaList, FaDollarSign, FaBox, FaFileAlt, FaPlus, FaClock, FaTags } from "react-icons/fa";
import { Input } from "../components/ui/input/input";
import TagsSection from "../components/ui/Badges/tag";
import AddCategory from "../components/ui/modal/AddCategory";
import { useUpdateInventory, useFetchInventoryItem } from "../controllers/vendor/inventory";
import SingleImageUploader from "../components/ui/uploader/imageUploader";
import MultiImageUploader from "../components/ui/uploader/multiImageUploader";
import { useFetchCategory } from "../controllers/vendor/category";

import CategorySelector from "../components/CategorySelector";
import TooltipInfo from "../components/ui/tooltip/TooltipInfo";
import { HiInformationCircle } from 'react-icons/hi';
import { AddButton } from "../components/ui/button/addButton";
import { IconButton } from "../components/ui/button/iconButton";
import SuccessStatus from "../components/ui/status/Success";
import ErrorStatus from "../components/ui/status/Error";
import Loader from "../components/ui/status/Loader";
import { Breadcrumbs } from "../components/ui/Breadcrumb/breadcrumb";
import { useParams } from "react-router-dom"; // To get itemId from URL params
import { useNavigate } from "react-router-dom"; // Import navigation hook
import UpdateMultiImageUploader from "../components/ui/uploader/updateMultiImageUploader";

//=========================================================================================
export default function UpdateProduct() {
  const { productId } = useParams(); // Get itemId from URL
  const navigate = useNavigate(); // Initialize navigate function

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Update Inventory" },
  ];

  //=========================================================================================
  const [isModalOpen, setModalOpen] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [apiResponse, setApiResponse] = useState('');

  const { updateProduct, isPending, isSuccess, isError } = useUpdateInventory();
  const { categories, } = useFetchCategory();

  const { data: inventoryItem, refetch } = useFetchInventoryItem(productId);

  useEffect(() => {
    refetch(); // Triggers fresh data fetch when the component mounts
  }, [productId, refetch]);

  const [product, setProduct] = useState({
    name: "",
    categoryId: "",
    price: "",
    stock: "",
    description: "",
    images: [],
    attributes: [],
    variants: [],
  });
  useEffect(() => {
    if (inventoryItem?.data?.data) {
      setProduct({
        name: inventoryItem?.data?.data?.name || "",
        categoryId: inventoryItem.data.data.categoryId || "",
        price: inventoryItem.data.data.price || "",
        stock: inventoryItem.data.data.stock || "",
        description: inventoryItem.data.data.description || "",
        images: inventoryItem.data.data.images || [],
      });
    }

  }, [inventoryItem]);


  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = new FormData();
    productData.append('name', product.name);
    productData.append('vendorId', '67eb7a3a31d134c819d5e4f0');
    productData.append('description', product.description);
    if (imageFile) {
      productData.append('icon', imageFile);
    }
    console.log('productData:', productData);

    const { success, error: addCategoryError, successMessage, errorMessage } = await updateProduct(productId, productData);

    if (success) {
      setApiResponse(successMessage)
      setTimeout(() => {
        navigate(`/view-products`);
      }, 3000);

    } else {
      setApiResponse(errorMessage)
      console.error('Error adding category:', addCategoryError);
    }
  };





  //=========================================================================================
  return (
    <>
      {isModalOpen && <AddCategory
        title={'Add Category'}
        description={'Add category for the products'}
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      // onClose={() => setModalOpen(false)}
      />}
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Add Category Modal */}
        <Breadcrumbs items={breadcrumbs} />

        <h2 className="text-2xl font-semibold">Update Product</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Section */}
          {/* Left Section - Product Image Upload */}
          <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
            {/* <label className="block text-gray-700 font-medium flex items-center">
            <FaImage className="mr-2" /> Product Image
          </label>
          <div className="h-48 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-accent hover:bg-accent-muted transition">
            <FaImage className="text-gray-400 text-4xl mb-2" />
            <p className="text-gray-600 text-sm">Drag & Drop or Click to Upload</p>
            <input type="file" className="hidden" />
            <button className="mt-2 px-4 py-2 bg-accent text-white rounded-md shadow hover:bg-accent transition">
              Choose File
            </button>
          </div> */}
            <UpdateMultiImageUploader setImageFile={setImageFile} existingImages={product.images} />

            {/* <MultiImageUploader setImageFile={setImageFile} /> */}
          </div>


          {/* Right Section */}
          <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <div>
              <label className="block text-gray-700 font-medium flex items-center">
                <FaTag className="mr-2" /> Product Name
              </label>
              <div className=" ">
                <Input
                  name="name"
                  placeholder='name*'
                  value={product?.name}
                  onChange={handleChange}
                />
                {/* <input
                type="text"
                id="first_name"
                class="bg-gray-100 mt-2 text-gray-800 text-sm rounded-md border border-[#e7eaf3] border-opacity-100 block w-full p-3 shadow placeholder-gray-400 focus:ring-accent focus:border-accent  outline-none transition" required /> */}


              </div>
            </div>
            <div>
              <div >
                <label className="block text-gray-700 font-medium flex items-center mb-2">
                  <FaList className="mr-2 text-primary-text" /> Category

                  <TooltipInfo text="Select or Add Category For Your Product" position="top">
                    <HiInformationCircle className="w-6 h-6 text-primary-text cursor-pointer ml-2" />
                  </TooltipInfo>
                </label>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
                {/* Category Selector takes most of the space */}
                  <div className="flex-1">
                    <CategorySelector
                      prevCategory={product?.categoryId}
                      categories={categories}
                      onSelect={(category) => console.log("Selected Category:", category)}
                    />
                  </div>
                  <div className="flex justify-center align-center">

                    {/* Add Button stays small */}
                    <IconButton onClick={() => setModalOpen(true)} >
                      <FaPlus className="" />
                    </IconButton>
                  </div>
                </div>


                <div className="flex items-center space-x-2" onClick={() => setModalOpen(true)}>
                  {/* <Input
                  placeholder="Select or add category..."
                /> */}

                </div>
              </div>

            </div>

            <div>
              <label className="block text-gray-700 font-medium flex items-center">
                <FaDollarSign className="mr-2" /> Price
              </label>
              <div className="h-10 bg-gray-100 rounded-md"></div>
            </div>
          </div>
        </div>
        <AddButton
          fullwidth="true"
          onClick={(e) => handleSubmit(e)}
        >


          {isPending ? <Loader /> : (<><FaPlus className="w-3 h-3 mr-2" /> Update Product</>)}
        </AddButton>
        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <div>
            <label className="block text-gray-700 font-medium flex items-center">
              <FaBox className="mr-2" /> Stock Quantity
            </label>
            <div className="h-10 bg-gray-100 rounded-md"></div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium flex items-center">
              <FaFileAlt className="mr-2" /> Description
            </label>
            <div className="h-10 bg-gray-100 rounded-md"></div>
          </div>
        </div>

        {/* Item Variation Section */}
        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-medium">Item Variations</h3>
          <button className="text-blue-500 flex items-center"><FaPlus className="mr-2" /> Add Variation</button>
        </div>

        {/* Item Addons Section */}
        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-medium">Item Addons</h3>
          <button className="text-blue-500 flex items-center"><FaPlus className="mr-2" /> Add Addon</button>
        </div>

        {/* Tags Section */}
        <TagsSection />
        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-medium">Tags</h3>
          <div className="h-10 bg-gray-100 rounded-md">
          </div>
        </div>

        {/* Availability Schedule Section */}
        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-medium">Available Time Schedule</h3>
          <button className="text-blue-500 flex items-center"><FaClock className="mr-2" /> Add Schedule</button>
        </div>
        {isSuccess && <SuccessStatus message={apiResponse} />}
        {isError && <ErrorStatus message={{ message: apiResponse }} />}
      </div>
    </>
  );
}
