import React, { useState, useEffect } from "react";
import { Table, Space, Button, message, Card } from "antd";
import { useDispatch } from "react-redux";
import { approveInstituteUpdation, declineInstituteUpdation, getUpdationInstitute } from "../../actions/adminInstitute/adminInstitute";

const UpdationRequest = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [instructor, setInstructor] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await dispatch(getUpdationInstitute());
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
      const res = await dispatch(approveInstituteUpdation(id));
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
      const res = await dispatch(declineInstituteUpdation(id));
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
      title: "Center Name",
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
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "seatingCapacity",
      dataIndex: "seatingCapacity",
      key: "seatingCapacity",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button type="default" onClick={() => handleDecline(record.id)}>
            Decline
          </Button>
          <Button type="primary" onClick={() => handleApprove(record.id)}>
            Approve
          </Button>
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

export default UpdationRequest;
