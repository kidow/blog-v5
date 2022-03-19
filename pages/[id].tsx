import { Logo } from 'components'
import type { NextPage } from 'next'
import { useEffect } from 'react'

interface State {}

const IdPage: NextPage = () => {
  const addViewCount = async () => {}

  useEffect(() => {
    addViewCount()
  }, [])
  return (
    <>
      <div className="container mx-auto max-w-screen-md px-5">
        <div className="flex justify-center px-5 sm:px-0">
          <Logo />
        </div>

        <div className="mt-10 text-center">
          <div className="mx-auto text-2xl font-bold md:text-3xl">
            React Portal로 컴포넌트 만들기 (0) - Portal
          </div>
          <div className="mt-4 text-sm font-medium text-stone-400">
            2022년 03월 20일
          </div>
        </div>

        <div className="relative mt-16">
          <div className="absolute -left-28 hidden md:block">sidebar</div>
        </div>
        <div>asd</div>
      </div>
    </>
  )
}

export default IdPage
