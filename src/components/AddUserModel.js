import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const AddUserModel = ({ showUserModel, handleAddingUser, cancelModel }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleOk = () => {
    // console.log(name, email, role);
    handleAddingUser({ name, email, role });
  };

  return (
    <>
      <Modal
        title='Basic Modal'
        visible={showUserModel}
        onCancel={cancelModel}
        onOk={handleOk}
      >
        <div className='test'>
          <input
            type='text'
            placeholder='name'
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <input
            type='text'
            placeholder='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <input
            type='text'
            placeholder='role'
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
      </Modal>
    </>
  );
};

export default AddUserModel;
