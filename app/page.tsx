import Aboutus from "@/components/Home/Aboutus";
import Homebanner from "@/components/Home/Homebanner";

import Ourservices from "@/components/Home/Ourservices";

import NewAgriPage from "../components/AgriServiceComp/AgriServiceComp";
import WarehouseSection from "@/components/AgriServiceComp/WarehouseSection";
import CovergingSection from "@/components/AgriServiceComp/CovergingSection";
import TrustedSection from "@/components/AgriServiceComp/TrustedSection";

export default async function Home() {
  return (
    <main className="min-h-[120vh]">
      <Homebanner />
      <Aboutus />
      <NewAgriPage />
      <WarehouseSection />
      <Ourservices />
      <CovergingSection />
      <TrustedSection />
    </main>
  );
}
