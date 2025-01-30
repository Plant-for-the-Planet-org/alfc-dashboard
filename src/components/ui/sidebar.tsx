import {
  Badge,
  ChevronDown,
  ChevronLeft,
  ClipboardPlus,
  Contact,
  HelpCircle,
  Home,
  Hospital,
  Settings,
} from "lucide-react";
import Link from "next/link";
import React, { useState, type ReactNode } from "react";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";

interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  href: string;
}

interface SidebarItemWithSubmenuProps extends SidebarItemProps {
  submenuItems: SidebarItemProps[];
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, href }) => (
  <Button asChild variant={"ghost"} className="flex justify-start">
    <Link href={href}>
      {icon}
      {label}
    </Link>
  </Button>
);

const SidebarItemWithSubmenu: React.FC<SidebarItemWithSubmenuProps> = ({
  icon,
  label,
  href,
  submenuItems,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex w-full items-center justify-between divide-x">
        <Button
          variant={"ghost"}
          asChild
          className="flex flex-grow justify-start rounded-r-none"
        >
          <Link href={href}>
            {icon}
            {label}
          </Link>
        </Button>
        <Button
          className="rounded-l-none p-2"
          variant={"ghost"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </Button>
      </div>
      {isOpen && (
        <div className="pl-8">
          <div className="rounded bg-gray-50">
            {submenuItems.map((item, key) => (
              <Button
                key={key}
                variant={"ghost"}
                asChild
                className="flex justify-start"
              >
                <Link href={item.href}>
                  {item.icon}
                  {item.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white transition-transform duration-300 ease-in-out md:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex h-16 items-center justify-between border-b px-4">
        <span className="text-2xl font-semibold">Dashboard</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="md:hidden"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>
      <ScrollArea className="flex-1 py-4">
        <nav className="space-y-1 px-2">
          <SidebarItem
            icon={<Home className="mr-3 h-5 w-5" />}
            label="Dashboard"
            href="/dashboard"
          />

          <SidebarItemWithSubmenu
            icon={<ClipboardPlus className="mr-3 h-5 w-5" />}
            label="Contacts"
            href="/contacts"
            submenuItems={[
              {
                label: "Create Contact",
                href: "/dashboard/contacts/create",
                icon: <Badge className="mr-3 h-5 w-5" />,
              },
              {
                label: "View Contact",
                href: "/dashboard/contacts/1",
                icon: <Badge className="mr-3 h-5 w-5" />,
              },
              {
                label: "Edit Contact",
                href: "/dashboard/contacts/1/edit",
                icon: <Badge className="mr-3 h-5 w-5" />,
              },
            ]}
          />
          {/* <SidebarItemWithSubmenu
            icon={<Users className="mr-3 h-5 w-5" />}
            label="Users"
            href="/users"
            submenuItems={["List", "Add User", "Roles"]}
          /> */}
          <SidebarItem
            icon={<Settings className="mr-3 h-5 w-5" />}
            label="Settings"
            href="/settings"
          />
          <SidebarItem
            icon={<HelpCircle className="mr-3 h-5 w-5" />}
            label="Help"
            href="/help"
          />
        </nav>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
