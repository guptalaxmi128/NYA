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
import { getSubCategory } from "../../../actions/addSubCategory/addSubCategory";
import { getCategory } from "../../../actions/addCategory/addCategory";
import { useDispatch } from "react-redux";
import { addAasana } from "../../../actions/addAasana/addAasana";

const { Option } = Select;
const { TextArea } = Input;

const AddAasana = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const [data, setData] = useState([]);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log(values);
    try {
      const response = await dispatch(addAasana(values));

      if (response.success) {
        message.success(response.message);
        form.resetFields();
      } else {
        message.error(response.message);
      }
    } catch (error) {
      console.error("Error:", error);
      message.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await dispatch(getCategory());
        setCategory(result.data);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await dispatch(getSubCategory());
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
          <p style={{ fontSize: "22px" }}>Add Aasanas</p>
          <Breadcrumb style={{ margin: "22px 0" }}>
            <Breadcrumb.Item>Add Aasanas</Breadcrumb.Item>
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
                      {category?.map((category) => (
                        <Option key={category.id} value={category.id}>
                          {category.categoryName}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col lg={12} sm={24} xs={24}>
                  <Form.Item
                    name="subCategoryId"
                    label="Sub Category Name"
                    rules={[
                      {
                        required: true,
                        message: "Please enter sub category name",
                      },
                    ]}
                  >
                    <Select placeholder="Select Sub-category">
                      {data?.map((category) => (
                        <Option key={category.id} value={category.id}>
                          {category.subCategoryName}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[16.16]}>
                <Col lg={12} sm={24} xs={24}>
                  <Form.Item
                    name="aasanaName"
                    label="Aasana Name"
                    rules={[
                      {
                        required: true,
                        message: "Please enter aasana name!",
                      },
                    ]}
                  >
                    <Input placeholder="Aasana Name" />
                  </Form.Item>
                </Col>
                <Col lg={12} sm={24} xs={24}>
                  <Form.Item
                    name="videoDuration"
                    label="Video Duration"
                    rules={[
                      {
                        required: true,
                        message: "Please enter video duration",
                      },
                    ]}
                  >
                    <Input placeholder="Video Duration" />
                  </Form.Item>
                </Col>
               
              </Row>
              <Row gutter={[16, 16]}>
                <Col lg={12} sm={24} xs={24}>
                  <Form.Item
                    name="aasanaTag"
                    label="Tag"
                    rules={[{ required: true, message: "Please enter tag" }]}
                  >
                    <Input placeholder="Tag" />
                  </Form.Item>
                </Col>
                <Col lg={12} sm={24} xs={24}>
                  <Form.Item
                    name="videoPath"
                    label="Video Path"
                    rules={[
                      { required: true, message: "Please enter video path" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
              
                <Col lg={12} sm={24} xs={24}>
                  <Form.Item
                    name="aasanaDescription"
                    label="Aasana Description"
                    rules={[
                      {
                        required: true,
                        message: "Please enter aasana description!",
                      },
                    ]}
                  >
                    <TextArea rows={4} placeholder="Enter aasana description" />
                  </Form.Item>
                </Col>
                <Col lg={12} sm={24} xs={24}>
                  <Form.Item
                    name="benefits"
                    label="Benefits"
                    rules={[
                      {
                        required: true,
                        message: "Please enter aasana benefits!",
                      },
                    ]}
                  >
                    <TextArea rows={3} placeholder="Enter Benefits" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col lg={12} sm={24} xs={24}>
                  <Form.Item
                    name="instructions"
                    label="Instructions"
                    rules={[
                      {
                        required: true,
                        message: "Please enter aasana instructions!",
                      },
                    ]}
                  >
                    <TextArea rows={3} placeholder="Enter Intructions" />
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

export default AddAasana;
