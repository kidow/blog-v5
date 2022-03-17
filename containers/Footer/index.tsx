import { useRouter } from 'next/router'
import type { FC } from 'react'
import classnames from 'classnames'
import { Logo } from 'components'

export interface Props {}
interface State {}

const Footer: FC<Props> = () => {
  const { query } = useRouter()
  return (
    <div className="bg-zinc-800">
      <div
        className={classnames('container mx-auto py-6', {
          'max-w-screen-md': !!query.id
        })}
      >
        <div>
          <Logo />
        </div>
      </div>
    </div>
  )
}

export default Footer
