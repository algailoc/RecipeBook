import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from '../../utils/common/localisation';
import {useState} from 'react';

const HomeScreenModels = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const recipeList = useSelector((state) => state.recipesList.recipes);
  const sortDirection = useSelector((state) => state.recipesList.sortDirection);

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);
  const [sortingIsOpen, setSortingIsOpen] = useState(false);

  const [currentId, setCurrentId] = useState();
  const [currentTitle, setCurrentTitle] = useState();

  return {
    sortDirection,
    currentId,
    currentTitle,
    recipeList,
    drawerIsOpen,
    setDrawerIsOpen,
    modalIsOpen,
    deleteModalVisible,
    settingsIsOpen,
    sortingIsOpen,
    setCurrentId,
    setCurrentTitle,
    setModalIsOpen,
    setSettingsIsOpen,
    setDeleteModalVisible,
    setSortingIsOpen,
    navigation,
    t,
    dispatch,
  };
};

export default HomeScreenModels;
