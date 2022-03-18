import 'styles/globals.css'
import App from 'next/app'
import { ErrorInfo } from 'react'
import { Footer } from 'containers'

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
        <Footer />
      </>
    )
  }
}

export default MyApp
