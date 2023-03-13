import Image from 'next/image'
import Link from 'next/link'

type Props = {
  img: string
  title: string
  stack: string[]
  link: string
}

export default function ProjectList({ img, title, stack, link }: Props) {
  return (
    <Link href={link} target="_blank" className="overflow-hidden border-2 border-black rounded-md">
      <Image
        src={img}
        alt="image"
        width={500}
        height={500}
        className="object-cover w-full cursor-pointer h-36 md:h-48"
      />
      <div className="w-full p-4">
        <h1 className="mb-5 font-bold text-md">{title}</h1>
        <p className="flex flex-row flex-wrap items-center justify-start text-xs gap-2 md:text-sm">
          {stack.map(item => (
            <span key={item} className="px-2 py-2 border border-black rounded-lg">
              {item}
            </span>
          ))}
        </p>
      </div>
    </Link>
  )
}
