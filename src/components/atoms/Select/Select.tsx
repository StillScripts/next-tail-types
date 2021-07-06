import React, { SelectHTMLAttributes } from 'react'
 
type SelectProps = {
	className?: string;
	selectAttributes?: SelectHTMLAttributes<HTMLSelectElement>
	helpText?: string;
	label?: string;
	multiple?: boolean;
	options: string[];
	variant?: 'simple'|'solid'|'underline';
}
 
const Select:React.FC<SelectProps> = ({ 
	className, selectAttributes, helpText, label, multiple, options, variant 
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
		<label className="block">
			{label && <span className="text-gray-700">{label}</span>}
			<select 
				className={classes}
				multiple={multiple? true: false}
				{...selectAttributes}
			>
				{helpText && <option value='' disabled>
					{helpText}
				</option>}
				{options.map((option, id)=>(
					<option value={option} key={`${option} ${id}`}>
						{option}
					</option>
				))}
			</select>
		</label>
	)
}
 
export default Select