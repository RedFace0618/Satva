import HeaderSection from "@/app/components/header-section";
import ReviewSidebar from "./review-sidebar";
import ReviewContent from "./review-content";
import icon from "../img/icon/3.PNG";

export default function Review() {
  return (
    <div className="border border-green-950 rounded-md p-2 h-screen">
      <HeaderSection title="Fleet Review" icon={icon} />
      <div className="grid grid-cols-4 gap-2">
        <div>
          <ReviewSidebar />
        </div>
        <div className="col-span-3">
          <ReviewContent />
        </div>
      </div>
    </div>
  );
}
