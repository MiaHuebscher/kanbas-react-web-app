import { Link, useLocation } from "react-router-dom";
export default function AccountNavigation() {
  const links = ["Sign in", "Sign up", "Profile"];
  const { pathname } = useLocation();
  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link to={`/Kanbas/Account/${link}`} className={`border border-0 list-group-item
           ${ pathname.includes(link) ? "active text-black" : "text-danger" }`}> {link} </Link>
      ))}
    </div>
  );
}

