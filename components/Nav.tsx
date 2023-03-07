import { Fira_Code, Londrina_Solid } from '@next/font/google'
import Link from 'next/link'

const firaCode = Fira_Code({ subsets: ['latin'] })
const londrina = Londrina_Solid({ weight: '400', subsets: ['latin'] })

export default function Nav() {
  return (
    <nav className='flex justify-between py-2 shadow-md'>
      <h1 className={`text-2xl ${londrina.className} lg:pl-52 md:pl-24 pl-8`}>codewithjom</h1>
      <ul className={`text-sm ${firaCode.className} lg:flex md:flex lg:pr-52 md:pr-24 pr-8 py-2 lg:gap-6 md:gap-4`}>
        <li>
          <Link href='#' className='rounded py-2 px-4 bg-teal-700 text-stone-200'>
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  )
}
