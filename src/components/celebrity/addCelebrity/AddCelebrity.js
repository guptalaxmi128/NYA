import React, { useState } from "react";
import { Form, Input, Button, Breadcrumb, Card, message,Row,Col } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

const AddCelebrity = () => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      //   const response = await dispatch(addCategory(formData));
      //   if (response.success) {
      //     message.success(response.message);
      //     form.resetFields();
      //   } else {
      //     message.error(response.message);
      //   }
    } catch (error) {
      console.error(" My oder Error:", error);
      message.error(error.response.data.message);
    }
  };

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
          <p style={{ fontSize: "22px" }}>Add Celebrity</p>
          <Breadcrumb style={{ margin: "22px 0" }}>
            <Breadcrumb.Item>Add Celebrity</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="/admin/dashboard">
                <HomeOutlined />
              </a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Card style={{ padding: "24px" }}>
          <Form form={form} onFinish={onFinish} layout="vertical">
          <Row gutter={[16, 16]}>
                <Col lg={12} sm={24} xs={24}>
            <Form.Item
              name="celebrityName"
              label="Celebrity Name"
              rules={[
                { required: true, message: "Please enter celebrity name" },
              ]}
            >
              <Input placeholder="Celebrity Name" />
            </Form.Item>
            </Col>
            <Col lg={12} sm={24} xs={24}>
            <Form.Item
              name="videoPath"
              label="Video Path"
              rules={[{ required: true, message: "Please enter video path" }]}
            >
              <Input placeholder="Video Path" />
            </Form.Item>
            </Col>
            </Row>
            <Form.Item style={{ textAlign: "center" }}>
              <Button
                htmlType="button"
                onClick={() => form.resetFields()}
                style={{ marginRight: 8 }}
              >
                Reset
              </Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default AddCelebrity;
