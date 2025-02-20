
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Configuración guardada",
      description: "Los cambios han sido guardados exitosamente.",
    });
  };

  return (
    <DashboardLayout>
      <div className="pt-16">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Configuración</h1>
          <p className="text-gray-600 mt-1">
            Administra la configuración de tu tienda
          </p>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Información de la Tienda</CardTitle>
              <CardDescription>
                Información básica sobre tu licorería
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="store-name">Nombre de la Tienda</Label>
                <Input
                  id="store-name"
                  placeholder="Mi Licorería"
                  defaultValue="Licorería Premium"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="store-email">Email de Contacto</Label>
                <Input
                  id="store-email"
                  type="email"
                  placeholder="contacto@licoreria.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="store-phone">Teléfono</Label>
                <Input
                  id="store-phone"
                  placeholder="+34 123 456 789"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notificaciones</CardTitle>
              <CardDescription>
                Configura las alertas del sistema
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Alertas de Stock Bajo</p>
                  <p className="text-sm text-gray-500">
                    Notificar cuando un producto tenga poco stock
                  </p>
                </div>
                <input
                  type="number"
                  className="w-20 p-2 border rounded-md"
                  defaultValue={5}
                  min={1}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Notificaciones por Email</p>
                  <p className="text-sm text-gray-500">
                    Recibir alertas por correo electrónico
                  </p>
                </div>
                <input
                  type="checkbox"
                  className="h-6 w-6"
                  defaultChecked
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button onClick={handleSave}>
              Guardar Cambios
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
