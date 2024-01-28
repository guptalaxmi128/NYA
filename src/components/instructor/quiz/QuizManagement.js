import React from "react";
import { Tabs, Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import CreateQuiz from "./CreateQuiz";

const { TabPane } = Tabs;

const QuizManagement = () => {
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
          <p style={{ fontSize: "22px" }}>Quiz</p>
          <Breadcrumb style={{ margin: "22px 0" }}>
            <Breadcrumb.Item>Quiz</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="/instructor/dashboard">
                <HomeOutlined />
              </a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Tabs defaultActiveKey="1" tabPosition="top">
          <TabPane tab="Create Quiz" key="1">
          <CreateQuiz />
          </TabPane>
          <TabPane tab="Quiz" key="2">
           
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default QuizManagement;
