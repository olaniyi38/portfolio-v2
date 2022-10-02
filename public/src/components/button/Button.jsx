

export const BUTTON_TYPES =  {
    default:'text-white bg-black',
    inverted: 'text-black border border-black',
}

export const Button = ({children, buttonType='', ...otherProps }) => {
  return (
    <>
       <button {...otherProps} className={ buttonType }>
        {children}
       </button>
    </>
  )
}

