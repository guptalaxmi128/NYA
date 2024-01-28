import React from "react";
import { Tabs, Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import AdminInstitute from "./AdminInstitute";
import UpdationRequest from "./UpdationRequest";

const { TabPane } = Tabs;

const InstituteManagement = () => {
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
          <p style={{ fontSize: "22px" }}>Institute</p>
          <Breadcrumb style={{ margin: "22px 0" }}>
            <Breadcrumb.Item>Institute</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="/admin/dashboard">
                <HomeOutlined />
              </a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Tabs defaultActiveKey="1" tabPosition="top">
          <TabPane tab="Register Institute" key="1">
         <AdminInstitute />
          </TabPane>
          <TabPane tab="Update Request" key="2">
          <UpdationRequest />
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default InstituteManagement;
