import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Breadcrumb,
  Card,
  Select,
  Row,
  Col,
  Spin,
  message,
} from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { getCategory } from "../../../actions/addCategory/addCategory";
import { useDispatch } from "react-redux";
import { addSubCategory } from "../../../actions/addSubCategory/addSubCategory";

const { Option } = Select;
const { TextArea } = Input;

const AddSubCategory = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const formData = new FormData();
      formData.append("subCategoryName", values.subCategoryName);
      formData.append("subCategoryDescription", values.subCategoryDescription);
      formData.append("categoryId", values.categoryId);
      formData.append("subCategoryImage", image);
      const response = await dispatch(addSubCategory(formData));

      if (response.success) {
        message.success(response.message);
        form.resetFields();

        setImage(null);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      console.error(" My oder Error:", error);
      message.error(error.response.data.message);
    }
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const fileName = event.target.files[0];
      setImage(fileName);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await dispatch(getCategory());
        setData(result.data);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <div style={{ padding: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "5px",
          }}
        >
          <p style={{ fontSize: "22px" }}>Add Sub Category</p>
          <Breadcrumb style={{ margin: "22px 0" }}>
            <Breadcrumb.Item>Add Sub Category</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="/admin/dashboard">
                <HomeOutlined />
              </a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <Card style={{ padding: "24px" }}>
          <Spin spinning={loading} tip="Loading...">
            <Form form={form} onFinish={onFinish} layout="vertical">
              <Row gutter={[16, 16]}>
                <Col lg={12} sm={24} xs={24}>
                  <Form.Item
                    label="Category Name"
                    name="categoryId"
                    rules={[
                      {
                        required: true,
                        message: "Please select category name!",
                      },
                    ]}
                  >
                    <Select placeholder="Select Category">
                      {data?.map((category) => (
                        <Option key={category.id} value={category.id}>
                          {category.categoryName}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col lg={12} sm={24} xs={24}>
                  <Form.Item
                    name="subCategoryName"
                    label="Sub Category Name"
                    rules={[
                      {
                        required: true,
                        message: "Please enter sub category name",
                      },
                    ]}
                  >
                    <Input placeholder="Sub Category Name" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col lg={12} sm={24} xs={24}>
                  <Form.Item
                    name="subCategoryDescription"
                    label="Sub-Category Description"
                    rules={[
                      {
                        required: true,
                        message: "Please enter sub-category description!",
                      },
                    ]}
                  >
                    <TextArea
                      rows={4}
                      placeholder="Enter sub-category description"
                    />
                  </Form.Item>
                </Col>
                <Col lg={12} sm={24} xs={24}>
                  <Form.Item
                    name="categoryImage"
                    label="Upload Image"
                    rules={[{ required: true, message: "Please select image" }]}
                  >
                    <Input
                      type="file"
                      onChange={onImageChange}
                      className="filetype"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item style={{ textAlign: "center" }}>
                <Button
                  htmlType="button"
                  onClick={() => form.resetFields()}
                  style={{ marginRight: 8 }}
                >
                  Reset
                </Button>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Spin>
        </Card>
      </div>
    </>
  );
};

export default AddSubCategory;
