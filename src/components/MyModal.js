import React, { useState } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import TaskPropertiesForm from './task/TaskPropertiesForm';

function MyModal({taskData}) {
  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  return (
    <div>
      <button onClick={show}>Edit</button>
      <Rodal visible={visible} onClose={hide}>
        <p>{taskData.task}</p>
        <hr />
        <TaskPropertiesForm />
        <hr />
        <button onClick={hide}>Close Modal</button>
      </Rodal>
    </div>
  );
}

export default MyModal;
