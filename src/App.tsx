import React from 'react';
import icon from './assets/icon.png';
import { CustomButton } from './components/customButton/CustomButton';
import { CustomDropdown } from './components/customDropdown/CustomDropdown';
import { UsersList } from './components/usersList/UsersList';
import { dropdownData } from './constants/dropdownData';

export const App = () => {
  return (
    <>
      <CustomButton
        large
        type='primary'
        onClick={() => alert('Кнопка была нажата!')}
      >
        Нажми на меня!
        <img src={icon} />
      </CustomButton>

      <CustomDropdown 
        title={'CustomDropdown'}
        data={dropdownData}
      />

      <UsersList />
    </>
  );
}
