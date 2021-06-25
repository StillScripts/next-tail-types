import Head from 'next/head'

import { ContactForm } from '../src/components/molecules'
export default function Form() {
  return (
    <div className='min-h-screen w-full bg-indigo-100 flex justify-center items-center py-16'>
      <Head>
        <title>Contact Form | NextJS with TailwindCSS and TypeScript</title>
        <meta name="description" content="A useful starter template for building powerful NextJS websites." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='px-8 md:px-16 lg:px-24'>
		<div className='bg-white py-4 px-6 rounded-lg shadow-lg' >
			<ContactForm />
		</div>
      </main>
    </div>
  )
}
