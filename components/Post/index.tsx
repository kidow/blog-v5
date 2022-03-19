import type { FC } from 'react'
import cheerio from 'cheerio'
import Link from 'next/link'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export interface Props {
  id: number
  title: string
  description: string
  createdAt: string
}
interface State {}

const Post: FC<Props> = ({ id, title, description, createdAt }) => {
  return (
    <div className="group flex flex-col justify-between">
      <div className="font-medium sm:text-lg">
        <Link href={`/${id}`}>
          <a className="line-clamp-2 group-hover:underline">{title}</a>
        </Link>
      </div>
      <div>
        <div className="mt-2.5 text-sm text-stone-400 line-clamp-3 sm:text-base">
          <Link href={`/${id}`}>
            <a>{description}</a>
          </Link>
        </div>
        <div className="mt-2 text-sm text-stone-300 sm:text-base">
          {dayjs()
            .add(-Math.floor(Math.random() * 400), 'day')
            .locale('ko')
            .fromNow()}
        </div>
      </div>
    </div>
  )
}

export default Post
