import { useContext } from "react";

import { AuthContext } from "../../context/auth-context";
import useDarkmode from "../../../hooks/dark-mode";

import NavItem from "./NavItem/NavItem";
import Icons, { sun, moon } from "../../UIElements/Icons/Icons";
import Button from "../../UIElements/Button/Button";

const Navbar = () => {
  const [theme, toggleTheme] = useDarkmode();
  const themeBtn = theme === "dark" ? sun : moon;

  const authContext = useContext(AuthContext);

  const loginHandler = () => {
    authContext.login();
  };

  return (
    <div className="p-4">
      <div className="float-left">
        <NavItem path="/" title="Home" />
      </div>
      <div className="float-right">
        <ul className="-mt-2">
          <li className="inline mx-2">
            <Button
              bgColor="bg-blue-400"
              textColor="text-white"
              title="Login"
              hoverColor="bg-yellow-300"
              hoverTextColor="text-gray-500"
              clickHandler={loginHandler}
            />
          </li>
          <li className="inline mx-2">
            <button
              className="text-white p-2"
              onClick={toggleTheme}
              type="button"
            >
              <Icons cssClass="h-5 w-5 fill-blue-400 stroke-blue-400">
                {themeBtn}
              </Icons>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
