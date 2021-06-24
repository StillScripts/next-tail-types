import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { InputType, InputVariant } from '../../../types/AtomTypes'
 
type TextFieldProps = {
	className?: string;
	inputAttributes?: InputHTMLAttributes<HTMLInputElement>;
	texareaAttributes?: TextareaHTMLAttributes<HTMLTextAreaElement>;
	label?: string;
	multiline?: boolean;
	type?: InputType;
	variant?: InputVariant;
}
 
const TextField:React.FC<TextFieldProps> = ({ 
	className, inputAttributes, texareaAttributes, label, multiline, type, variant
}) => {

	const classes = 'block ' + `${className? className: ''} ` +
		`${variant==='simple' ?
			'mt-1 rounded-md border-gray-300 shadow-sm focus:border-primary-dark focus:ring focus:ring-indigo-200 focus:ring-opacity-50' :
		variant==='underline' ?
			'mt-0 px-0.5 rounded-t-md rounded-r-md border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-primary-dark' :
		variant==='solid' ?
			'mt-1 block w-full rounded-md bg-gray-200 border-transparent focus:border-primary-dark focus:bg-white focus:ring-0' : ''
		}`

	return (
		<label className='block'>
			{label && <span className='text-gray-700'>{label}</span>}
			{multiline ? 
			<textarea 
				className={classes}
				{...texareaAttributes}
			/> :
			<input
				className={classes}
				type={type}
				{...inputAttributes}
			/>}
		</label>
	)
}
 
export default TextField