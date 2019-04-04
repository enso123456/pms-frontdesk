import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

const ModalBox = ({
  title,
  visible,
  confirmLoading,
  children,
  handleCancel,
  handleOk,
  okText,
}) => {
  return (
    <div>
      <Modal
        title={title}
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText={okText}
      >
        {children}
      </Modal>
    </div>
  );
};

ModalBox.propTypes = {
  title: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  confirmLoading: PropTypes.bool.isRequired,
  children: PropTypes.object,
  handleCancel: PropTypes.func.isRequired,
  handleOk: PropTypes.func.isRequired,
  okText: PropTypes.string
};

ModalBox.defaultProps = {
  children: {},
  title: 'Modal Title',
  okText: 'Ok',
};

export default ModalBox;
