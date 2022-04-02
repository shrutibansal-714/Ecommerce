import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import {FaSearch, FaCartPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import "./Header.css"


const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "25vmax",
  navColor1: "#F3CFC6",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "2vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
 
  profileIconUrl: "/login",
  searchIcon:true,
  SearchIconElement:FaSearch,
  cartIcon:true,
  CartIconElement:FaCartPlus,
  profileIcon:true,
  ProfileIconElement:CgProfile,

  
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
  
};

const Header = () => {

  return (
    <div >
      <ReactNavbar  {...options}  />
    </div>
  )
};

export default Header;