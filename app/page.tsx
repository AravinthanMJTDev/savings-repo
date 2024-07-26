import Image from "next/image";
import EvsRsaving from "./EvsR/page";
import CostChart from "./cumulatedsavings/page";
import TotalSavings from "./totalsavings/page";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full ">
        <EvsRsaving />
      </div>
      <div className="flex flex-row justify-between w-full font-semibold">
        <Link href="/cumulatedsavings">cumulated</Link>
        <Link href="/totalsavings">Total Savings</Link>
      </div>
    </main>
  );
}
