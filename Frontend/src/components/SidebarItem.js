import React from 'react';
import { useNavigate } from "react-router-dom";



const SidebarItem = ({icon, title, messageCount, to}) => {
      const navigate = useNavigate();

  const handleLink = (event) => {
    event.preventDefault(); 
    navigate(to);
  };

    return (
        <a href="#" onClick={handleLink}>
            <span className="material-icons-sharp">
                {icon}
            </span>
            <h3>{title}</h3>
            {messageCount && <span className="message-count">{messageCount}</span>}
        </a>
    );
};

export default SidebarItem;
