import React, { useState, useEffect } from "react";
import {
  Table,
  Space,
  Breadcrumb,
  Card,
  Popconfirm,
  Button,
  message,
} from "antd";
import { HomeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAasana, getAasana, publishAasana, unPublishAasana } from "../../../actions/addAasana/addAasana";

const ViewAasana = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    {
      title: "SNo",
      dataIndex: "sno",
      key: "sno",
      fixed:'left',
      render: (text, record, index) => index + 1,
    },
    {
        title: "Category Name",
        dataIndex: "category",
        key: "category",
        render: (category) => category.categoryName,
      },
      {
        title: "Sub Category Name",
        dataIndex: "subCategory",
        key: "subCategory",
        render: (subCategory) => subCategory.subCategoryName,
      },
    {
      title: "Aasana Name",
      dataIndex: "aasanaName",
      key: "aasanaName",
    },
    {
      title: "Aasana Description",
      dataIndex: "aasanaDescription",
      key: "aasanaDescription",
    },
    {
      title: "Benefits",
      dataIndex: "benefits",
      key: "benefits",
    },
    {
      title: "Instructions",
      dataIndex: "instructions",
      key: "instructions",
    },
    {
      title: "Video Duration",
      dataIndex: "videoDuration",
      key: "videoDuration",
    },
    {
      title: "Video Path",
      dataIndex: "videoPath",
      key: "videoPath",
      render: (text) => (
        <a href={text} target="_blank" rel="noopener noreferrer">
          Watch Video
        </a>
      ),
    },
    {
        title: "Status",
        dataIndex: "publicStatus",
        key: "publicStatus",
  
        render: (publicStatus, record) => (
          <span>
            {record.publicStatus ? (
              <Button
                style={{ border: "1px solid green", color: "green" }}
                onClick={() => handleUnpublishedClick(record.id)}
              >
                Published
              </Button>
            ) : (
              <Button
                style={{ border: "1px solid red", color: "red" }}
                onClick={() => handlePublishedClick(record.id)}
              >
                Publish Now
              </Button>
            )}
          </span>
        ),
      },
      {
        title: "Actions",
        key: "actions",
        render: (text, record) => (
          <Space size="middle">
             <Link to={`/admin/edit-aasana/${record.id}`}>
            <Button
              type="default"
              icon={<EditOutlined />}
            >
              Edit
            </Button>
            </Link>
            <Popconfirm
              title="Are you sure to delete this aasana?"
              onConfirm={() => handleDelete(record.id)}
              okText="Yes"
              cancelText="No"
            >
              <Button type="danger" icon={<DeleteOutlined />}>
                Delete
              </Button>
            </Popconfirm>
          </Space>
        ),
      },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await dispatch(getAasana());
        setData(result.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(data);

  const handleDelete = async (id) => {
    try {
      console.log(id);
      const res = await dispatch(deleteAasana(id));
      if (res.success) {
        message.success(res.message);
      } else {
        message.error("Failed to delete Aasana.");
      }
    } catch (error) {
      console.error("Error deleting Aasana:", error);
      message.error(error.response.data.message);
    }
  };
  

  const handlePublishedClick = (id) => {
    console.log(`Aasana ${id} is clicked as Published`);
    dispatch(publishAasana(id)).then((res) => {
      if (res.success) {
        message.success(res.message);
      } else {
        message.error(res.message);
      }
    });
  };

  const handleUnpublishedClick = (id) => {
    console.log(`Aasana ${id} is clicked as Unpublished`);
    dispatch(unPublishAasana(id)).then((res) => {
      if (res.success) {
        message.success(res.message);
      } else {
        message.error(res.message);
      }
    });
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
        <p style={{ fontSize: "22px" }}>View Aasana</p>
        <Breadcrumb style={{ margin: "22px 0" }}>
          <Breadcrumb.Item>View Aasana</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/admin/dashboard">
              <HomeOutlined />
            </a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Card >
        <div style={{ overflowX: "auto" }}>
          <Table
            dataSource={data}
            columns={columns}
            loading={loading}
            //   pagination={false}
          />
        </div>
      </Card>
    </div>
  );
};

export default ViewAasana;
