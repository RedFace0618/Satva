'use client'
import { useRouter } from "next/navigation";

const SidebarNavItem = ({
  icon = "",
  isActive = false,
  label = "Nav Item Label",
  path = ""
}) => {

  const router = useRouter();
  const activeName = isActive
    ? "py-2 px-3 bg-light-green text-white bg-opacity-50 cursor-pointer"
    : "py-2 px-3 cursor-pointer";
  const handleClick = (e) => {
    e.preventDefault();
     // preventing the form event from refreshing the page
     e.preventDefault()
     router.push(`/${path}`);
  };

  return (
    <div className={activeName} onClick={(e) => handleClick(e) }>
      <span className="font-['inter'] text-base text-neutral-10">
        {icon} {label}
      </span>
    </div>
  );
};

export default SidebarNavItem;
