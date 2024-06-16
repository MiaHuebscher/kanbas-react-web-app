import { Link, useLocation, useParams } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? [{label: "Profile", path: "Profile"}] : [
    {label: "Sign in", path: "Signin"},
    {label: "Sign up", path: "Signup"},
  ];
  const { pathname } = useLocation();
  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link to={`/Kanbas/Account/${link.path}`} className={`border border-0 list-group-item bg-white
           ${ pathname.includes(link.path) ? "active text-black" : "text-danger" }`}> {link.label} </Link>
      ))}
    </div>
  );
}

