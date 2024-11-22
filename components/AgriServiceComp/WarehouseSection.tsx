import React from "react";
import WareHouseComp1 from "./WareHouseComp1";

const WarehouseSection = () => {
  return (
    <div className="sjcontainer md:px-20 px-4 md:py-24 py-12 relative">
      <div className="grid md:grid-cols-3 grid-cols-1 ">
        <WareHouseComp1 name={"Warehousing"} img={"/card/1.png"} />
        <WareHouseComp1 name={"Logistics"} img={"/card/2.png"} />{" "}
        <WareHouseComp1 name={"Procurement"} img={"/card/3.png"} />{" "}
        <WareHouseComp1 name={"Warehouse & Distribution"} img={"/card/1.png"} />{" "}
        <WareHouseComp1 name={"Labs"} img={"/card/4.png"} />{" "}
        <WareHouseComp1 name={"Collateral Management"} img={"/card/1.png"} />
        {/* <WareHouseComp1 name={"Private Mandi"} img={"/card/5.png"} />{" "}
        <WareHouseComp1 name={"Robust Exports"} img={"/card/6.png"} />{" "} */}
        <WareHouseComp1 name={"Value Added Services"} img={"/card/7.png"} />
      </div>
    </div>
  );
};

export default WarehouseSection;
