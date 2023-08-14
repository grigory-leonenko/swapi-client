import { PropsWithChildren } from 'react'
import cx from 'classnames'
import { Logo } from '../assets'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={cx('flex', 'flex-col', 'items-center', 'min-h-screen')}>
      <div className={cx('py-10')}>
        <Logo />
      </div>
      <div className={cx('w-[960px]', 'flex-1')}>{children}</div>
    </div>
  )
}
