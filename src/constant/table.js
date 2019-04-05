export const GUEST_TABLE_HEADER = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (_, data) => (
      `${data.firstName} ${data.lastName}`
    )
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
