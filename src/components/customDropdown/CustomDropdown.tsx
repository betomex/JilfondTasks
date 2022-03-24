import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { dropdownData } from '../../constants/dropdownData';
import './customDropdown.css';

export const CustomDropdown = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null);
  const node = useRef(null!);
  
  const onDropdownClick = () => {
    setIsMenuOpened(state => !state);
  }

  const onClickOutside = (e: MouseEvent) => {
    setIsMenuOpened(false);
  };

  useEffect(() => {
    (isMenuOpened)
      ? document.addEventListener("click", onClickOutside)
      : document.removeEventListener("click", onClickOutside)

    return () => {
      document.removeEventListener("click", onClickOutside);
    };
  }, [isMenuOpened]);

  return (
    <div
      className="dropdown"
      ref={node}
    >
      <button
        className='dropdownButton'
        onClick={onDropdownClick}
      >
        CustomDropdown
      </button>
      {
        isMenuOpened && (
          <ul>
            {
              dropdownData.map(option => (
                <li 
                  key={option.id}
                  onClick={() => setSelectedMenuItem(option.name)}
                >
                  <div>{option.id} {option.name}</div>
                </li>
              ))
            }
          </ul>
        )
      }
    </div>
  );
}
