import { useState } from "react";
import { FaStore } from "react-icons/fa";
import { motion } from "framer-motion";
import gsap from "gsap";
// import shutterSound from "../../../public/sounds/shutter.mp3";
import shopBg from "../../../public/cafe-bg.jpg";
import shutterImg from "../../../public/shutter.jpg";

export default function KiranaShop() {
    const [isOpen, setIsOpen] = useState(true);
    // const audio = new Audio(shutterSound);

    const products = [
        { id: 1, name: "Basmati Rice", stock: 10, img: "./products/rice.jpg" },
        { id: 2, name: "Mustard Oil", stock: 5, img: "./products/oil.jpg" },
        { id: 3, name: "Atta (Wheat Flour)", stock: 8, img: "./products/wheat.jpg" },
    ];

    const toggleShop = () => {
        setIsOpen(prev => !prev);
        // audio.play();
        gsap.to(".shutter", { y: isOpen ? "0%" : "-100%", duration: 1, ease: "power2.inOut" });
    };

    return (
        <div
            className="relative w-full min-h-screen bg-cover bg-center p-6 flex flex-col items-center justify-center"
            style={{ backgroundImage: `url(${shopBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
            {/* Shop Header */}
            <div className="flex flex-col justify-between items-center bg-accent text-white p-8 rounded-lg shadow-md w-1/2">
                <div>

                    <h1 className="text-5xl font-bold flex items-center">
                        <FaStore className="mr-2" /> Badi Eats
                    </h1>
                </div>
                <button
                    onClick={toggleShop}
                    className="bg-white text-primary-text px-4 py-2 rounded-md font-semibold shadow-md w-full mt-4"
                >
                    {isOpen ? "Close Shop" : "Open Shop"}
                </button>
            </div>

            {/* Shutter Animation */}
            <motion.div
                onClick={toggleShop}
                className="shutter absolute top-10 left-0 w-full h-full flex items-center justify-center text-white text-2xl font-bold"
                style={{ backgroundImage: `url(${shutterImg})`, backgroundSize: "cover" }}
                initial={{ y: "-100%" }}
            >
                🚪 Shop is Closed 🚪
            </motion.div>

            {/* Product Grid */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg text-center">
                        <img src={product.img} alt={product.name} className="w-20 h-20 mx-auto mb-2" />
                        <h3 className="text-lg font-bold">{product.name}</h3>
                        <p className={`font-semibold ${product.stock > 5 ? "text-green-600" : "text-red-600"}`}>
                            Stock: {product.stock}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}