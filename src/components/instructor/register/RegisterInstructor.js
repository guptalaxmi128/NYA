import React, { useState } from "react";
import { Form, Input, Button, Card,  Col, message } from "antd";
import { addInstructor } from "../../../actions/registerInstructor/registerInstructor";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const RegisterInstructor = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [loading, setLoading] = useState(false);
  const [form]=Form.useForm();
  const onFinish = async (values) => {
    try {
      setLoading(true);
      console.log("Received values:", values);
      const res = await dispatch(addInstructor(values));

      if (res.success) {
        message.success(res.message);
        form.resetFields();
        navigate("/instructor/dashboard")
      } else {
        message.error(res.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      message.error(
         error.response.data.message
      );
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
      <Card title="Register Instructor" style={{ width: 400 }}>
        <Form
          name="registration_form"
          onFinish={onFinish}
          form={form}
          scrollToFirstError
          layout="vertical"
        >
          <Col lg={24} xs={24} sm={24}>
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                  message: "Please input your name",
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

          <Col lg={24} xs={24} sm={24}>
            <Form.Item
              name="NYCCertificateNumber"
              label="NYC Certificate Number"
              rules={[
                {
                  required: true,
                  message: "Please input your NYC Certificate Number",
                },
              ]}
            >
              <Input placeholder="Certificate Number" />
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

export default RegisterInstructor;
