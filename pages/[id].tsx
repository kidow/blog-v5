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
      <div className="container mx-auto max-w-screen-md">asd</div>
    </>
  )
}

export default IdPage
