"use client";

import Header from "@/components/Header";
import SideNav from "@/components/SideNav";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import dynamic from "next/dynamic";
import { useState } from "react";
const IconController = dynamic(() => import("@/components/IconController"), {
  ssr: false,
});
const BackgroundController = dynamic(
  () => import("@/components/BackgroundController"),
  { ssr: false }
);
const LogoPreview = dynamic(() => import("@/components/LogoPreview"), {
  ssr: false,
});

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [updateStorage, setUpdateStorage] = useState({});
  const [downloadIcon, setDownloadIcon] = useState();
  return (
    <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
      <div className="flex flex-col h-screen">
        <Header DownloadIcon={setDownloadIcon} />
        <div className="flex flex-1 overflow-hidden">
          <div className="w-64 ">
            <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-6 overflow-hidden">
            <div className="md:col-span-2 border shadow-sm p-5 overflow-y-auto">
              {selectedIndex == 0 ? (
                <IconController />
              ) : (
                <BackgroundController />
              )}
            </div>
            <div className="md:col-span-3  overflow-y-auto">
              <LogoPreview downloadIcon={downloadIcon} />
            </div>
            {/* <div className="bg-blue-500 overflow-y-auto">Personal</div> */}
          </div>
        </div>
      </div>
    </UpdateStorageContext.Provider>
  );
}
