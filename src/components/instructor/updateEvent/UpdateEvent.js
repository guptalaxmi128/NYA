import React, { useState, useEffect } from "react";
import {
  Layout,
  Menu,
  message,
  Form,
  Input,
  DatePicker,
  Row,
  Col,
  Card,
  Button,
  Spin,
} from "antd";
import { useDispatch } from "react-redux";
import TextArea from "antd/es/input/TextArea";
import { Link, useParams } from "react-router-dom";
import logo from "../../../assets/image/yoga.jpg";
import {
  DashboardOutlined,
  LogoutOutlined,
  ProfileOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { getInstructorEventById, updateInstructorEvent } from "../../../actions/instructorEvent/instructorEvent";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const menuSliderItems = [
  {
    key: "1",
    label: "Dashboard",
    icon: <DashboardOutlined />,
    link: "/instructor/dashboard",
  },
  {
    key: "2",
    label: "Profile",
    icon: <ProfileOutlined />,
    subMenu: [
      {
        key: "2.1",
        label: "Profile",
        link: "/instructor/profile",
        icon: <BarsOutlined />,
      },
      {
        key: "2.2",
        label: "Change Password",
        link: "/instructor/change-password",
        icon: <BarsOutlined />,
      },
    ],
  },
  {
    key: "3",
    label: "Event",
    icon: <DashboardOutlined />,
    link: "/instructor/event",
  },
  {
    key: "4",
    label: "Logout",
    icon: <LogoutOutlined />,
    // onClick: handleLogout,
  },
];

const customMenuStyle = {
  height: "100vh",
};

const customMenuItemStyle = {
  marginTop: "10px",
  fontSize: "16px",
};

const UpdateEvent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [eventName, setEventName] = useState("");
  const [location, setLocation] = useState("");
  const [aboutEvent, setAboutEvent] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [form] = Form.useForm();

  console.log(id);

  const handleDateChange = (date, dateString) => {
    setSelectedDate(dateString);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await dispatch(getInstructorEventById(id));
        setEventName(result.data.eventName);
        setLocation(result.data.location);
        setAboutEvent(result.data.aboutEvent);
        setSelectedDate(result.data.date_time);
      } catch (error) {
        console.error("Error fetching event:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch,id]);

  const onFinish = async () => {
    try {
      const formData = new FormData();
      formData.append("date_time", selectedDate);
      formData.append("eventImage", image);
      formData.append("eventName", eventName);
      formData.append("location", location);
      formData.append("aboutEvent", aboutEvent);
      formData.append("id", id);

      const response = await dispatch(updateInstructorEvent(formData));
      if (response.success) {
        message.success(response.message);
        form.resetFields();
        setImage(null);
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

  const renderSubMenu = (subMenuItems) => (
    <SubMenu
      key={subMenuItems.key}
      title={subMenuItems.label}
      icon={subMenuItems.icon}
      style={customMenuItemStyle}
    >
      {subMenuItems.subMenu.map((subItem) =>
        subItem.subMenu ? (
          renderSubMenu(subItem)
        ) : (
          <Menu.Item
            key={subItem.key}
            icon={subItem.icon}
            style={customMenuItemStyle}
          >
            <Link to={subItem.link}>{subItem.label}</Link>
          </Menu.Item>
        )
      )}
    </SubMenu>
  );
  return (
    <Layout hasSider>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        width={260}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "64px",
            background: "#4CBB17",
            justifyContent: "center",
            paddingTop: "10px",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            className="logo-image"
            style={{ height: "60px", borderRadius: "50%" }}
          />
          <h1
            style={{
              color: "#fff",
              marginLeft: "10px",
              fontSize: "18px",
            }}
          >
            Namaste Yoga
          </h1>
        </div>{" "}
        <Menu mode="inline" defaultSelectedKeys={["1"]} style={customMenuStyle}>
          {menuSliderItems.map((item) =>
            item.subMenu ? (
              renderSubMenu(item)
            ) : (
              <Menu.Item
                key={item.key}
                icon={item.icon}
                style={customMenuItemStyle}
              >
                <Link to={item.link} style={{ textDecoration: "none" }}>
                  {item.label}
                </Link>
              </Menu.Item>
            )
          )}

          <div className="demo-logo-vertical" />
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#DFFF00",
          }}
        />
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          {loading ? (
            <Spin tip="Updating..." />
          ) : (
            <div>
              <Card>
                <Form form={form} onFinish={onFinish} layout="vertical">
                  <Row gutter={[16, 16]}>
                    <Col lg={12} sm={24} xs={24}>
                      <Form.Item
                        label="Upload Image"
                        rules={[
                          { required: true, message: "Please select image" },
                        ]}
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
                        label="Date"
                        rules={[
                          { required: true, message: "Please select date" },
                        ]}
                      >
                        <DatePicker
                          style={{ width: "100%" }}
                          value={moment(selectedDate)}
                          onChange={handleDateChange}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col lg={12} sm={24} xs={24}>
                      <Form.Item
                        label="Event Name"
                        rules={[
                          {
                            required: true,
                            message: "Please enter event name",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Event Name"
                          value={eventName}
                          onChange={(e) => setEventName(e.target.value)}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} sm={24} xs={24}>
                      <Form.Item
                        label="Location"
                        rules={[
                          { required: true, message: "Please enter location" },
                        ]}
                      >
                        <Input
                          placeholder="Location"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col lg={12} sm={24} xs={24}>
                      <Form.Item
                        label="About"
                        rules={[
                          {
                            required: true,
                            message: "Please enter in this field ",
                          },
                        ]}
                      >
                        <TextArea
                          rows={4}
                          placeholder="Event Name"
                          value={aboutEvent}
                          onChange={(e) => setAboutEvent(e.target.value)}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item>
                  
                    <Button type="primary" htmlType="submit">
                      Update
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </div>
          )}
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Namaste Yoga
        </Footer>
      </Layout>
    </Layout>
  );
};
export default UpdateEvent;
