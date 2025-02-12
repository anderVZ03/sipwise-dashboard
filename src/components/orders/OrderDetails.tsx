
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Send } from "lucide-react";

interface OrderDetailsProps {
  order: {
    id: number;
    customer: {
      name: string;
      email: string;
      phone: string;
    };
    items: Array<{
      id: number;
      name: string;
      quantity: number;
      price: number;
    }>;
    total: number;
    status: string;
    date: string;
  } | null;
  open: boolean;
  onClose: () => void;
}

export const OrderDetails: React.FC<OrderDetailsProps> = ({
  order,
  open,
  onClose,
}) => {
  if (!order) return null;

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Pedido #{order.id}</SheetTitle>
        </SheetHeader>
        <div className="mt-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">
                Información del Cliente
              </h3>
              <div className="mt-2 space-y-2">
                <p className="text-base font-medium">{order.customer.name}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Mail className="h-4 w-4 mr-2" />
                  {order.customer.email}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Phone className="h-4 w-4 mr-2" />
                  {order.customer.phone}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                Productos
              </h3>
              <div className="space-y-3">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Cantidad: {item.quantity}
                      </p>
                    </div>
                    <p className="font-medium">
                      ${(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center font-medium text-lg">
                <span>Total</span>
                <span>${order.total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <Button className="w-full" onClick={onClose}>
              Cerrar
            </Button>
            <Button variant="outline" className="w-full">
              <Send className="h-4 w-4 mr-2" />
              Enviar WhatsApp
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
