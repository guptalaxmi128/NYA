import React from "react";
import { Tabs, Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import CreateEvent from "./CreateEvent";
import GetEvent from "./GetEvent";

const { TabPane } = Tabs;

const EventManagement = () => {
  return (
    <>
      <div style={{ padding: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "5px",
          }}
        >
          <p style={{ fontSize: "22px" }}>Event</p>
          <Breadcrumb style={{ margin: "22px 0" }}>
            <Breadcrumb.Item>Event</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="/instructor/dashboard">
                <HomeOutlined />
              </a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Tabs defaultActiveKey="1" tabPosition="top">
          <TabPane tab="Create Event" key="1">
          <CreateEvent />
          </TabPane>
          <TabPane tab="Event" key="2">
         <GetEvent />
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default EventManagement;
