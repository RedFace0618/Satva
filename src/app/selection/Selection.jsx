import HeaderSection from "@/app/components/header-section";
import SelectionSideBar from "./selection-sidebar/SelectionSidebar";
import SelectionContent from "./section-content";
import icon from "../img/icon/1.PNG";

export default function Selection() {
  return (
    <div className="border border-green-950 rounded-md p-2 h-screen">
      <HeaderSection title="Fleet Selection" icon={icon} />
      <div className="grid grid-cols-4 gap-2">
        <div>
          <SelectionSideBar />
        </div>
        <div className="col-span-3">
          <SelectionContent />
        </div>
      </div>
    </div>
  );
}
