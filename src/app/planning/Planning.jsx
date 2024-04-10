import HeaderSection from "@/app/components/header-section";
import PlanningSidebar from "./planning-sidebar";
import PlanningContent from "./planning-content";
import icon from "../img/icon/2.PNG";

export default function Planning() {
  return (
    <div className="border border-green-950 rounded-md p-2 h-screen">
      <HeaderSection title="Planning" icon={icon} />
      <div className="grid grid-cols-4 gap-2">
        <div>
          <PlanningSidebar />
        </div>
        <div className="col-span-3">
          <PlanningContent />
        </div>
      </div>
    </div>
  );
}
