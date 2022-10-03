import React from "react";
import { links } from "../data/dummy";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { useStateContext } from "../context/ContexProvider";

const Sidebar = () => {
  const { setActiveMenu, currentColor, screenSize } = useStateContext();

  const handleCloseSidebar = () => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  return (
    <div className="h-screen bg-slate-100 md:overflow-hidden md:hover:overflow-auto overflow-auto dark:bg-zinc-600">
      <div className="mb-10">
        <div className="flex items-center justify-between text-2xl">
          <Link to={"/"} onClick={handleCloseSidebar}>
            <div className="flex items-center ml-4 gap-8 mt-4">
              <SiShopware />
              <span className="font-semibold">Shoppy</span>
            </div>
          </Link>

          <button
            className="mr-3"
            onClick={(isActive) => setActiveMenu(!isActive)}>
            <MdOutlineCancel />
          </button>
        </div>
        <div className="p-6">
          {links.map((title) => (
            <div className="mt-2" key={title.title}>
              <h2 className="uppercase dark:text-slate-300">{title.title}</h2>
              {title.links.map((content) => (
                <NavLink
                  key={content.name}
                  to={content.name}
                  onClick={handleCloseSidebar}
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-3 mt-2 ml-3 bg-cyan-500 p-2 rounded-lg dark:text-slate-100 text-white"
                      : "flex items-center gap-3 mt-2 ml-3 p-2 dark:text-slate-100 hover:bg-white hover:dark:text-slate-800 rounded-lg"
                  }
                  style={({ isActive }) => ({
                    background: isActive ? currentColor : "",
                  })}>
                  {content.icon}
                  <h3>{content.name}</h3>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
