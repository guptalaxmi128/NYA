import React, { useState, useEffect } from "react";
import { Table, Space, Button, message,Breadcrumb,Card } from "antd";
import { EditOutlined, DeleteOutlined,HomeOutlined } from "@ant-design/icons";
import { getUser } from "../../actions/users/users";
import { useDispatch } from "react-redux";

const Users = () => {
  const dispatch=useDispatch();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await dispatch(getUser());
        setUsers(result.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);



  const columns = [
    {
      title: "SNo",
      dataIndex: "index",
      key: "sno",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
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
    },
   
  ];

  return (
    <div style={{ padding: "20px" }}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "5px",
      }}
    >
      <p style={{ fontSize: "22px" }}>Users</p>
      <Breadcrumb style={{ margin: "22px 0" }}>
        <Breadcrumb.Item>Users</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/admin/dashboard">
            <HomeOutlined />
          </a>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
    <Card >
        <div style={{ overflowX: "auto" }}>
      <Table dataSource={users} columns={columns} loading={loading} />
      </div>
      </Card>
    </div>
  );
};

export default Users;
