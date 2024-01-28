import React from "react";
import { Tabs, Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import GetEvent from "./GetEvent";
import UpdateRequest from "./UpdateRequest";

const { TabPane } = Tabs;

const AdminEvent = () => {
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
              <a href="/admin/dashboard">
                <HomeOutlined />
              </a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Tabs defaultActiveKey="1" tabPosition="top">
          <TabPane tab="Event" key="1">
            <GetEvent />
          </TabPane>
          <TabPane tab="Update Request" key="2">
            <UpdateRequest />
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default AdminEvent;
