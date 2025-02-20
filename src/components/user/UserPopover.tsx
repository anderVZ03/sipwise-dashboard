
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { User, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export const UserPopover = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-2" align="end">
        <div className="flex flex-col gap-1">
          <div className="px-2 py-1.5 mb-1">
            <p className="text-sm font-medium">Admin</p>
            <p className="text-xs text-gray-500">admin@licoreria.com</p>
          </div>
          <Link to="/settings">
            <Button variant="ghost" className="w-full justify-start gap-2" size="sm">
              <Settings className="h-4 w-4" />
              Configuración
            </Button>
          </Link>
          <Button variant="ghost" className="w-full justify-start gap-2 text-red-600 hover:text-red-600 hover:bg-red-50" size="sm">
            <LogOut className="h-4 w-4" />
            Cerrar Sesión
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
