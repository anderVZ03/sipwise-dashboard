
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentOrders } from "@/components/dashboard/RecentOrders";
import { useSalesData } from "@/hooks/use-sales-data";
import { DollarSign, Package, ShoppingCart, TrendingUp } from "lucide-react";

const Index = () => {
  const { data } = useSalesData();

  return (
    <DashboardLayout>
      <div className="pt-16">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Bienvenido al panel de administración de tu licorería
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Ingresos Totales"
            value={`$${data.totalRevenue.toLocaleString()}`}
            icon={DollarSign}
            trend={{ value: 12.5, isPositive: true }}
          />
          <StatCard
            title="Ticket Promedio"
            value={`$${data.averageTicket.toLocaleString()}`}
            icon={TrendingUp}
            trend={{ value: 8.2, isPositive: true }}
          />
          <StatCard
            title="Total Pedidos"
            value={data.totalOrders}
            icon={ShoppingCart}
            trend={{ value: 5.1, isPositive: true }}
          />
          <StatCard
            title="Pedidos Pendientes"
            value={data.pendingOrders}
            icon={Package}
            trend={{ value: 2.3, isPositive: false }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Productos Más Vendidos
            </h2>
            <div className="space-y-4">
              {data.topProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-gray-50"
                >
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {product.sales} unidades vendidas
                    </p>
                  </div>
                  <span className="font-medium text-gray-900">
                    ${product.revenue.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <RecentOrders orders={data.recentOrders} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
