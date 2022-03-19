import 'styles/globals.css'
import App from 'next/app'
import { ErrorInfo } from 'react'
import { Footer } from 'containers'
import { Icon } from 'components'
import Link from 'next/link'
import { IdentificationIcon } from '@heroicons/react/outline'

interface Props {}
interface State {
  hasError: boolean
}

class MyApp extends App<Props, {}, State> {
  state = {
    hasError: false
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (error) this.setState({ hasError: true })
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  render() {
    const {} = this.state
    const { Component, pageProps } = this.props
    return (
      <>
        <div className="min-h-screen pt-10 pb-20">
          <Component {...pageProps} />
        </div>

        <Link href="/resume">
          <a
            className="fixed right-16 top-5 hidden sm:inline-block"
            title="이력서"
          >
            <IdentificationIcon className="h-7 w-7 text-neutral-500 hover:text-neutral-50" />
          </a>
        </Link>

        <a
          href="https://github.com/kidow"
          target="_blank"
          rel="noreferrer"
          title="깃허브"
        >
          <button className="fixed right-5 top-5 hidden sm:inline-block">
            <Icon.Github className="fill-neutral-500 hover:fill-neutral-50" />
          </button>
        </a>

        <Footer />
      </>
    )
  }
}

export default MyApp
