import React, { InputHTMLAttributes } from 'react'
 
type CheckBoxProps = {
	className?: string;
	inputAttributes?: InputHTMLAttributes<HTMLInputElement>;
	label: string;
	required?: boolean;
	variant?: 'simple'|'solid'|'underline';
}
 
const CheckBox:React.FC<CheckBoxProps> = ({ className, inputAttributes, label, variant }) => {

	const classes =  'block w-8 h-8 ' + `${className? className: ''} ` + 
		`${variant==='simple' ?
			'rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50' :
		variant==='underline' ?
			'mt-0 px-0.5 rounded-t-md rounded-r-md border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-primary-dark' :
		variant==='solid' ?
			'border-gray-300 border-2 text-black focus:border-gray-300 focus:ring-black' : ''
		}`

	return (
		<div className='block'>
			<label className='flex items-center w-full'>
				<input
					className={classes}
					type='checkbox'
					{...inputAttributes}
				/>
				<div className='ml-2'>{label}</div>
			</label>
		</div>
	)
}
 
export default CheckBox