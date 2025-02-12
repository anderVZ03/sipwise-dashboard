
import { useState, useEffect } from 'react';

interface SalesData {
  totalRevenue: number;
  averageTicket: number;
  totalOrders: number;
  pendingOrders: number;
  topProducts: Array<{
    id: number;
    name: string;
    sales: number;
    revenue: number;
  }>;
  recentOrders: Array<{
    id: number;
    customer: string;
    amount: number;
    status: string;
    date: string;
  }>;
}

export const useSalesData = () => {
  const [data, setData] = useState<SalesData>({
    totalRevenue: 125840,
    averageTicket: 350,
    totalOrders: 359,
    pendingOrders: 45,
    topProducts: [
      { id: 1, name: "Whisky Premium", sales: 145, revenue: 25000 },
      { id: 2, name: "Vodka Especial", sales: 120, revenue: 18000 },
      { id: 3, name: "Ron Añejo", sales: 98, revenue: 15000 },
      { id: 4, name: "Gin Premium", sales: 85, revenue: 12000 },
    ],
    recentOrders: [
      { id: 1, customer: "Juan Pérez", amount: 450, status: "pending", date: "2024-03-15" },
      { id: 2, customer: "María García", amount: 850, status: "completed", date: "2024-03-15" },
      { id: 3, customer: "Carlos López", amount: 320, status: "processing", date: "2024-03-15" },
      { id: 4, customer: "Ana Martínez", amount: 670, status: "completed", date: "2024-03-14" },
    ],
  });

  return { data };
};
