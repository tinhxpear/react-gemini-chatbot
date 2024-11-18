import "./sidebar.scss";
import { assets } from "../../assets/assets";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img src={assets.menu_icon} alt="Menu Icon" className="menu" />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="Plus Icon" />
          <p>New Chat</p>
        </div>
        <div className="recent">
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <img src={assets.message_icon} alt="Message Icon" />
            <p>What is React ...</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="Question Icon" />
          <p>Help</p>
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="History Icon" />
          <p>Activity</p>
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="Setting Icon" />
          <p>Setting</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
