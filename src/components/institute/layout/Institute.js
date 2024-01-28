import React from "react";
import { Layout, Menu, message, theme } from "antd";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/image/yoga.jpg";
import { DashboardOutlined, LogoutOutlined, ProfileOutlined,BarsOutlined } from "@ant-design/icons";
import Profile from "../profile/Profile";
import ChangePassword from "../changePassword/ChangePassword";
import EventManagement from "../event/EventManagement";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const menuSliderItems = [
  {
    key: "1",
    label: "Dashboard",
    icon: <DashboardOutlined />,
    link: "/institute/dashboard",
  },
  {
    key: "2",
    label: "Profile",
    icon: <ProfileOutlined />,
    subMenu: [
      {
        key: "2.1",
        label: "Profile",
        link: "/institute/profile",
        icon: <BarsOutlined />,
      },
      {
        key: "2.2",
        label: "Change Password",
        link: "/institute/change-password",
        icon: <BarsOutlined />,
      },
    ],
  },
  {
    key: "3",
    label: "Event",
    icon: <DashboardOutlined />,
    link: "/institute/event",
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
const Institute = () => {
  const location = useLocation();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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
          <div
          // style={{
          //   padding: 24,
          //   textAlign: "center",
          //   background: colorBgContainer,
          //   borderRadius: borderRadiusLG,
          // }}
          >
                   {location.pathname === "/institute/profile" && <Profile />}
                   {location.pathname === "/institute/change-password" && <ChangePassword />}
                   {location.pathname === "/institute/event" && <EventManagement />}
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
export default Institute;
