import { Language, NotificationsNone, Settings } from '@material-ui/icons';
import React from 'react';
import "./topbar.css"

import profile from "../../images/profile.jpg"
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
      <div className='topbar'>
          <div className='topbarWrapper'>
              <Link to="/" style={{textDecoration: "none"}}>
                <div className="topLeft">
                    <span className="logo">xaxiadmin</span>
                </div>
              </Link>
              <div className="topRigth">
                  <div className="topbarTconContainer">
                      <NotificationsNone/>
                      <span className="topIconBadge">2</span>
                  </div>
                  <div className="topbarTconContainer">
                      <Language/>
                      <span className="topIconBadge">2</span>
                  </div>
                  <div className="topbarTconContainer">
                      <Settings/>
                  </div>
                  <img src={profile} alt="" className="topAvatar" />
              </div>
          </div>
      </div>

  )
}
