import { Link, useLocation, useParams } from "react-router-dom";
export default function AccountNavigation() {
  const links = [
    {label: "Sign in", path: "Signin"},
    {label: "Sign up", path: "Signup"},
    {label: "Profile", path: "Profile"}
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

