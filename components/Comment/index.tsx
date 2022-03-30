import { useEffect, useRef } from 'react'
import type { FC } from 'react'

export interface Props {}

const Comment: FC<Props> = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    const attributes = {
      src: 'https://giscus.app/client.js',
      'data-repo': 'kidow/blog-v5',
      'data-repo-id': 'R_kgDOHA4XMA',
      'data-category': 'Q&A',
      'data-category-id': 'DIC_kwDOHA4XMM4COVhG',
      'data-mapping': 'title',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'top',
      'data-theme': 'dark_high_contrast',
      'data-lang': 'ko',
      crossOrigin: 'anonymous',
      async: 'true'
    }
    Object.entries(attributes).forEach(([key, value]) =>
      script.setAttribute(key, value)
    )
    ref.current?.appendChild(script)
  }, [])
  return <div ref={ref} />
}

export default Comment
