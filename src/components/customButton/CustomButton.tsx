import React from 'react';
import classNames from 'classnames';
import './CustomButton.css';
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
        classNames('button', {
          ['loadingButton']: isLoading,
          ['buttonDisabled']: disabled,
          ['buttonActive']: !disabled,
          ['primaryButton']: type === 'primary',
          ['dangerButton']: type === 'danger',
          ['successButton']: type === 'success',
          ['warningButton']: type === 'warning',
          ['smallButton smallIconButton']: min,
          ['largeButton largeIconButton']: large,
          ['blockButton']: block,
          ['outlinedButton']: outlined,
          ['primaryOutlined']: outlined && type === 'primary',
          ['successOutlined']: outlined && type === 'success',
          ['warningOutlined']: outlined && type === 'warning',
          ['dangerOutlined']: outlined && type === 'danger',
          ['textButton']: text
        })
      }
      disabled={disabled}
      onClick={onClickHandler}
    >
      {!isLoading && children[0]}
      {!isLoading && <span className='buttonIcon'>{children[1]}</span>}
      {isLoading && (
        <img className='preloader' src={preloader}></img>
      )}
    </button>
  )
}