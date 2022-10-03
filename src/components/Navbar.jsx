import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import avatar from "../data/avatar.jpg";
import { useStateContext } from "../context/ContexProvider";

const Navbar = () => {
  const { setActiveMenu, screenSize, setScreenSize } = useStateContext();
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize());
  }, []);
  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2">
      <button onClick={() => setActiveMenu((active) => !active)}>
        <AiOutlineMenu />
      </button>
      <div className="flex text-2xl">
        <FiShoppingCart />
        <RiNotification3Line />
        <BsChatLeft />
        <img src={avatar} className={"rounded-full w-5 h-5"} alt="avatar" />
      </div>
    </div>
  );
};

export default Navbar;
