import React from 'react';
import classNames from 'classnames';
import './CustomButton.scss';
import preloader from '../../assets/preloader.gif';

type PropsType = {
  isLoading?: boolean
  callback?: () => void
  disabled?: boolean
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'default'
  min?: boolean
  large?: boolean
  block?: boolean
  outlined?: boolean
  text?: boolean
  children: [string, React.ReactNode]
}

export const CustomButton: React.FC<PropsType> = ({ 
  isLoading, 
  callback, 
  disabled, 
  type, 
  min, 
  large, 
  block, 
  outlined, 
  text, 
  children 
}) => {
  const onClickHandler = () => {
    callback!();
  }

  return (
    <button
      className={
        classNames('custom-button', {
          ['loadingButton']: isLoading,
          ['custom-button_disabled']: disabled,
          ['custom-button_active']: !disabled,
          ['custom-button_primary']: type === 'primary',
          ['custom-button_danger']: type === 'danger',
          ['custom-button_success']: type === 'success',
          ['custom-button_warning']: type === 'warning',
          ['custom-button_small custom-button__icon_small']: min,
          ['custom-button_large custom-button__icon_large']: large,
          ['custom-button_block']: block,
          ['custom-button_outlined']: outlined,
          ['custom-button_primary_outlined']: outlined && type === 'primary',
          ['custom-button_success_outlined']: outlined && type === 'success',
          ['custom-button_warning_outlined']: outlined && type === 'warning',
          ['custom-button_danger_outlined']: outlined && type === 'danger',
          ['custom-button_text']: text
        })
      }
      disabled={disabled}
      onClick={onClickHandler}
    >
      {!isLoading && children[0]}
      {!isLoading && <span className='custom-button__icon'>{children[1]}</span>}
      {isLoading && (
        <img className='custom-button__preloader' src={preloader}></img>
      )}
    </button>
  )
}