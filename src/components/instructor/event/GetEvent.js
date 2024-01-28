import React, { useEffect, useState } from "react";
import { Table, Space, Card,Button } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import moment from "moment";
import { getInstructorEvent } from "../../../actions/instructorEvent/instructorEvent";

const GetEvent = () => {
  const dispatch = useDispatch();
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await dispatch(getInstructorEvent());
        setEvent(result.data);
      } catch (error) {
        console.error("Error fetching event:", error);
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
      title: "Event Image",
      dataIndex: "imagePath",
      key: "imagePath",
      render: (text, record) => (
        <Space size="middle">
          <img
            src={record.imagePath}
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
      render: (text, record) => (
        <Link to={`/instructor/edit-event/${record.id}`}>
          <Button type="link">{text}</Button>
        </Link>
      ),
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
  ];

  return (
    <Card>
      <div style={{ overflowX: "auto" }}>
        <Table dataSource={event} columns={columns} loading={loading} />
      </div>
    </Card>
  );
};

export default GetEvent;
