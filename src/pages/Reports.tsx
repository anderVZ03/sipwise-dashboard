
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { 
  Download,
  FileSpreadsheet,
  FileText,
  Calendar,
  BarChart3,
  PieChart
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Reports = () => {
  return (
    <DashboardLayout>
      <div className="pt-16">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Reportes</h1>
          <p className="text-gray-600 mt-1">
            Genera y descarga reportes del sistema
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Ventas por Período
              </CardTitle>
              <CardDescription>
                Análisis detallado de ventas por período de tiempo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Período</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Último mes</option>
                    <option>Último trimestre</option>
                    <option>Último año</option>
                  </select>
                </div>
                <Button className="w-full">
                  <FileSpreadsheet className="h-4 w-4 mr-2" />
                  Exportar Excel
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                Productos Más Vendidos
              </CardTitle>
              <CardDescription>
                Top productos por cantidad y valor de ventas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Cantidad</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Top 10</option>
                    <option>Top 20</option>
                    <option>Top 50</option>
                  </select>
                </div>
                <Button className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Descargar PDF
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Reporte de Inventario
              </CardTitle>
              <CardDescription>
                Estado actual del inventario y movimientos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tipo</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Stock actual</option>
                    <option>Movimientos</option>
                    <option>Stock bajo</option>
                  </select>
                </div>
                <Button className="w-full">
                  <FileText className="h-4 w-4 mr-2" />
                  Generar Reporte
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
