import React from "react";
import { Form, Input, Button, Breadcrumb, Card, Row, Col, message } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { instructorPassword } from "../../../actions/instructorPassword/instructorPassword";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      console.log("Received values:", values);
      const res = await dispatch(instructorPassword(values));

      if (res.success) {
        message.success(res.message);
        form.resetFields();
      } else {
        message.error(res.message);
      }
    } catch (error) {
      console.error("Error changing password:", error);
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
          <p style={{ fontSize: "22px" }}>Change Password</p>
          <Breadcrumb style={{ margin: "22px 0" }}>
            <Breadcrumb.Item>Change Password</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="/instructor/dashboard">
                <HomeOutlined />
              </a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Card>
          <Form
            form={form}
            onFinish={onFinish}
            autoComplete="off"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Row gutter={[16, 16]}>
              <Col lg={12} sm={24} xs={24}>
                <Form.Item
                  label="Old Password"
                  name="oldPassword"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your old password",
                    },
                  ]}
                >
                  <Input.Password placeholder="Old Password" />
                </Form.Item>
              </Col>
              <Col lg={12} sm={24} xs={24}>
                <Form.Item
                  label="New Password"
                  name="newPassword"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your new password",
                    },
                  ]}
                >
                  <Input.Password placeholder="New Password" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item wrapperCol={{ span: 4 }}>
              <Button type="primary" htmlType="submit">
                Change Password
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default ChangePassword;
