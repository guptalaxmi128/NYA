import React, { useState } from "react";
import { Form, Input, Button, Breadcrumb, Card,message } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { updateCategory } from "../../../actions/addCategory/addCategory";
import { useDispatch } from "react-redux";

const EditCategory = (props) => {
    const { id}=props;
    const dispatch=useDispatch();
  const [image, setImage] = useState(null);
  const [form] = Form.useForm();

  console.log(id)

  const onFinish = async (values) => {
    try {
      const formData = new FormData();
      formData.append("categoryName", values.categoryName);
      formData.append("categoryImage", image);
      formData.append("id", id);
      const response = await dispatch(updateCategory(formData));

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
          <p style={{ fontSize: "22px" }}>Edit Category</p>
          <Breadcrumb style={{ margin: "22px 0" }}>
            <Breadcrumb.Item>Edit Category</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="/admin/dashboard">
                <HomeOutlined />
              </a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Card style={{ padding: "24px" }}>
          <Form form={form} onFinish={onFinish} layout="vertical">
            <Form.Item
              name="categoryName"
              label="Category Name"
              rules={[
                { required: true, message: "Please enter category name" },
              ]}
            >
              <Input />
            </Form.Item>
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
            <Form.Item style={{ textAlign: "center" }}>
              {/* <Button type="default" style={{ marginRight: 8 }}>
                Cancel
              </Button> */}
              <Button
                htmlType="button"
                onClick={() => form.resetFields()}
                style={{ marginRight: 8 }}
              >
                Reset
              </Button>
              <Button type="primary" htmlType="submit">
                Update
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default EditCategory;
