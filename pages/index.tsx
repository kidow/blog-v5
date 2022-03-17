import { Icon, Logo, SEO } from 'components'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import { SearchIcon } from '@heroicons/react/outline'

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
      <div className="container mx-auto mt-4 grid grid-cols-1 gap-y-4 px-4 sm:grid-cols-2 sm:px-0 md:grid-cols-3 lg:grid-cols-4">
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
        <div>asd</div>
        <div>dsf</div>
        <div>fdg</div>
        <div>gfhg</div>
      </div>

      <div className="container sticky top-0 mx-auto mt-10 border-b border-neutral-800 bg-neutral-900 py-4 pl-4 text-base font-semibold sm:pl-0 sm:text-lg">
        컬렉션
      </div>
      <div className="container mx-auto mt-4 grid grid-cols-1 gap-y-4 px-4 sm:grid-cols-2 sm:px-0 md:grid-cols-3 lg:grid-cols-4">
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
        <div>asd</div>
        <div>dsf</div>
        <div>fdg</div>
        <div>gfhg</div>
      </div>
    </>
  )
}

export default Home
