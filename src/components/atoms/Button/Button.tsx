import React from 'react'
 
type ButtonProps = {
	className?: string;
	handleClick?: () => void;
}
 
const Button:React.FC<ButtonProps> = ({ className, handleClick, children }) => {
	return (
		<button 
			className={'button px-4 py-2 rounded-lg ' + `${className? className: ''}`}
			onClick={handleClick? handleClick: ()=>console.log('No callback')}
		>
			{children}
		</button>
	)
}
 
export default Button