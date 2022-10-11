import useDarkmode from "../../../hooks/dark-mode";

import NavItem from "./NavItem/NavItem";
import Icons, { sun, moon } from "../../UIElements/Icons/Icons";

const Navbar = () => {
  const [theme, toggleTheme] = useDarkmode();
  const themBtn = theme === "dark" ? sun : moon;

  return (
    <div className="p-4">
      <div className="float-left">
        <NavItem path="/" title="Home" />
      </div>
      <div className="float-right">
        <button className="text-white" onClick={toggleTheme} type="button">
          <Icons cssClass="h-5 w-5 fill-blue-400 stroke-blue-400">
            {themBtn}
          </Icons>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
