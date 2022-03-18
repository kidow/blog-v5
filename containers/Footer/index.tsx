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
        className={classnames('container mx-auto pt-6 pb-20', {
          'max-w-screen-md': !!query.id
        })}
      >
        <div>
          <Logo />
        </div>
        <div className="mb-6">
          <a
            href="mailto:wcgo2ling@gmail.com"
            className="text-sm text-sky-600 hover:underline"
          >
            wcgo2ling@gmail.com
          </a>
        </div>
        <div className="border-t border-stone-700 pt-4 text-xs text-stone-500">
          © {new Date().getFullYear()} kidow. All right reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer
