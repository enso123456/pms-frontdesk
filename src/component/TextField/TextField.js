import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';

const TextField = ({
  fieldName,
  rules,
  placeholder,
  icon,
  getFieldDecorator,
}) => {
  return (
    <Form.Item>
      {getFieldDecorator(fieldName, { rules: [rules || {}] })(
        <Input prefix={icon} placeholder={placeholder} />
      )}
    </Form.Item>
  );
}

TextField.propTypes = {
  getFieldDecorator: PropTypes.func,
  fieldName: PropTypes.string.isRequired,
  rules: PropTypes.shape({
    required: PropTypes.bool,
    message: PropTypes.string,
  }),
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.object,
};

export default TextField;
