import Head from 'next/head'

export default function Home() {
  return (
    <div className='min-h-screen w-full bg-indigo-100 flex justify-center items-center py-16'>
      <Head>
        <title>NextJS with TailwindCSS and TypeScript</title>
        <meta name="description" content="A useful starter template for building powerful NextJS websites." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='px-8 md:px-16 lg:px-24'>
        <h1 className='h1 text-center mb-8 text-primary-dark'>
          Next-Tail-Types
        </h1>
        <p className='subtitle-1 text-center md:px-12 mb-4 text-primary-main'>
          A NextJS Starter enabling TailwindCSS for design and TypeScript for coding.
        </p>
        <p className='body-1 text-center text-gray-900'>
          View the GitHub repository{' '}
          <a 
            className='underline text-primary-main hover:text-primary-dark' 
            href="https://github.com/StillScripts/next-tail-types" 
            target='_blank'
          >
            here
          </a>.
          Feel free to use it as a starter for your sites and give it a star.
        </p>
      </main>
    </div>
  )
}
