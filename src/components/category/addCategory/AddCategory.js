import React, { useState } from "react";
import { Form, Input, Button, Breadcrumb, Card,message,Row,Col } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { addCategory } from "../../../actions/addCategory/addCategory";
import { useDispatch } from "react-redux";

const AddCategory = () => {
    const dispatch=useDispatch();
  const [image, setImage] = useState(null);
  const [form] = Form.useForm();


  const onFinish = async (values) => {
    try {
      const formData = new FormData();
      formData.append("categoryName", values.categoryName);
      formData.append("categoryImage", image);
      // const formDataObject = formDataToObject(formData);
      // console.log("Form Data:", formDataObject);
      const response = await dispatch(addCategory(formData));

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
          <p style={{ fontSize: "22px" }}>Add Category</p>
          <Breadcrumb style={{ margin: "22px 0" }}>
            <Breadcrumb.Item>Add Category</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="/admin/dashboard">
                <HomeOutlined />
              </a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Card style={{ padding: "24px" }}>
          <Form form={form} onFinish={onFinish} layout="vertical">
          <Row gutter={[16, 16]}>
                <Col lg={12} sm={24} xs={24}>
            <Form.Item
              name="categoryName"
              label="Category Name"
              rules={[
                { required: true, message: "Please enter category name" },
              ]}
            >
              <Input placeholder="Category Name"/>
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
        </Card>
      </div>
    </>
  );
};

export default AddCategory;
