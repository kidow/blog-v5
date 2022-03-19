import type { FC } from 'react'
import Link from 'next/link'

export interface Props {
  href: string
}
interface State {}

const Card: FC<Props> = ({ href, children }) => {
  return (
    <section className="group space-y-3">
      <Link href={href} passHref>
        <img
          src="https://via.placeholder.com/384x216"
          alt=""
          className="cursor-pointer select-none rounded"
          draggable={false}
        />
      </Link>
      <div>
        <Link href={href}>
          <a className="text-lg font-semibold group-hover:underline">
            {children}
          </a>
        </Link>
      </div>
    </section>
  )
}

export default Card
