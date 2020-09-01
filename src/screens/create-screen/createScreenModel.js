import {useState} from 'react';

const CreateScreenModel = () => {
  const [numberOfInputs, setNumberOfInputs] = useState(['input-0', 'input-1']);

  return {numberOfInputs, setNumberOfInputs};
};

export default CreateScreenModel;
