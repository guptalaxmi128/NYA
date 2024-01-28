import React, { useState } from "react";
import { Layout, Row, Col, Space, Menu, Button, message } from "antd";
import { Link, useParams } from "react-router-dom";
import logo from "../../../assets/image/yoga.jpg";
import {
  MenuOutlined,
  BarsOutlined,
  BookOutlined,
  PercentageOutlined,
  DashboardOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import EditCategory from "./EditCategory";


const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;

const EditCategoryLayout = () => {
    const {id}=useParams();
    // console.log(id)


  const carouselStyle = {
    // backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  };

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  // console.log(location.pathname);

  // const handleLogout = () => {
  //   dispatch({ type: LOGOUT_USER });
  //   // console.log("User");
  //   message.success("User logout successfully!");
  //   navigate("/sign_in");
  // };

  // const menuItems = [
  //   {
  //     key: "1",
  //     label: "Dashboard",
  //     icon: <DashboardOutlined />,
  //     link: "/factory",
  //   },
  //   {
  //     key: "2",
  //     label: "Master",
  //     icon: <BookOutlined />,
  //     link: "/factory/master",
  //   },

  //   {
  //     key: "3",
  //     label: "Logout",
  //     icon: <LogoutOutlined />,
  //     // onClick: handleLogout,
  //   },
  // ];

  const menuSliderItems = [
    {
      key: "1",
      label: "Dashboard",
      icon: <DashboardOutlined />,
      link:"/admin/dashboard"
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
        label: "Logout",
        icon: <LogoutOutlined />,
        // onClick: handleLogout,
      },
   
 
  ];

  const renderSubMenu = (subMenuItems) => (
    <SubMenu key={subMenuItems.key} title={subMenuItems.label} icon={subMenuItems.icon}  style={customMenuItemStyle}>
      {subMenuItems.subMenu.map((subItem) => (
        subItem.subMenu ? (
          renderSubMenu(subItem) 
        ) : (
          <Menu.Item key={subItem.key} icon={subItem.icon}  style={customMenuItemStyle}>
            <Link to={subItem.link}>{subItem.label}</Link>
          </Menu.Item>
        )
      ))}
    </SubMenu>
  );


  const customMenuStyle = {
    height: "100vh",
  };

  const customMenuItemStyle = {
    marginTop: "10px",
    fontSize: "16px",
  };

  return (
    <div className="layout-container">
      <Layout style={{ minHeight: "100vh" }}>
        <Header className="header">
          <Row justify="space-between">
            <Col>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "64px",
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
              </div>
            </Col>
            <Col>
              <div className="desktop-menu">
                <Space>
                  <Menu
                    theme="dark"
                    mode="horizontal"
                    // defaultSelectedKeys={["1"]}
                  >
                    {/* {menuItems.map((item) =>
                      item.subMenu ? (
                        <SubMenu
                          key={item.key}
                          icon={item.icon}
                          title={item.label}
                        >
                          {item.subMenu.map((subItem) => (
                            <Menu.Item
                              key={subItem.key}
                              icon={subItem.icon}
                              // style={{ paddingLeft: "30px" }}
                            >
                              <Link to={subItem.link}>{subItem.label}</Link>
                            </Menu.Item>
                          ))}
                        </SubMenu>
                      ) : (
                        <Menu.Item
                          key={item.key}
                          icon={item.icon}
                          onClick={item.key === "3" ? item.onClick : null}
                        >
                          <Link to={item.link}>{item.label}</Link>
                        </Menu.Item>
                      )
                    )} */}
                  </Menu>
                </Space>
              </div>
            </Col>
            <div className="mobile-menu-icon">
              <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={toggleMobileMenu}
                style={{ color: "#fff" }}
              />
            </div>
          </Row>
        </Header>

        <Layout>
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
            style={carouselStyle}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              style={customMenuStyle}
            >
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
          {/* )} */}
          {showMobileMenu && (
            <div className="mobile-menu show">
              <Menu theme="dark" mode="inline" inlineIndent={16}>
                {/* {menuItems.map((item) =>
                  item.subMenu ? (
                    <SubMenu key={item.key} title={item.label} icon={item.icon}>
                      {item.subMenu.map((subItem) => (
                        <Menu.Item key={subItem.key} icon={subItem.icon}>
                          <Link to={subItem.link}>{subItem.label}</Link>
                        </Menu.Item>
                      ))}
                    </SubMenu>
                  ) : (
                    <Menu.Item
                      key={item.key}
                      icon={item.icon}
                      onClick={item.key === "3" ? item.onClick : null}
                    >
                      <Link to={item.link}>{item.label}</Link>
                    </Menu.Item>
                  )
                )} */}
              </Menu>
            </div>
          )}
          <Layout>
            <Content>
          <EditCategory id={id} />
            </Content>
            <Footer style={{ textAlign: "center", fontFamily: "Rajdhani" }}>
             Namaste Yoga
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default EditCategoryLayout;
