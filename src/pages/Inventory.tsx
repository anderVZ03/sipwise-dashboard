
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Plus, Search, AlertCircle } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  stock: number;
  price: number;
  category: string;
  image: string;
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Whisky Black Label",
    stock: 24,
    price: 85000,
    category: "Whisky",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Ron Zacapa XO",
    stock: 5,
    price: 120000,
    category: "Ron",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Vodka Grey Goose",
    stock: 18,
    price: 95000,
    category: "Vodka",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Gin Hendrick's",
    stock: 12,
    price: 89000,
    category: "Gin",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Tequila Don Julio 1942",
    stock: 3,
    price: 150000,
    category: "Tequila",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Champagne Moët & Chandon",
    stock: 15,
    price: 130000,
    category: "Champagne",
    image: "/placeholder.svg",
  },
];

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", ...new Set(mockProducts.map((p) => p.category))];

  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <DashboardLayout>
      <div className="pt-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Inventario</h1>
            <p className="text-gray-600 mt-1">
              Gestiona tu stock y productos
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="h-5 w-5 mr-2" />
            Añadir Producto
          </Button>
        </div>

        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="aspect-square rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-32 w-32 object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{product.category}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-medium text-gray-900">
                    ${product.price.toLocaleString()}
                  </span>
                  <div className="flex items-center">
                    {product.stock <= 5 && (
                      <AlertCircle className="h-4 w-4 text-warning mr-1.5" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        product.stock <= 5 ? "text-warning" : "text-gray-600"
                      }`}
                    >
                      {product.stock} unidades
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Inventory;
