import { Card, Icon, Logo, Post, SEO } from 'components'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import { LinkIcon, SearchIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useObjectState } from 'services'
import Fuse from 'fuse.js'

interface State {
  search: string
}

const Home: NextPage = () => {
  const [{ search }, setState, onChange] = useObjectState<State>({ search: '' })

  const get = async () => {}

  useEffect(() => {
    get()
  }, [])
  return (
    <>
      <SEO />
      <div className="container mx-auto space-y-4 px-5">
        <div className="flex justify-center">
          <Logo />
        </div>

        <div className="flex justify-center">
          <div className="flex items-center justify-between rounded-full border border-neutral-800 py-2 px-4">
            <input className="bg-transparent focus:outline-none" />
            <SearchIcon className="h-4 w-4 text-neutral-700" />
          </div>
        </div>
      </div>

      <div className="container sticky top-0 mx-auto border-b border-neutral-800 bg-neutral-900 px-5 py-4 pl-5 text-base font-semibold sm:static sm:text-lg">
        포스트
      </div>
      <div className="container mx-auto mt-4 grid grid-cols-1 gap-x-4 gap-y-10 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 21 }).map((_, key) => (
          <Post
            key={key}
            id={1}
            title="React Portal로 컴포넌트 만들기 (0) - Portal"
            description="Libero laudantium et harum neque laborum. Quia dolores dignissimos.
            Perspiciatis temporibus est vel nihil. Ea eligendi natus excepturi.
            excepturi. excepturi."
            createdAt="1일 전"
          />
        ))}
      </div>

      <div className="container sticky top-0 mx-auto mt-10 border-b border-neutral-800 bg-neutral-900 py-4 pl-5 text-base font-semibold sm:text-lg">
        <div className="flex items-center gap-2">
          <div>컬렉션</div>
          <Link href="/collections">
            <a>
              <LinkIcon className="h-5 w-5 cursor-pointer text-stone-500 hover:text-stone-300" />
            </a>
          </Link>
        </div>
      </div>

      <div className="container mx-auto mt-4 grid grid-cols-1 gap-x-4 gap-y-10 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
