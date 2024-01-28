import React, { useState, useEffect } from "react";
import { Table, Space, Button, message,Card } from "antd";
import { useDispatch } from "react-redux";
import { approveInstitute, declineInstitute, getAdminInstitute } from "../../actions/adminInstitute/adminInstitute";

const AdminInstitute = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [institute, setInstitute] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await dispatch(getAdminInstitute());
        setInstitute(result.data);
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
      const res = await dispatch(approveInstitute(id));
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
        const res = await dispatch(declineInstitute(id));
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
      title: " Center Name",
      dataIndex: "centerName",
      key: "centerName",
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
          <Table dataSource={institute} columns={columns} loading={loading} />
        </div>
      </Card>
    
  );
};

export default AdminInstitute;
