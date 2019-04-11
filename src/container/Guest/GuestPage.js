import React, { Component } from 'react';
import { Row, Col, Table, Button, Icon, Input, Form, Radio } from 'antd';

import Modal from '../../component/Modal';
import TextField from '../../component/TextField';
import { GUEST_TABLE_HEADER } from '../../constant/table';
import {
  getGuestLists,
  addGuest
} from '../../services/guest';

const Search = Input.Search;
const RadioGroup = Radio.Group;

class GuestPage extends Component {
  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
    guests: [],
    form: {
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: '',
      gender: 'male'
    },
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
    this.onSubmitGuest();
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
    this.setState({
      visible: false,
    });
  }

  onChangeValue = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }

  onSubmitGuest = async () => {
    console.log(this.state.form);
    // try {
    //   const response = await addGuest(this.state.form);
    //   console.log(response);
    // } catch (e) {
    //   console.log(e)
    // }
  }

  onSelectGender = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      form: {
        ...this.state.form,
        gender: e.target.value
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <Row type="flex" justify="space-between">
          <Col>
            <Button type="primary" onClick={this.showModal}>
              <Icon type="plus" /> Add Guests
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
              onChange={this.onChangeValue}
            />
            <TextField
              getFieldDecorator={getFieldDecorator}
              fieldName={'lastName'}
              rules={{ required: true, message: 'Please provide last name' }}
              placeholder={'Last Name'}
              onChange={this.onChangeValue}
            />

            <Form.Item className="collection-create-form_last-form-item">
              {getFieldDecorator('modifier', {
                initialValue: 'public',
              })(
                <RadioGroup onChange={this.onSelectGender} value={this.state.form.gender}>
                  <Radio value={'male'}>Male</Radio>
                  <Radio value={'female'}>Female</Radio>
                </RadioGroup>
              )}
            </Form.Item>

            <TextField
              getFieldDecorator={getFieldDecorator}
              fieldName={'email'}
              rules={{ required: true, message: 'Please provide email' }}
              placeholder={'Email'}
              onChange={this.onChangeValue}
            />
            <TextField
              getFieldDecorator={getFieldDecorator}
              fieldName={'contactNumber'}
              placeholder={'Contact Number'}
              onChange={this.onChangeValue}
            />
          </Form>
        </Modal>
      </div>
    );
  }
};

const WrappedGuestForm = Form.create({ name: 'register-guest' })(GuestPage);

export default WrappedGuestForm;
