import { ExitToAppOutlined } from "@mui/icons-material";
import account from "../../../img/account image - KS.png";

export default function SidebarFooter() {
    return (
        <div className='flex justify-start'>
            <div className="pr-4">
                <img src={account.src} alt="account" />
            </div>
            <div className="pr-4">
                <div className="text-sm font-['inter'] text-neutral-100">Kiruthika Sureshkumar</div>
                <div className="text-sm font-['inter'] text-neutral-60">kiruthika.s@satvatrust.com</div>
            </div>
            <div className="pt-1"> <ExitToAppOutlined /> </div>
        </div>
    )
}
