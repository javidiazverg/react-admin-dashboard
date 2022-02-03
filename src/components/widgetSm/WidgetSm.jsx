import { Visibility } from "@material-ui/icons"
import "./widgetsm.css"

import bkwoman from "../../images/bkwoman.jpg"

export default function WidgetSm() {
  return (
      <div className="widgetSm">
          <span className="widgetSmTitle">New Join Members</span>
          <ul className="widgetSmList">
              <li className="widgetSmListItem">
                  <img src={bkwoman} alt="" className="widgetSmImg"/>
                  <div className="widgetSmUser">
                      <div className="widgetSmUsername">Anna Keller</div>
                      <div className="widgetSmUserTitle">Software Engineer</div>
                  </div>
                  <button className="widgetSmButton">
                      <Visibility className="widgetSmIcon"/>
                      Display
                  </button>
              </li>
              <li className="widgetSmListItem">
                  <img src={bkwoman} alt="" className="widgetSmImg"/>
                  <div className="widgetSmUser">
                      <div className="widgetSmUsername">Anna Keller</div>
                      <div className="widgetSmUserTitle">Software Engineer</div>
                  </div>
                  <button className="widgetSmButton">
                      <Visibility className="widgetSmIcon"/>
                      Display
                  </button>
              </li>
              <li className="widgetSmListItem">
                  <img src={bkwoman} alt="" className="widgetSmImg"/>
                  <div className="widgetSmUser">
                      <div className="widgetSmUsername">Anna Keller</div>
                      <div className="widgetSmUserTitle">Software Engineer</div>
                  </div>
                  <button className="widgetSmButton">
                      <Visibility className="widgetSmIcon"/>
                      Display
                  </button>
              </li>
              <li className="widgetSmListItem">
                  <img src={bkwoman} alt="" className="widgetSmImg"/>
                  <div className="widgetSmUser">
                      <div className="widgetSmUsername">Anna Keller</div>
                      <div className="widgetSmUserTitle">Software Engineer</div>
                  </div>
                  <button className="widgetSmButton">
                      <Visibility className="widgetSmIcon"/>
                      Display
                  </button>
              </li>
              <li className="widgetSmListItem">
                  <img src={bkwoman} alt="" className="widgetSmImg"/>
                  <div className="widgetSmUser">
                      <div className="widgetSmUsername">Anna Keller</div>
                      <div className="widgetSmUserTitle">Software Engineer</div>
                  </div>
                  <button className="widgetSmButton">
                      <Visibility className="widgetSmIcon"/>
                      Display
                  </button>
              </li>
          </ul>
      </div>
  )
}