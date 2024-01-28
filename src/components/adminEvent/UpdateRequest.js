import React, { useState, useEffect } from "react";
import { Table, Space, Button, message, Card } from "antd";
import moment from "moment";
import { useDispatch } from "react-redux";
import {
  approveEvent,
  approveEventUpdation,
  declineEvent,
 
  declineEventUpdation,
 
  getUpdationEvent,
} from "../../actions/adminEvent/adminEvent";

const UpdateRequest = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await dispatch(getUpdationEvent());
        setEvent(result.data);
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
      const res = await dispatch(approveEventUpdation(id));
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
      const res = await dispatch(declineEventUpdation(id));
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
      dataIndex: "index",
      key: "sno",
      render: (text, record, index) => index + 1,
    },

    {
      title: "Event Image",
      dataIndex: "imagePath",
      key: "imagePath",
      render: (text, record) => (
        <Space size="middle">
          <img
            src={text}
            alt={`${record.imageName}`}
            style={{ width: "50px", height: "50px" }}
          />
        </Space>
      ),
    },
    {
      title: "Event Date",
      dataIndex: "date_time",
      key: "date_time",
      render: (text) => (
        <Space size="middle">{moment(text).format("DD-MM-YYYY")}</Space>
      ),
    },
    {
      title: "Event Name",
      dataIndex: "eventName",
      key: "eventName",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "About",
      dataIndex: "aboutEvent",
      key: "aboutEvent",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleApprove(record.id)}>
            Approve
          </Button>
          <Button type="default" onClick={() => handleDecline(record.id)}>
            Decline
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Card>
      <div style={{ overflowX: "auto" }}>
        <Table dataSource={event} columns={columns} loading={loading} />
      </div>
    </Card>
  );
};

export default UpdateRequest;
