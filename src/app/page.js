"use client"
import Image from "next/image";
import HomePage from "./home/page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "./useMediaQuery";
import MobileHomePage from "./home/mobileHomePage";
export default function Home() {
  const isMobile = useMediaQuery("(max-width:767px)")
  return (
    <>
    {isMobile ?<MobileHomePage/>:
<HomePage/>
    }
    </>
  );
}
