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
		    <h4 className='text-primary-dark mb-4 underline'>Basic Typography</h4>
        <h1 className=''>Heading 1</h1>
        <h2 className=''>Heading 2</h2>
        <h3 className=''>Heading 3</h3>
        <h4 className=''>Heading 4</h4>
        <h5 className=''>Heading 5</h5>
        <h6 className=''>Heading 6</h6>
        <p className='subtitle-1'>Subtitle 1</p>
        <p className='subtitle-2'>Subtitle 2</p>
        <p>Body 1</p>
        <p className='body-2'>Body 2</p>
       	<button>Button</button>
        <p className='caption'>Caption</p>
        <p className='overline'>Overline</p>
      </main>
    </div>
  )
}
