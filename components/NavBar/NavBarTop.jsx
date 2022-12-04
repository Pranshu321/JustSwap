import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

//IMPORT INTERNAL
import Style from "./NavBar.module.css";
import images from "../../assets";
import { Model, TokenList } from "../index";

//CONTEXT


const NavBar = () => {
  const tokendata = [{
    name: "ETH",
    symbol: "$",
    tokenBalance: 30
  }];
  const menuItems = [
    {
      name: "Swap",
      link: "/",
    },
    {
      name: "Tokens",
      link: "/Tokens",
    },
    {
      name: "Pools",
      link: "/Pools",
    },
  ];
  //USESTATE
  const [openModel, setOpenModel] = useState(false);
  const [openTokenBox, setOpenTokenBox] = useState(false);

  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        <div className={Style.NavBar_box_left}>
          {/* //LOGO IMAGE  */}
          <Link href={"/"}>
            <div className={Style.NavBar_box_left_img}>
              <Image src={images.logo} style={{ marginBottom: "20px" }} alt="logo" width={150} />
            </div>
          </Link>
          {/* MENU ITEMS */}

          <div className={Style.NavBar_box_left_menu}>
            {menuItems.map((el, i) => (
              <Link key={i + 1} href={{ pathname: `${el.link}` }}>
                <p className={Style.NavBar_box_left_menu_item}>{el.name}</p>
              </Link>
            ))}
          </div>
        </div>
        {/* //Middle SECTION */}
        <div className={Style.NavBar_box_middle}>
          <div className={Style.NavBar_box_middle_search}>
            <div className={Style.NavBar_box_middle_search_img}>
              <Image src={images.search} alt="search" width={20} height={20} />
            </div>
            {/* //INPUT SECTION */}
            <input type="text" placeholder="Search Tokens" />
          </div>
        </div>
        {/* //RIGHT SECTION */}
        <div className={Style.NavBar_box_right}>
          <div className={Style.NavBar_box_right_box}>
            <div className={Style.NavBar_box_right_box_img}>
              <Image src={images.ether} alt="NetWork" height={30} width={30} />
            </div>
            <p>{"Network Connect"}</p>
          </div>

          <button onClick={() => setOpenModel(true)}>Connect</button>

          {openModel && (
            <Model setOpenModel={setOpenModel} connectWallet={"connect"} />
          )}
        </div>
      </div>

      {/* //TOTENLIST COMPONENT */}
      {openTokenBox && (
        <TokenList tokenDate={tokendata} setOpenTokenBox={setOpenTokenBox} />
      )}
    </div>
  );
};

export default NavBar;
