import React from "react";
import {
  CloudServerIcon,
  HomeIcon,
  NotepadIcon,
  ProfileIcon,
  SettingsIcon,
} from "../assets/Assets";
import { useAuthStore } from "../store/useAuthStore";
import { Bell } from "lucide-react";
import { useVariableStore } from "../store/useVariableStore";

const Sidebar: React.FC = () => {
  const logout = useAuthStore((state) => state.clearAuth);
  const clearSelected = useVariableStore((state) => state.clearSelected); // to clear the edit variables

  return (

    <aside className="w-16 flex flex-col justify-between items-center py-4 space-y-4 h-full" >
      <div className="flex items-center flex-col gap-3">
        <button className="p-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
          <HomeIcon />
        </button>
        <button className="p-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
          <Bell height={24} width={24} />
        </button>
        <button className="p-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
          <NotepadIcon />
        </button>
        <button className="p-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
          <CloudServerIcon />
        </button>
        <div className="flex-1"></div>
        <button className="p-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
          <SettingsIcon />
        </button>
      </div>
        <button
          className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors flex "
          onClick={() => {logout();clearSelected()}}
        >
          <ProfileIcon />
        </button>
    </aside>
  );
};

export default Sidebar;
