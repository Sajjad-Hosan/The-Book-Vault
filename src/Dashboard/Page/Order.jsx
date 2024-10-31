import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Delevary from "./orderpages/Delevary";
import Neworders from "./orderpages/Neworders";
import Totalorders from "./orderpages/Totalorders";
import Cancel from "./orderpages/cancel";

const Order = () => {
  return (
    <div className="rounded-lg">
      <Tabs className="text-1 p-4">
        <TabList className="text-black font-bold bg-gray-300 p-2">
          <Tab selectedClassName="bg-red-600 rounded text-white">
            New Orders
          </Tab>
          <Tab selectedClassName="bg-red-600 rounded text-white">
            Delivery Orders
          </Tab>
          <Tab selectedClassName="bg-red-600 rounded text-white">
            Cancel Orders
          </Tab>
          <Tab selectedClassName="bg-red-600 rounded text-white">
            Total Orders
          </Tab>
        </TabList>

        <TabPanel className="p-2">
          <Neworders></Neworders>
        </TabPanel>
        <TabPanel>
          <Delevary></Delevary>
        </TabPanel>
        <TabPanel>
          <Cancel></Cancel>
        </TabPanel>
        <TabPanel>
          <Totalorders></Totalorders>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
