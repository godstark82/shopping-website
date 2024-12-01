import Discount from "@/components/Home/Discount";
import IntroSection from "@/components/Home/IntroSection";
import Featured from "@/components/Home/Featured";
import Latest from "@/components/Home/Latest";
import Cartlist from "@/components/Home/Cartlist";
import Login from "@/components/Home/login";
import Searchbox from "@/components/Home/Searchbox";
import { StrictMode } from "react";

export default function Home() {
  return (
    <StrictMode>
      <Searchbox/>
      <IntroSection />
      <Cartlist />
      <Login />
      <Discount />
      <Featured />
      <Latest />
    </StrictMode>
  );
}
