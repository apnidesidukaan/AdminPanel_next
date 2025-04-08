import { Card, CardContent } from "../components/ui/card/card";
import { Button } from "../components/ui/button/button";
// import { Star, MapPin, Phone } from "lucide-react";
import { FaImage, FaTag, FaList, FaDollarSign, FaBox, FaFileAlt, FaPlus, FaClock, FaTags } from "react-icons/fa";

export default function VendorShowcase() {
  const business = {
    name: "Tandoori Flames",
    banner: "https://source.unsplash.com/800x400/?restaurant",
    rating: 4.5,
    location: "Hazratganj, Lucknow",
    phone: "+91 9876543210",
    menu: [
      { category: "Starters", items: ["Paneer Tikka", "Chicken Tandoori"] },
      { category: "Main Course", items: ["Butter Chicken", "Dal Makhani"] },
      { category: "Desserts", items: ["Gulab Jamun", "Rasmalai"] },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <div className="relative">
        <img src={business.banner} alt="banner" className="w-full h-60 object-cover rounded-xl" />
        <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 p-3 rounded-lg">
          <h1 className="text-3xl font-bold">{business.name}</h1>
          <p className="flex items-center"><FaImage className="w-5 h-5 text-yellow-400 mr-1" /> {business.rating}</p>
          <p className="flex items-center"><FaImage className="w-5 h-5 mr-1" /> {business.location}</p>
          <p className="flex items-center"><FaImage className="w-5 h-5 mr-1" /> {business.phone}</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Menu</h2>
        {business.menu.map((section, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold mb-2">{section.category}</h3>
            <div className="grid grid-cols-2 gap-2">
              {section.items.map((item, idx) => (
                <Card key={idx} className="p-2">
                  <CardContent>{item}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Button className="bg-primary text-white px-6 py-3 rounded-lg">Order Now</Button>
      </div>
    </div>
  );
}
