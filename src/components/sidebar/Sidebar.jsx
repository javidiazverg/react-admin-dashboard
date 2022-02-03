import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from "@material-ui/icons";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {

  return (
      <div className="sidebar">
          <div className="sidebarWrapper">
              <div className="sidebarMenu">
                  <h3 className="sidebarTitle">Dashboard</h3>
                  <ul className="sidebarList">
                    <NavLink className="sidebarListItem"
                        to="/"
                        style={({ isActive }) =>
                        isActive
                            ? {
                                color: 'black',
                                background: 'rgb(228, 228, 255)',
                                textDecoration: "none",
                            }
                            : { color: 'black', background: 'none', textDecoration: "none", }
                        }
                    >
                    <LineStyle className="sidebarIcon"/>
                     Home
                    </NavLink>
                      <li className="sidebarListItem">
                          <Timeline className="sidebarIcon"/>
                          Analytics
                      </li>
                      <li className="sidebarListItem">
                          <TrendingUp className="sidebarIcon"/>
                          Sales
                      </li>
                  </ul>
              </div>
              <div className="sidebarMenu">
                  <h3 className="sidebarTitle">Quick Menu</h3>
                  <ul className="sidebarList">
                      <NavLink className="sidebarListItem"
                        to="users"
                        style={({ isActive }) =>
                        isActive
                            ? {
                                color: 'black',
                                background: 'rgb(228, 228, 255)',
                                textDecoration: "none",
                            }
                            : { color: 'black', background: 'none', textDecoration: "none", }
                        }
                        >
                        <PermIdentity className="sidebarIcon"/>
                        Users
                      </NavLink>
                      <NavLink className="sidebarListItem"
                        to="products"
                        style={({ isActive }) =>
                        isActive
                            ? {
                                color: 'black',
                                background: 'rgb(228, 228, 255)',
                                textDecoration: "none",
                            }
                            : { color: 'black', background: 'none', textDecoration: "none", }
                        }
                        >
                        <Storefront className="sidebarIcon"/>
                        Products
                      </NavLink>
                      <li className="sidebarListItem">
                          <AttachMoney className="sidebarIcon"/>
                          Transactions
                      </li>
                      <li className="sidebarListItem">
                          <BarChart className="sidebarIcon"/>
                          Reports
                      </li>
                  </ul>
              </div>
              <div className="sidebarMenu">
                  <h3 className="sidebarTitle">Notifications</h3>
                  <ul className="sidebarList">
                      <li className="sidebarListItem">
                          <MailOutline className="sidebarIcon"/>
                          Mail
                      </li>
                      <li className="sidebarListItem">
                          <DynamicFeed className="sidebarIcon"/>
                          Feedback
                      </li>
                      <li className="sidebarListItem">
                          <ChatBubbleOutline className="sidebarIcon"/>
                          Messages
                      </li>
                  </ul>
              </div>
              <div className="sidebarMenu">
                  <h3 className="sidebarTitle">Staff</h3>
                  <ul className="sidebarList">
                      <li className="sidebarListItem">
                          <WorkOutline className="sidebarIcon"/>
                          Manage
                      </li>
                      <li className="sidebarListItem">
                          <Timeline className="sidebarIcon"/>
                          Analytics
                      </li>
                      <li className="sidebarListItem">
                          <Report className="sidebarIcon"/>
                          Reports
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  )
}
