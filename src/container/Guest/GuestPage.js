import React, { Component } from 'react';
import { Row, Col, Table, Button, Icon, Input, Form } from 'antd';

import Modal from '../../component/Modal';
import TextField from '../../component/TextField';
import { GUEST_TABLE_HEADER } from '../../constant/table';
import { getGuestLists } from '../../services/guest';

const Search = Input.Search;

class GuestPage extends Component {
  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
    guests: []
  }

  async componentDidMount() {
    try {
      const response = await getGuestLists();
      this.setState({ guests: response.data.data })
    } catch (e) {
      console.log(e)
    };
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
    const { getFieldDecorator } = this.props.form;

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
          <Table
            columns={GUEST_TABLE_HEADER}
            rowKey={(row) => row.id}
            dataSource={this.state.guests}
          />
        </Row>

        <Modal
          title={'Guest Details'}
          visible={this.state.visible}
          confirmLoading={this.state.confirmLoading}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
          okText={'Add Guest'}
        >
          <Form layout={"vertical"}>
            <TextField
              getFieldDecorator={getFieldDecorator}
              fieldName={'firstName'}
              rules={{ required: true, message: 'Please provide first name' }}
              placeholder={'First Name'}
            />
            <TextField
              getFieldDecorator={getFieldDecorator}
              fieldName={'lastName'}
              rules={{ required: true, message: 'Please provide last name' }}
              placeholder={'Last Name'}
            />
            <TextField
              getFieldDecorator={getFieldDecorator}
              fieldName={'email'}
              rules={{ required: true, message: 'Please provide email' }}
              placeholder={'Email'}
            />
            <TextField
              getFieldDecorator={getFieldDecorator}
              fieldName={'contactNumber'}
              placeholder={'Contact Number'}
            />
          </Form>
        </Modal>
      </div>
    );
  }
};

const WrappedGuestForm = Form.create({ name: 'register-guest' })(GuestPage);

export default WrappedGuestForm;
