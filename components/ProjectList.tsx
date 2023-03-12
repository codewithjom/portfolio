import Link from 'next/link'

type Props = {
  title: string
  stack: string[]
  link: string
}

export default function ProjectList({ title, stack, link }: Props) {
  return (
    <Link href={link} target="_blank" className="border border-black rounded mb-4 px-8 py-4">
      <h1 className="font-bold text-md mb-5">{title}</h1>
      <p className="flex flex-wrap gap-2">
        {stack.map(item => (
          <span key={item} className="border border-black rounded-lg px-2 py-2">
            {item}
          </span>
        ))}
      </p>
    </Link>
  )
}
