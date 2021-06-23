import React, { useState } from 'react';
import { Modal } from 'antd';

function ProjectModal() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <Modal visible={modalVisible} onCancel={handleCloseModal}>
      <p>test</p>
    </Modal>
  );
}

export default ProjectModal;
