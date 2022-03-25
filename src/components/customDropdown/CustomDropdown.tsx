import React, { useEffect, useRef, useState } from 'react';
import './customDropdown.scss';

type PropsType = {
  title: string
  data: Array<{
    id: number
    name: string
  }>
}

export const CustomDropdown: React.FC<PropsType> = ({title, data}) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null);
  const dropdown = useRef(null);
  
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
      ref={dropdown}
    >
      <button
        className='dropdown__button'
        onClick={onDropdownClick}
      >
        {title}
      </button>
      {
        isMenuOpened && (
          <ul className='dropdown__list'>
            {
              data.map(option => (
                <li 
                  key={option.id}
                  className='dropdown__list__item'
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
