import React, { FormEvent, useState} from 'react'
import { BasicContactField, BasicContactFields } from '../../../types/MoleculeTypes'
import { Button, TextField } from '../../atoms'
 
type ContactFormProps = {
	className?: string;
}
 
const ContactForm:React.FC<ContactFormProps> = ({ className}) => {
	const [formData, setFormData] = useState<BasicContactFields>({
		name: '', email: '', message: ''
	})

	const handleChange = (keyName:BasicContactField, value:string) => {
		setFormData({...formData, [keyName]: value})
	}

	const submitForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		alert(JSON.stringify(formData))
	}


	return (
		<form className={className? className: ''} onSubmit={(e)=>submitForm(e)}>
			<h5 className='h5 mb-8'>Send Us A Message</h5>
			<TextField 
				className='w-full mb-4' label='Name' type='text' variant='simple'   
				inputAttributes={{
					value: formData.name, onChange: (e)=>handleChange('name', e.target.value),
					required: true, placeholder: 'Your name'
				}}
			/>
			<TextField 
				className='w-full mb-4' label='Email' type='email' variant='simple'   
				inputAttributes={{
					value: formData.email, onChange: (e)=>handleChange('email', e.target.value),
					required: true, placeholder: 'Your email'
				}}
			/>
			<TextField 
				className='w-full mb-4' label='Message' multiline type='text' variant='simple'   
				textareaAttributes={{
					value: formData.message, onChange: (e)=>handleChange('message', e.target.value),
					required: true, rows: 2, placeholder: 'Your message'
				}}
			/>
			<Button 
				className='my-2 text-white bg-primary-main hover:bg-primary-dark'
				buttonAttributes={{type: 'submit'}}
			>
				Submit
			</Button>
		</form>
	)
}
 
export default ContactForm