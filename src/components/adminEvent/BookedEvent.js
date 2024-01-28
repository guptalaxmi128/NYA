import React, { useState,useEffect } from "react";
import { Layout,  Menu, Button, message,Table,Card,Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";
import logo from "../../assets/image/yoga.jpg";
import {
  BarsOutlined,
  BookOutlined,
  PercentageOutlined,
  DashboardOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { useDispatch } from "react-redux";
import { getEventBookByUser } from "../../actions/adminEvent/adminEvent";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const menuSliderItems = [
  {
    key: "1",
    label: "Dashboard",
    icon: <DashboardOutlined />,
    link: "/admin/dashboard",
  },

  {
    key: "2",
    label: "Aasanas",
    icon: <BookOutlined />,
    subMenu: [
      {
        key: "2.1",
        label: "Category",
        icon: <BarsOutlined />,
        subMenu: [
          {
            key: "2.1.1",
            label: "View Category",
            link: "/admin/category/view",
            icon: <BarsOutlined />,
          },
          {
            key: "2.1.2",
            label: "Add New Category",
            link: "/admin/category/add",
            icon: <BarsOutlined />,
          },
        ],
      },
      {
        key: "2.2",
        label: "Sub Category",
        icon: <BarsOutlined />,
        subMenu: [
          {
            key: "2.2.1",
            label: "View Sub Category",
            link: "/admin/sub-category/view",
            icon: <BarsOutlined />,
          },
          {
            key: "2.2.2",
            label: "Add New Sub Category",
            link: "/admin/sub-category/add",
            icon: <BarsOutlined />,
          },
        ],
      },
      {
        key: "2.3",
        label: "Aasana",
        icon: <BarsOutlined />,
        subMenu: [
          {
            key: "2.3.1",
            label: "View Aasana",
            link: "/admin/aasana/view",
            icon: <BarsOutlined />,
          },
          {
            key: "2.3.2",
            label: "Add New Aasana",
            link: "/admin/aasana/add",
            icon: <BarsOutlined />,
          },
        ],
      },
      {
        key: "2.4",
        label: "Import",
        link: "/admin/import",
        icon: <BarsOutlined />,
      },
    ],
  },
  {
    key: "3",
    label: "Celebrity Testimonial",
    icon: <PercentageOutlined />,
    subMenu: [
      {
        key: "3.1",
        label: "View Celebrity",
        link: "/admin/celebrity/view",
        icon: <BarsOutlined />,
      },
      {
        key: "3.2",
        label: "Add New Celebrity",
        link: "/admin/celebrity/add",
        icon: <BarsOutlined />,
      },
    ],
  },
  {
    key: "4",
    label: "Users",
    icon: <DashboardOutlined />,
    link: "/admin/users",
  },
  {
    key: "5",
    label: "Instructor",
    icon: <DashboardOutlined />,
    link: "/admin/instructor",
  },
  {
    key: "6",
    label: "Institute",
    icon: <DashboardOutlined />,
    link: "/admin/institute",
  },

  {
    key: "7",
    label: "Event",
    icon: <DashboardOutlined />,
    link: "/admin/event",
  },
  {
    key: "8",
    label: "Quiz",
    icon: <DashboardOutlined />,
    link: "/admin/quiz",
  },
  {
    key: "9",
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
const BookedEvent = () => {
  const { id } = useParams();

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

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await dispatch(getEventBookByUser(id));
        setEvent(result.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch,id]);
  console.log(event)
  const columns = [
    {
      title: "SNo",
      dataIndex: "index",
      key: "sno",
      render:(text,record,index)=>index+1
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Mobile Number",
      dataIndex: "mobileNumber",
      key: "mobileNumber",
    },
    
    // {
    //     title: "Event Name",
    //     dataIndex: "event.eventName",
    //     key: "eventName",
    //     render: (text) => {
    //       console.log(text); 
    //       return <span>{text}</span>; 
    //     },
    //   },
      
    // {
    //   title: "Location",
    //   dataIndex: ["event", "location"],
    //   key: "location",
    // },
    // {
    //   title: "Date & Time",
    //   dataIndex: "event.date_time",
    //   key: "date_time",
    //   render: (text) => <span>{moment(text).format("DD-MM-YYYY")}</span>,
    // },
  ];

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
        <div style={{ padding: "20px" }}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "5px",
      }}
    >
      <p style={{ fontSize: "22px" }}>Booked Event</p>
      <Breadcrumb style={{ margin: "22px 0" }}>
        <Breadcrumb.Item>Booked Event</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/admin/event">
            Event
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/admin/dashboard">
            <HomeOutlined />
          </a>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
        <Card>
          <div style={{overflowX:'auto'}}>
          <Table dataSource={event} columns={columns}  />
          </div>
          </Card>
          </div>
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
export default BookedEvent;
