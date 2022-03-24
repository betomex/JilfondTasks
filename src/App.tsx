import React from 'react';
import icon from './assets/icon.png';
import { CustomButton } from './components/customButton/CustomButton';
import { CustomDropdown } from './components/customDropdown/CustomDropdown';
import { UsersList } from './components/usersList/UsersList';

export const App = () => {
  return (
    <>
      <CustomButton
        large
        type='primary'
      >
        Click Me!
        <img src={icon} />
      </CustomButton>
      <CustomDropdown />
      <UsersList />
    </>
  );
}
