'use client'

import React from "react";
import SidebarNavItem from "./SidebarNavItem";
import { usePathname } from "next/navigation";
// import { useRouter } from "next/router";
// import { useLocation } from "react-router-dom";

export default function SidebarNavs({data=[]}) {

    const pathname = usePathname();
    const pathid = pathname.split("/");
  return (
    <div>
      {data.map((navItem, navItemIndex) => {
        return (
            <SidebarNavItem
            isActive={navItem.path == pathid[2]}
            key={navItemIndex}
            label={navItem.label ?? ""}
            path={navItem.path ?? ""}
            icon={navItem.icon ?? ""}
            // iconPath={navItem.iconPath ?? ""}
          />
        );
      })}
    </div>
  );
}
