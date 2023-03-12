import { Londrina_Solid } from '@next/font/google'
import Link from 'next/link'

const londrina = Londrina_Solid({ weight: '400', subsets: ['latin'] })

export default function Intro() {
  return (
    <div className="flex flex-col items-center justify-center my-16">
      <h1 className={`lg:text-6xl text-5xl ${londrina.className}`}>Jom Dollesin</h1>
      <p className="text-xs">codewithjom@gmail.com</p>
      <p className="max-w-xs mt-5 text-sm font-bold text-center lg:max-w-xl">
        I'm a student at the{' '}
        <Link href="https://www.digos.umindanao.edu.ph/" target="_blank" className="text-teal-700 hover:underline">
          University of Mindanao Digos College{' '}
        </Link>
        with a strong interest in web development and want to apply my coding skills to real-world challenges. All
        coding projects are built from the ground up, from planning and designing all the way to solving real-life
        problems with code.
      </p>
    </div>
  )
}
