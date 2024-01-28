import React, { useState, useEffect } from "react";
import { Table, Space, Button, message, Breadcrumb, Card } from "antd";
import { EditOutlined, DeleteOutlined, HomeOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { approveInstructor, declineInstructor, getAdminInstructor } from "../../actions/adminInstructor/adminInstructor";

const AdminInstructor = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [instructor, setInstructor] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await dispatch(getAdminInstructor());
        setInstructor(result.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleApprove = async (id) => {
    try {
      const res = await dispatch(approveInstructor(id));
      if (res.success) {
        message.success(res.message);
      } else {
        message.error(res.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      if (error.response && error.response.data) {
        message.error(error.response.data.message);
      } else {
        message.error("An error occurred. Please try again later.");
      }
    }
  };
  

  const handleDecline = async (id) => {
    try {
        const res = await dispatch(declineInstructor(id));
        if (res.success) {
          message.success(res.message);
        } else {
          message.error(res.message);
        }
      } catch (error) {
        console.error("An error occurred:", error);
        if (error.response && error.response.data) {
          message.error(error.response.data.message);
        } else {
          message.error("An error occurred. Please try again later.");
        }
      }
  };

  const columns = [
    {
      title: "SNo",
      dataIndex: "sno",
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
      title: "NYCCertificateNumber",
      dataIndex: "NYCCertificateNumber",
      key: "NYCCertificateNumber",
    },
    {
        title: "Trainer As",
        dataIndex: "trainerAs",
        key: "trainerAs",
        render: (text) => (text ? text : "-"),
      },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
        {record.approvedByAdmin ? (
          // If approvedByAdmin is true, show Decline button
          <Button type="default" onClick={() => handleDecline(record.id)}>
            Decline
          </Button>
        ) : (
          // If approvedByAdmin is false, show Approve button
          <Button type="primary" onClick={() => handleApprove(record.id)}>
            Approve
          </Button>
        )}
      </Space>
      ),
    },
  ];

  return (
   
      
      <Card>
        <div style={{ overflowX: "auto" }}>
          <Table dataSource={instructor} columns={columns} loading={loading} />
        </div>
      </Card>
    
  );
};

export default AdminInstructor;
