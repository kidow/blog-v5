import { Logo } from 'components'
import dayjs from 'dayjs'
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage
} from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { supabase } from 'services'

interface State {}

const IdPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  data
) => {
  const { replace } = useRouter()
  const addViewCount = async () => {}

  useEffect(() => {
    console.log('data', data)
    if (data.is_inactivated) {
      alert('임시 비활성화된 글입니다.')
      replace('/')
    }
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
            {data.title}
          </div>
          <div className="mt-4 text-sm font-medium text-stone-400">
            {dayjs(data.created_at).format('YYYY년 MM월 DD일')}
          </div>
        </div>

        <div className="sticky top-10 mt-16">
          <div className="absolute -left-28">sidebar</div>
        </div>
        <div
          className="mt-16"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<IPost> = async ({ params }) => {
  const { data, error } = await supabase
    .from<IPost>('posts')
    .select('*')
    .match({ id: params!.id })
    .single()
  if (error) return { redirect: { destination: '/', permanent: false } }
  return {
    props: data,
    revalidate: 60 * 60 * 24 * 7
  }
}

export default IdPage
