import React, { useState } from "react";
import { Form, Input, Button, Card, message, Row, Col, DatePicker } from "antd";
import { useDispatch } from "react-redux";
import TextArea from "antd/es/input/TextArea";
import { addInstructorEvent } from "../../../actions/instructorEvent/instructorEvent";

const CreateEvent = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [selectedDate,setSelectedDate]=useState(null);
  const [form] = Form.useForm();

  const handleDateChange = (date, dateString) => {
    setSelectedDate(dateString)
  };
 
 
  

  const onFinish = async (values) => {
    try {
        const formData = new FormData();
        formData.append("date_time", selectedDate);
        formData.append("eventImage", image);
        formData.append("eventName", values.eventName);
        formData.append("location", values.location);
        formData.append("aboutEvent", values.aboutEvent);
     
        const response = await dispatch(addInstructorEvent(formData));
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
      <Card>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Row gutter={[16, 16]}>
          <Col lg={12} sm={24} xs={24}>
              <Form.Item
                name="eventImage"
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
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
                name="date"
                label="Date"
                rules={[
                  { required: true, message: "Please select date" },
                ]}
              >
                <DatePicker style={{width:'100%'}} onChange={handleDateChange} />
              </Form.Item>
            </Col>
          
          </Row>
          <Row gutter={[16, 16]}>
          <Col lg={12} sm={24} xs={24}>
              <Form.Item
                name="eventName"
                label="Event Name"
                rules={[{ required: true, message: "Please enter event name" }]}
              >
                <Input
                 placeholder="Event Name"
                />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
                name="location"
                label="Location"
                rules={[
                  { required: true, message: "Please enter location" },
                ]}
              >
                <Input placeholder="Location" />
              </Form.Item>
            </Col>
          
          </Row>
          <Row gutter={[16, 16]}>
          <Col lg={12} sm={24} xs={24}>
              <Form.Item
                name="aboutEvent"
                label="About"
                rules={[{ required: true, message: "Please enter in this field " }]}
              >
                <TextArea
                rows={4}
                 placeholder="About"
                />
              </Form.Item>
            </Col>
         
          
          </Row>
          <Form.Item >
           
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
    </>
  );
};

export default CreateEvent;
