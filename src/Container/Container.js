import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon } from 'antd';

import MainMenu from '../Menu';

const { Header, Sider, Content } = Layout;

class Container extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const { children } = this.props;
    return (
      <Layout style={{ height: '100vh' }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <MainMenu />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}

Container.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Container;