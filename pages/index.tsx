import Head from 'next/head'

export default function Home() {
  return (
    <div className='min-h-screen w-full bg-gray-200 flex justify-center items-center'>
      <Head>
        <title>NextJS with TailwindCSS and TypeScript</title>
        <meta name="description" content="A useful starter template for building powerful NextJS websites." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='px-8 md:px-16 lg:px-24'>
        <h1 className='text-3xl md:text-5xl mb-4 font-semibold text-indigo-600 text-center'>
          Welcome to the NextJS Starter with TailwindCSS and TypeScript!
        </h1>
        <p className='text-lg md:text-xl mb-4 text-center'>
          View the GitHub repository{' '}
          <a 
            className='underline text-blue-500 hover:text-blue-700' 
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
