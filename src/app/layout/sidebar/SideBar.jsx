import React from "react";
import SidebarHeader from "./header";
import SidebarNavs from "./navs";
import SidebarFooter from "./footer";
import {
  AccountCircleOutlined,
  CalendarTodayOutlined,
  ChatBubbleOutline,
  FolderOpenOutlined,
  People,
} from "@mui/icons-material";

export default function Sidebar() {
  const ToolData = [
    { label: "Fleet Selection", icon: <ChatBubbleOutline />, path: "selection" },
    { label: "Planning", icon: <CalendarTodayOutlined />, path: "planning" },
    { label: "Fleet Review", icon: <FolderOpenOutlined />, path: "review" },
  ];
  
  const ManageData = [
    { label: "Team", icon: <People />, path: "team" },
    {
      label: "Permissions",
      icon: <AccountCircleOutlined />,
      path: "permission",
    },
  ];

  return (
    <div className="bg-dark-green font-['inter'] text-white h-full px-2 mx-2 w-72">
      <SidebarHeader />
      <div className="mt-4">
        <div className="text-sm p-2">Tools</div>
        <SidebarNavs data={ToolData} />
      </div>
      <div className="mt-49 mb-44">
        <div className="text-sm p-2">Manage</div>
        <SidebarNavs data={ManageData} />
      </div>
      <SidebarFooter />
    </div>
  );
}
