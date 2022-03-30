import { MenuIcon } from '@heroicons/react/outline'
import { Drawer } from 'components'
import { Footer } from 'containers'
import Link from 'next/link'
import type { FC } from 'react'
import { useObjectState } from 'services'

export interface Props {}
interface State {
  isOpen: boolean
}

const Layout: FC<Props> = ({ children }) => {
  const [{ isOpen }, setState] = useObjectState<State>({
    isOpen: false
  })
  return (
    <>
      <span
        className="fixed top-4 left-4 cursor-pointer"
        onClick={() => setState({ isOpen: true })}
      >
        <MenuIcon className="h-5 w-5" />
      </span>

      <div className="min-h-screen pt-10 pb-20">{children}</div>

      <div className="fixed right-5 top-5 hidden gap-3 text-neutral-500 sm:flex">
        <Link href="/resume">
          <a className="hover:text-neutral-50">Résumé</a>
        </Link>

        <Link href="https://github.com/kidow">
          <a className="hover:text-neutral-50" target="_blank">
            Github
          </a>
        </Link>
      </div>

      <Footer />

      <Drawer
        isOpen={isOpen}
        position="left"
        onClose={() => setState({ isOpen: false })}
      />
    </>
  )
}

export default Layout
