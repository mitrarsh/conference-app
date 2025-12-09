import Image from "next/image";
import { Bilboard } from "./components/bilboard/Bilboard";

export default function Home() {
  return (
    <div className="flex min-h-screen ">
      <Bilboard/>
    </div>
  );
}
