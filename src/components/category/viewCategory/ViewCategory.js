import React, { useEffect, useState } from "react";
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
import {
  getCategory,
  publishCategory,
  unPublishCategory,
} from "../../../actions/addCategory/addCategory";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const ViewCategory = () => {
  const dispatch = useDispatch();
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await dispatch(getCategory());
        setCategoryData(result.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // console.log(categoryData);

  const columns = [
    {
      title: "SNo",
      dataIndex: "sno",
      key: "sno",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Category Image",
      dataIndex: "categoryImage_Originalname",
      key: "categoryImage_Originalname",
      render: (text, record) => <Space size="middle">{text}</Space>,
    },
    {
      title: "Category Name",
      dataIndex: "categoryName",
      key: "categoryName",
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
           <Link to={`/admin/edit-category/${record.id}`}>
          <Button
            type="default"
            icon={<EditOutlined />}
          >
            Edit
          </Button>
          </Link>
          <Popconfirm
            title="Are you sure to delete this category?"
            onConfirm={() => handleDelete(record)}
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

  const handleDelete = (record) => {
    // Implement the delete logic here
    message.success(`Deleting category ${record.category.categoryName}`);
  };

  const handlePublishedClick = (id) => {
    console.log(`Category ${id} is clicked as Published`);
    dispatch(publishCategory(id)).then((res) => {
      if (res.success) {
        message.success(res.message);
      } else {
        message.error(res.message);
      }
    });
  };

  const handleUnpublishedClick = (id) => {
    console.log(`Category ${id} is clicked as Unpublished`);
    dispatch(unPublishCategory(id)).then((res) => {
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
        <p style={{ fontSize: "22px" }}>View Category</p>
        <Breadcrumb style={{ margin: "22px 0" }}>
          <Breadcrumb.Item>View Category</Breadcrumb.Item>
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
          dataSource={categoryData}
          columns={columns}
          loading={loading}
          //   pagination={false}
        />
        </div>
      </Card>
    </div>
  );
};

export default ViewCategory;
