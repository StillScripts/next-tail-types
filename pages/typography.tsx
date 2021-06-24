import Head from 'next/head'

export default function Typography() {
  return (
    <div className='min-h-screen w-full bg-indigo-100 flex justify-center items-center py-16'>
      <Head>
        <title>Typography | NextJS with TailwindCSS and TypeScript</title>
        <meta name="description" content="A useful starter template for building powerful NextJS websites." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='px-8 md:px-16 lg:px-24'>
		<h1 className='h4 text-primary-dark mb-4 underline'>Basic Typography</h1>
        <h1 className='h1'>Heading 1</h1>
        <h2 className='h2'>Heading 2</h2>
        <h3 className='h3'>Heading 3</h3>
        <h4 className='h4'>Heading 4</h4>
        <h5 className='h5'>Heading 5</h5>
        <h6 className='h6'>Heading 6</h6>
        <p className='subtitle-1'>Subtitle 1</p>
        <p className='subtitle-2'>Subtitle 2</p>
        <p className='body-1'>Body 1</p>
        <p className='body-2'>Body 2</p>
       	<button className='button'>Button</button>
        <p className='caption'>Caption</p>
        <p className='overline'>Overline</p>
      </main>
    </div>
  )
}
