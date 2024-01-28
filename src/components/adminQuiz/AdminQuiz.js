import React, { useState, useEffect } from "react";
import { Table, Space, Button, message, Card,Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { approveQuiz, declineQuiz, getAdminQuiz } from "../../actions/adminQuiz/adminQuiz";


const AdminQuiz = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await dispatch(getAdminQuiz());
        setQuiz(result.data);
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
      const res = await dispatch(approveQuiz(id));
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
      const res = await dispatch(declineQuiz(id));
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
      title: "Quiz Image",
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
      title: "Quiz Name",
      dataIndex: "quizName",
      key: "quizName",
     
    },
    {
      title: "Question",
      dataIndex: "question",
      key: "question",
    },
    {
      title: "Answer",
      dataIndex: "answer",
      key: "answer",
    },
    {
        title: "Points",
        dataIndex: "points",
        key: "points",
      },
      {
        title: "Option",
        dataIndex: "option",
        key: "option",
        render: (text, record) => {
          // Convert the 'options' object into an unordered list for display
          const optionsList = (
            <ul>
              {Object.entries(record.option).map(([key, value]) => (
                <li key={key}>
                  {key}:{value}
                </li>
              ))}
            </ul>
          );
          return optionsList;
        },
      },
      
    {
      title: "Details",
      dataIndex: "details",
      key: "details",
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
    <div style={{ padding: "20px" }}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "5px",
      }}
    >
      <p style={{ fontSize: "22px" }}>Quiz</p>
      <Breadcrumb style={{ margin: "22px 0" }}>
        <Breadcrumb.Item>Quiz</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/admin/dashboard">
            <HomeOutlined />
          </a>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
    <Card>
      <div style={{ overflowX: "auto" }}>
        <Table dataSource={quiz} columns={columns} loading={loading} />
      </div>
    </Card>
    </div>
  );
};

export default AdminQuiz;
