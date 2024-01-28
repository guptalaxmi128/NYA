import React, { useState, useEffect } from "react";
import {
  Table,
  Space,
  Button,
  message,
  Breadcrumb,
  Card,
  Modal,
  Form,
  Input,
} from "antd";
import { EditOutlined, HomeOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {
  getInstitute,
  updateInstitute,
} from "../../../actions/registerInstitute/registerInstitute";

const Profile = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await dispatch(getInstitute());
        setUsers([result.data]);
        setName(result.data.centerName);
        setEmail(result.data.email);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleEdit = () => {
    setIsModalVisible(true);
  };

  const handleSave = async () => {
    try {
      const values = await form.validateFields();
      console.log("Form values:", values);

      // console.log(data)
      const res = await dispatch(updateInstitute(values));

      if (res.success) {
        message.success(res.message);
        setIsModalVisible(false);
      } else {
        message.error(res.message);
      }
    } catch (error) {
      console.error("Error updating instructor:", error);
      message.error(error.response.data.message);
    }
  };

  const columns = [
    {
      title: "Center Name",
      dataIndex: "centerName",
      key: "cenerName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Mobile Number",
      dataIndex: "mobileNumber",
      key: "mobileNumber",
      render: (text) => (text ? text : "-"),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (text) => (text ? text : "-"),
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      render: (text) => (text ? text : "-"),
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      render: (text) => (text ? text : "-"),
    },
    {
      title: "Seating Capacity",
      dataIndex: "seatingCapacity",
      key: "seatingCapacity",
      render: (text) => (text ? text : "-"),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" icon={<EditOutlined />} onClick={handleEdit}>
            Edit
          </Button>
        </Space>
      ),
    },
  ];

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <p style={{ fontSize: "22px" }}>Profile</p>
        <Breadcrumb style={{ margin: "22px 0" }}>
          <Breadcrumb.Item>Profile</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/institute/dashboard">
              <HomeOutlined />
            </a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Card>
        <div style={{ overflowX: "auto" }}>
          <Table
            dataSource={users}
            columns={columns}
            loading={loading}
            pagination={false}
          />
        </div>
      </Card>
      <Modal
        title="Edit User"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleSave}>
            Save
          </Button>,
        ]}
      >
        <Form form={form} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
          <Form.Item label="Center Name">
            <Input placeholder="Name" value={name} disabled />
          </Form.Item>
          <Form.Item label="Email">
            <Input placeholder="Email" value={email} disabled />
          </Form.Item>
          <Form.Item
            label="Mobile Number"
            name="mobileNumber"
            rules={[
              { required: true, message: "Please enter a mobile number" },
              {
                pattern: /^\d{10}$/,
                message: "Mobile number must have exactly 10 digits",
              },
            ]}
          >
            <Input placeholder="Mobile Number" />
          </Form.Item>
          <Form.Item
            label="City"
            name="city"
            rules={[{ required: true, message: "Please enter a city" }]}
          >
            <Input placeholder="City" />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please enter an address" }]}
          >
            <Input placeholder="Address" />
          </Form.Item>
          <Form.Item
            label="Location"
            name="location"
            rules={[{ required: true, message: "Please enter a location" }]}
          >
            <Input placeholder="Location" />
          </Form.Item>
          <Form.Item
            label="Seating Capacity"
            name="seatingCapacity"
            rules={[
              { required: true, message: "Please enter seating capacity" },
            ]}
          >
            <Input placeholder="Seating Capacity" type="number" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Profile;
