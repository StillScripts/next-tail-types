import React, { ButtonHTMLAttributes } from 'react'
 
type ButtonProps = {
	className?: string;
	buttonAttributes?: ButtonHTMLAttributes<HTMLButtonElement>;
}
 
const Button:React.FC<ButtonProps> = ({ className, buttonAttributes, children }) => {
	return (
		<button 
			className={'button px-4 py-2 rounded-lg ' + `${className? className: ''}`}
			{...buttonAttributes}
		>
			{children}
		</button>
	)
}
 
export default Button