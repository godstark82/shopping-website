import Featured from "@/components/Home/Featured";
import Latest from "@/components/Home/Latest";
import Cartlist from "@/components/Home/Cartlist";
import Login from "@/components/Home/login";
import MainCarousel from "@/components/Home/Carousel";
import { StrictMode } from "react";

export default function Home() {
  return (
    <StrictMode>
      <MainCarousel />
      <Login />
      <Cartlist />
      <Featured />
      <Latest />
    </StrictMode>
  );
}
