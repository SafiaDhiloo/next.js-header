import Header from "./components/header"
import Section from "./components/section";

import { pages } from "next/dist/build/templates/app-page";
export default function Home() {
  return (
    <div >
      <Header />
      <Section/>
    </div>
  );
}