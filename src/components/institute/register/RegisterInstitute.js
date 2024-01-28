import React, { useState } from "react";
import { Form, Input, Button, Card, Col, message } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addInstitute } from "../../../actions/registerInstitute/registerInstitute";

const RegisterInstitute = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    try {
      setLoading(true);
      console.log("Received values:", values);
        const res = await dispatch(addInstitute(values));

        if (res.success) {
          message.success(res.message);
          form.resetFields();
          navigate("/institute/dashboard")
        } else {
          message.error(res.message);
        }
    } catch (error) {
      console.error("An error occurred:", error);
      message.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const validatePassword = (_, value) => {
    if (value && value.length < 8) {
      return Promise.reject(
        new Error("Password must be at least 8 characters long")
      );
    }
    return Promise.resolve();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#DFFF00",
      }}
    >
      <Card title="Register Institute" style={{ width: 400 }}>
        <Form
          name="registration_form"
          onFinish={onFinish}
          form={form}
          scrollToFirstError
          layout="vertical"
        >
          <Col lg={24} xs={24} sm={24}>
            <Form.Item
              name="centerName"
              label="Center Name"
              rules={[
                {
                  required: true,
                  message: "Please input your center name",
                },
              ]}
            >
              <Input placeholder="Name" />
            </Form.Item>
          </Col>
          <Col lg={24} xs={24} sm={24}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  type: "email",
                  message: "The input is not a valid email address",
                },
                {
                  required: true,
                  message: "Please input your email",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
          </Col>

          <Col lg={24} xs={24} sm={24}>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password",
                },
                {
                  validator: validatePassword,
                },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
          </Col>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Register
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default RegisterInstitute;
