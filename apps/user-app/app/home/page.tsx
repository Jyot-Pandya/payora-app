import { HeroSection } from "../../components/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Payora",
  description: "Welcome to the Payora digital wallet application",
};

export default function Home() {

  return <HeroSection />;
}
