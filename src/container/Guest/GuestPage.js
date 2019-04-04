import React, { Component } from 'react';
import { Row, Col, Table, Button, Icon, Input } from 'antd';

import Modal from '../../component/Modal';

import data from './data.json';

const Search = Input.Search;

class GuestPage extends Component {
  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }



  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
      }, {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      }, {
        title: 'Contact Number',
        dataIndex: 'contactNumber',
        key: 'contactNumber',
      },
    ];


    return (
      <div>
        <Row
          type="flex"
          justify="space-between"
        >
          <Col>
            <Button type="primary" onClick={this.showModal}>
              <Icon type="plus" />
              Add Guests
            </Button>
          </Col>
          <Col>
            <Search
              placeholder="Search Guest Name"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
            />
          </Col>
        </Row >
        <Row gutter={16} style={{ marginTop: '18px' }}>
          <h1>Guest Lists</h1>
          <Table columns={columns} dataSource={data} />
        </Row>

        <Modal
          title={'Guest Form'}
          visible={this.state.visible}
          confirmLoading={this.state.confirmLoading}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
        >
          <h1>Hello Modal</h1>
        </Modal>
      </div>
    );
  }
};

export default GuestPage;
