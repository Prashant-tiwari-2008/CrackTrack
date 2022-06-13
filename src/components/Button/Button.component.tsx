import React, { useState } from 'react';
import { Loader } from 'rsuite';

interface Props {
  onClick?: (withArgs?: any) => void;
  type?: 'submit' | 'button';
  children: string
  onSubmit?: () => Promise<void>;
  disabled?: boolean
}

const Button: React.FC<Props> = (props: Props) => {
  const [disabled, setDisabled] = useState(props.disabled || false);

  const handleClick = async () => {
    if(props.onSubmit) {
      setDisabled(true)
      await props.onSubmit!()
       setTimeout(async () => {
        setDisabled(false)
       }, 1000)
    }

    if(props.onClick) {
      props.onClick()
    }
  }

  return (
    <button
      onClick={async () => {
        await handleClick()
      }}
      disabled={disabled}
      className="btn btn-primary btn-hover-heading-color w-100"
      type={props.type ? props.type : 'button'}>
      {disabled ? <Loader /> : props.children}
    </button>
  )
}

export default Button;