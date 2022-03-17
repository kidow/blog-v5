import type { FC } from 'react'

import GithubIcon from './Github'

export interface Props {}
interface IIcon extends FC<Props> {
  Github: typeof GithubIcon
}

const Icon: IIcon = () => <></>

Icon.Github = GithubIcon

export default Icon
