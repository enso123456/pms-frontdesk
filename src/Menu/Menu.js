import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from "react-router-dom";

const MainMenu = () => (
  <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
    <Menu.Item key="1">
      <Link to="/guests">
        <Icon type="user" />
        <span>Guest</span>
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to="/rooms">
        <Icon type="video-camera" />
        <span>Rooms</span>
      </Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link to="/reservations">
        <Icon type="upload" />
        <span>Reserve</span>
      </Link>
    </Menu.Item>
  </Menu>
);

export default MainMenu;