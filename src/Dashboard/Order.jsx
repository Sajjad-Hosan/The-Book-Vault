import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Order = () => {
  return (
    <div className="">
      <Tabs>
        <TabList className="text-white font-bold bg-blue-400">
          <Tab>New Orders</Tab>
          <Tab>Delevary Orders</Tab>
          <Tab>Cancel Orders</Tab>
          <Tab>Total Orders</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
      </Tabs>
      
    </div>
  );
};

export default Order;
