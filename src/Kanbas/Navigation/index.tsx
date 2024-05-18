import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
    return (
        <div id="wd-kanbas-navigation" className="list-group rounded-0">
            <a id="wd-neu-link" rel="noreferrer" target="_blank" 
              href="https://www.northeastern.edu/" 
              className="list-group-item bg-black border-0">
              <img src="/images/NEU.png" alt="" width="75px" /></a>
            <a id="wd-account-link" href="#/Kanbas/Account"
              className="list-group-item text-white bg-black
              text-center border-0">
              <FaRegCircleUser className="fs-1 text text-white" /><br />
              Account</a>
            <a id="wd-dashboard-link" href="#/Kanbas/Dashboard"
              className="list-group-item text-center border-0
                        bg-white text-danger">
              <AiOutlineDashboard className="fs-1 text-danger" /><br />
              Dashboard</a>
            <a id="wd-courses-link" href="#/Kanbas/Courses"
              className="list-group-item text-white
                        bg-black text-center border-0"> 
              <LiaBookSolid className="fs-1 text-danger" /><br />
              Courses</a>
            <li><a id="wd-groups-link" href="#/Kanbas/Groups">Groups</a></li>
            <li><a id="wd-calendar-link" href="#/Kanbas/Calendar">Calendar</a></li>
            <li><a id="wd-inbox-link" href="#/Kanbas/Inbox">Inbox</a></li>
            <li><a id="wd-history-link" href="#/Kanbas/History">History</a></li>
            <li><a id="wd-commons-link" href="#/Kanbas/Commons">Commons</a></li>
            <li><a id="wd-studio-link" href="#/Kanbas/Studio">Studio</a></li>
            <li><a id="wd-help-link" href="#/Kanbas/Help">Help</a></li>
            <li><a id="wd-labs-link" href="#/Labs">Labs</a></li>
    )
}