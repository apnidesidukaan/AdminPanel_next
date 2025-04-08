import { useState } from "react";
import { Card, CardContent } from "../components/ui/card/card";
import { AiOutlinePlus, AiOutlineEdit } from "react-icons/ai";
import EditableTableWithModal from "../components/ui/tables/EditableTableWithModal";
import { IconButton } from "../components/ui/button/iconButton";
import Badge from "../components/ui/badges/badge";
import { Breadcrumbs } from "../components/ui/Breadcrumb/breadcrumb";
import { useFetchInventory, useAddInventory, useUpdateInventory, useDeleteInventory } from "../controllers/vendor/inventory";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import { MdDeleteForever } from "react-icons/md";
import ConfirmationDialogueBox from "../components/ui/status/Confirmation";
import ProductImageCarousel from "../components/ui/Carousel/ProductImageCarousel";

//============================================================================================================================
const columns = [
  { key: "_id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "price", label: "Price" },
  { key: "stock", label: "Stock" },
];
//============================================================================================================================
export default function ViewProduct({ vendorId }) {
  const [confirmDelete, setConfirmDelete] = useState(false)
  // const [productToDelete, setProductToDelete] = useState(null)
  const navigate = useNavigate(); // Initialize navigate function

  const { data: inventoryData, isLoading, isError } = useFetchInventory(vendorId);
  const { addProduct } = useAddInventory();
  const { updateProduct } = useUpdateInventory();
  const { deleteProduct } = useDeleteInventory();

  const [selectedProduct, setSelectedProduct] = useState(null);
  // console.log('selectedProduct', selectedProduct);

  if (isLoading) return <p>Loading inventory...</p>;
  if (isError) return <p>Error loading inventory.</p>;

  const handleSave = async (updatedProduct) => {
    await updateProduct(updatedProduct.id, updatedProduct);
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "View Inventory" },
  ];


  const handleEdit = () => {
    if (selectedProduct) {
      navigate(`/edit-product/${selectedProduct._id}`);
    }
  };



  const handleConfirmation = async () => {
    console.log('confirmDelete');

    if (!selectedProduct) return;
    setConfirmDelete(true)


  };

  const handleDelete = async () => {

    if (!selectedProduct) return;

    const response = await deleteProduct(selectedProduct._id);

    if (response.success) {
      setConfirmDelete(false);
      setSelectedProduct(false)
    } else {
      console.error("Delete failed:", response.error);
    }
  };
  // console.log('selectedProduct',selectedProduct?.images);

  //============================================================================================================================
  return (
    <>

      <div className="p-6 space-y-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Breadcrumbs items={breadcrumbs} />

        <Card className="md:col-span-12 p-6 shadow rounded-xl border border-gray-200 bg-white transition-all hover:shadow-md relative">
          <CardContent className="flex flex-col space-y-4">
            {selectedProduct ? (
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3 flex flex-col space-y-2">
                  <ProductImageCarousel selectedProduct={selectedProduct} />

                </div>

                <div className="flex flex-col space-y-3 w-full p-4 bg-white rounded-lg shadow-md">
                  {/* Product Name */}
                  <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">{selectedProduct.description}</p>

                  {/* Price & Stock Section */}
                  <div className="flex items-center justify-between text-lg font-medium text-gray-800 border-t pt-2">
                    <span>💰 Price: <span className="font-semibold text-green-600">${selectedProduct.price}</span></span>
                    <span>📦 Stock: <span className={`font-semibold ${selectedProduct.stock < 15 ? "text-red-500" : "text-gray-800"}`}>
                      {selectedProduct.stock}
                    </span></span>
                  </div>

                  {/* Variants */}
                  {selectedProduct.variants?.length > 0 && (
                    <p className="text-sm text-gray-500">🎨 Variants: {selectedProduct.variants.join(", ")}</p>
                  )}

                  {/* Stock Alert Badge */}
                  <div className="pt-2">
                    <Badge variant={selectedProduct.stock < 15 ? "destructive" : "default"}>
                      {selectedProduct.alerts}
                    </Badge>
                  </div>
                </div>

              </div>
            ) : (
              <p className="mt-10 flex flex-col items-center justify-center bg-gray-100 text-gray-600 text-lg p-6 rounded-xl shadow-md border border-gray-200 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-400 mb-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Select a product to see details
              </p>
            )}
          </CardContent>

          <div className="absolute top-4 right-4 flex gap-2">

            <IconButton
              onClick={handleConfirmation} // Navigate on click
              disabled={!selectedProduct} // Disable if no product is selected
              title="Modify Product">
              <MdDeleteForever size={20} />
            </IconButton>
            <IconButton
              onClick={handleEdit} // Navigate on click
              disabled={!selectedProduct} // Disable if no product is selected
              title="Modify Product">
              <AiOutlineEdit size={20} />
            </IconButton>
          </div>
        </Card>

        <div className="md:col-span-12">
          <EditableTableWithModal
            title='New Products List'
            columns={columns}
            data={inventoryData?.data?.data || []}
            onSave={handleSave}
            onRowClick={(row) => setSelectedProduct(row)}
          />
        </div>
      </div>




      {confirmDelete && (
        <ConfirmationDialogueBox
          title="Delete Product ?"
          description={`Are you sure you want to delete "${selectedProduct?.name}"?`}
          onConfirm={handleDelete}
          onCancel={() => setConfirmDelete(false)} // Close modal if canceled
        />
      )}
    </>
  );
}
