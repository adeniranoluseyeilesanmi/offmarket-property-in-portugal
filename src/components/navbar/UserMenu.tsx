import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Menu } from "lucide-react";

interface UserMenuProps {
  onMobileMenuToggle: () => void;
}

const UserMenu = ({ onMobileMenuToggle }: UserMenuProps) => {
  return (
    <div className="flex items-center space-x-3">
      <Button variant="ghost" size="icon" className="relative">
        <Bell size={20} />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
      </Button>
      
      <Avatar>
        <AvatarImage src="https://i.pravatar.cc/150?img=42" />
        <AvatarFallback>UD</AvatarFallback>
      </Avatar>

      {/* Mobile menu button */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="md:hidden"
        onClick={onMobileMenuToggle}
      >
        <Menu size={20} />
      </Button>
    </div>
  );
};

export default UserMenu;