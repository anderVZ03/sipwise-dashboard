
import { useState } from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface Order {
  id: number;
  customer: string;
  amount: number;
  status: string;
  date: string;
}

interface RecentOrdersProps {
  orders: Order[];
}

export const RecentOrders: React.FC<RecentOrdersProps> = ({ orders }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completado';
      case 'pending':
        return 'Pendiente';
      case 'processing':
        return 'En proceso';
      default:
        return status;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">Pedidos Recientes</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {orders.map((order) => (
          <div key={order.id} className="p-6 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">{order.customer}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {format(new Date(order.date), "d 'de' MMMM, yyyy", { locale: es })}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-medium text-gray-900">
                  ${order.amount.toLocaleString()}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    order.status
                  )}`}
                >
                  {getStatusText(order.status)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
