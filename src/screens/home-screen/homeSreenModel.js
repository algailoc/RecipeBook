import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from '../../utils/common/localisation';
import {useState} from 'react';

const HomeScreenModels = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const recipeList = useSelector((state) => state.recipesList.recipes);

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);
  const [currentId, setCurrentId] = useState();
  const [currentTitle, setCurrentTitle] = useState();

  return {
    currentId,
    currentTitle,
    recipeList,
    drawerIsOpen,
    setDrawerIsOpen,
    modalIsOpen,
    deleteModalVisible,
    settingsIsOpen,
    setCurrentId,
    setCurrentTitle,
    setModalIsOpen,
    setSettingsIsOpen,
    setDeleteModalVisible,
    navigation,
    t,
    dispatch,
  };
};

export default HomeScreenModels;
