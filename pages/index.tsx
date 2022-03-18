import { Card, Icon, Logo, SEO } from 'components'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import { LinkIcon, SearchIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const Home: NextPage = () => {
  const get = async () => {}

  useEffect(() => {
    get()
  }, [])
  return (
    <>
      <SEO />
      <div className="container mx-auto space-y-4">
        <div className="flex justify-center">
          <Logo />
        </div>

        {/* <div className="flex items-center justify-center gap-2">
          <span
            onClick={() => window.open('https://github.com/kidow', '_blank')}
          >
            <Icon.Github className="cursor-pointer fill-neutral-500 hover:fill-white" />
          </span>
        </div> */}

        <div className="flex justify-center">
          <div className="flex items-center justify-between rounded-full border border-neutral-800 py-2 px-4">
            <input className="bg-transparent focus:outline-none" />
            <SearchIcon className="h-4 w-4 text-neutral-700" />
          </div>
        </div>
      </div>

      <div className="container sticky top-0 mx-auto border-b border-neutral-800 bg-neutral-900 py-4 pl-4 text-base font-semibold sm:static sm:pl-0 sm:text-lg">
        포스트
      </div>
      <div className="container mx-auto mt-4 grid grid-cols-1 gap-x-4 gap-y-10 px-4 sm:grid-cols-2 sm:px-0 md:grid-cols-3 lg:grid-cols-4">
        <div>
          <div className="font-medium sm:text-lg">lorem</div>
          <div className="mt-2.5 text-sm text-stone-400 line-clamp-3 sm:text-base">
            Libero laudantium et harum neque laborum. Quia dolores dignissimos.
            Perspiciatis temporibus est vel nihil. Ea eligendi natus excepturi.
            excepturi. excepturi.
          </div>
          <div className="mt-2 text-sm text-stone-300 sm:text-base">1일 전</div>
        </div>
        <div>dsf</div>
        <div>fdg</div>
        <div>gfhg</div>
        <div>asd</div>
        <div>dsf</div>
        <div>fdg</div>
        <div>gfhg</div>
        <div>asd</div>
        <div>dsf</div>
        <div>fdg</div>
        <div>gfhg</div>
        <div>asd</div>
        <div>dsf</div>
        <div>fdg</div>
        <div>gfhg</div>
        <div>asd</div>
        <div>dsf</div>
        <div>fdg</div>
        <div>gfhg</div>
        <div>asd</div>
        <div>dsf</div>
        <div>fdg</div>
        <div>gfhg</div>
        <div>asd</div>
        <div>dsf</div>
        <div>fdg</div>
        <div>gfhg</div>
      </div>

      <div className="container sticky top-0 mx-auto mt-10 border-b border-neutral-800 bg-neutral-900 py-4 pl-4 text-base font-semibold sm:pl-0 sm:text-lg">
        <div className="flex items-center gap-2">
          <div>컬렉션</div>
          <Link href="/collections">
            <a>
              <LinkIcon className="h-5 w-5 cursor-pointer text-stone-500 hover:text-stone-300" />
            </a>
          </Link>
        </div>
      </div>

      <div className="container mx-auto mt-4 grid grid-cols-1 gap-x-4 gap-y-10 px-4 sm:grid-cols-2 sm:px-0 md:grid-cols-3 lg:grid-cols-4">
        <Card href="/components">React Components</Card>
        <Card href="/hooks">React Hooks</Card>
        <Card href="/utils">Util Functions</Card>
        <Card href="/settings">Settings</Card>
        <Card href="/projects">Projects</Card>
      </div>
    </>
  )
}

export default Home
