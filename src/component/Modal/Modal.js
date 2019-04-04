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
}) => {
  return (
    <div>
      <Modal
        title={title}
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </div>
  );
};

ModalBox.propTypes = {
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  confirmLoading: PropTypes.bool.isRequired,
  children: PropTypes.object,
  handleCancel: PropTypes.func.isRequired,
  handleOk: PropTypes.func.isRequired,
};

ModalBox.defaultProps = {
  children: {},
  title: 'Modal Title',
};

export default ModalBox;
