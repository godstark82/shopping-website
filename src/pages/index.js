import Discount from "@/components/Home/Discount";
import IntroSection from "@/components/Home/IntroSection";
import Symbol from "@/components/Home/Symbol";
import Featured from "@/components/Home/Featured";
import Latest from "@/components/Home/Latest";
import { StrictMode } from "react";

export default function Home() {
  return (
    <StrictMode>
      <Symbol />
      <IntroSection />
      <Discount />
      <Featured />
      <Latest />
    </StrictMode>
  );
}
