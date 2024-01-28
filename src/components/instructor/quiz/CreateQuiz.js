import React, { useState } from "react";
import { Form, Input, Button, Card, message, Row, Col } from "antd";
import { useDispatch } from "react-redux";
import TextArea from "antd/es/input/TextArea";
import { addInstructorQuiz } from "../../../actions/instructorQuiz/instructorQuiz";

const CreateQuiz = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [options, setOptions] = useState({});
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const formData = new FormData();
      formData.append("quizImage", image);
      formData.append("quizName", values.quizName);
      formData.append("question", values.question);
      formData.append("points", values.points);
      formData.append("details", values.details);
      formData.append("answer", values.answer);
      options.forEach((option, index) => {
        formData.append("option", option);
      });
    //   for (var pair of formData.entries()) {
    //     console.log(pair[0] + ', ' + pair[1]);
    //   }

      const response = await dispatch(addInstructorQuiz(formData));
      if (response.success) {
        message.success(response.message);
        form.resetFields();
        setImage(null);
        setOptions({});
      } else {
        message.error(response.message);
      }
    } catch (error) {
      console.error("Error:", error);
      message.error(error.response.data.message);
    }
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const fileName = event.target.files[0];
      setImage(fileName);
    }
  };

  const addOption = () => {
    const newOptionKey = `option${Object.keys(options).length + 1}`;
    setOptions({ ...options, [newOptionKey]: "" });
  };

  const handleOptionChange = (value, key) => {
    setOptions({ ...options, [key]: value });
  };
//   console.log(options)

  return (
    <>
      <Card>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Row gutter={[16, 16]}>
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
                name="quizImage"
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
                name="quizName"
                label="Quiz Name"
                rules={[{ required: true, message: "Please enter quiz name" }]}
              >
                <Input placeholder="Quiz Name" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
                name="question"
                label="Question"
                rules={[{ required: true, message: "Please enter question" }]}
              >
                <Input placeholder="Question" />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
                name="points"
                label="Points"
                rules={[{ required: true, message: "Please enter points" }]}
              >
                <Input placeholder="Points" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
                name="answer"
                label="Answer"
                rules={[{ required: true, message: "Please enter answer" }]}
              >
                <Input placeholder="Answer" />
              </Form.Item>
            </Col>
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
                name="details"
                label="Details"
                rules={[
                  { required: true, message: "Please enter in this field " },
                ]}
              >
                <TextArea rows={4} placeholder="Enter details" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col lg={12} sm={24} xs={24}>
              <Form.Item
                name="option"
                label="Options"
                // rules={[
                //   {
                //     required: true,
                //     message: "Please enter at least one option",
                //   },
                // ]}
              >
                {Object.entries(options).map(([key, value]) => (
                  <Input
                    key={key}
                    placeholder={`Option ${key.charAt(key.length - 1)}`}
                    value={value}
                    onChange={(e) => handleOptionChange(e.target.value, key)}
                  />
                ))}
                <Button type="dashed" onClick={addOption}>
                  Add Option
                </Button>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
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

export default CreateQuiz;
