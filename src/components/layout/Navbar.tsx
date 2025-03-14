
import { Menu, Search } from 'lucide-react';
import { NotificationsPopover } from '../notifications/NotificationsPopover';
import { UserPopover } from '../user/UserPopover';

interface NavbarProps {
  onMenuClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <nav className="bg-white border-b border-gray-200 fixed right-0 left-0 z-30 h-16">
      <div className="px-4 h-full flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
          <div className="ml-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <NotificationsPopover />
          <UserPopover />
        </div>
      </div>
    </nav>
  );
};
