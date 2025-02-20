
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const notifications = [
  {
    id: 1,
    title: "Stock bajo",
    message: "Whisky Black Label tiene menos de 5 unidades",
    type: "warning",
    time: "Hace 5 minutos",
  },
  {
    id: 2,
    title: "Nuevo pedido",
    message: "Pedido #123 recibido de Juan Pérez",
    type: "info",
    time: "Hace 10 minutos",
  },
  {
    id: 3,
    title: "Pedido cancelado",
    message: "Pedido #120 ha sido cancelado",
    type: "error",
    time: "Hace 30 minutos",
  },
];

export const NotificationsPopover = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="p-4 border-b">
          <h2 className="text-sm font-semibold">Notificaciones</h2>
        </div>
        <div className="divide-y max-h-96 overflow-auto">
          {notifications.map((notification) => (
            <div key={notification.id} className="p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <h3 className="text-sm font-medium">{notification.title}</h3>
                <span className="text-xs text-gray-500">{notification.time}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
