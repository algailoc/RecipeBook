import React from 'react';
import {CreateScreenView} from './createScreenView';
import {CreateScreenStyles} from './createScreenStyles';
import CreateScreenModel from './createScreenModel';
import CreateScreenController from './createScreenController';

const CreateScreen = () => {
  const styles = CreateScreenStyles;
  const model = CreateScreenModel();
  const controller = CreateScreenController(model);

  return (
    <CreateScreenView styles={styles} model={model} controller={controller} />
  );
};

export default CreateScreen;
