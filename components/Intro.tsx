import { Londrina_Solid } from '@next/font/google'
import Link from 'next/link'

const londrina = Londrina_Solid({ weight: '400', subsets: ['latin'] })

export default function Intro() {
  return (
    <div className='flex flex-col items-center justify-center mt-16'>
      <h1 className={`lg:text-6xl text-4xl ${londrina.className}`}>Jom Dollesin</h1>
      <p className='text-xs'>codewithjom@gmail.com</p>
      <p className='mt-5 max-w-sm lg:max-w-3xl text-sm text-center font-bold'>
        I'm a student at the{' '}
        <Link href='#' className='text-teal-700 hover:underline'>
          University of Mindanao Digos College{' '}
        </Link>
        with a strong interest in web development and want to apply my coding skills to real-world challenges. All
        coding projects are built from the ground up, from planning and designing all the way to solving real-life
        problems with code.
      </p>
    </div>
  )
}
