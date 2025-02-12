
import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { OrdersTable } from "@/components/orders/OrdersTable";
import { OrderDetails } from "@/components/orders/OrderDetails";
import { Search, Filter } from "lucide-react";

// Mock data for orders
const mockOrders = [
  {
    id: 1,
    customer: {
      name: "Juan Pérez",
      email: "juan.perez@email.com",
      phone: "+34 123 456 789",
    },
    items: [
      { id: 1, name: "Whisky Black Label", quantity: 2, price: 85000 },
      { id: 2, name: "Ron Zacapa XO", quantity: 1, price: 120000 },
    ],
    total: 290000,
    status: "pending",
    date: "2024-03-15",
  },
  {
    id: 2,
    customer: {
      name: "María García",
      email: "maria.garcia@email.com",
      phone: "+34 987 654 321",
    },
    items: [
      { id: 3, name: "Vodka Grey Goose", quantity: 1, price: 95000 },
      { id: 4, name: "Gin Hendrick's", quantity: 2, price: 89000 },
    ],
    total: 273000,
    status: "completed",
    date: "2024-03-15",
  },
  {
    id: 3,
    customer: {
      name: "Carlos López",
      email: "carlos.lopez@email.com",
      phone: "+34 456 789 123",
    },
    items: [
      { id: 5, name: "Tequila Don Julio 1942", quantity: 1, price: 150000 },
    ],
    total: 150000,
    status: "processing",
    date: "2024-03-14",
  },
  {
    id: 4,
    customer: {
      name: "Ana Martínez",
      email: "ana.martinez@email.com",
      phone: "+34 789 123 456",
    },
    items: [
      { id: 6, name: "Champagne Moët & Chandon", quantity: 2, price: 130000 },
    ],
    total: 260000,
    status: "cancelled",
    date: "2024-03-14",
  },
] as const;

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState<typeof mockOrders[number] | null>(null);

  const filteredOrders = mockOrders.filter((order) => {
    const matchesSearch = order.customer.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      selectedStatus === "all" || order.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <DashboardLayout>
      <div className="pt-16">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Pedidos</h1>
          <p className="text-gray-600 mt-1">
            Gestiona y da seguimiento a todos los pedidos
          </p>
        </div>

        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Buscar por cliente..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
          <div className="relative">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
            >
              <option value="all">Todos los estados</option>
              <option value="pending">Pendientes</option>
              <option value="processing">En proceso</option>
              <option value="completed">Completados</option>
              <option value="cancelled">Cancelados</option>
            </select>
            <Filter className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
        </div>

        <OrdersTable
          orders={filteredOrders}
          onViewOrder={(order) => setSelectedOrder(order)}
        />

        <OrderDetails
          order={selectedOrder}
          open={!!selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      </div>
    </DashboardLayout>
  );
};

export default Orders;
