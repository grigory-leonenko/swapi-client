import cx from 'classnames'
import { ReactNode } from 'react'

interface Props {
  icon: ReactNode
  text: string
}

export const PersonField = ({ icon, text }: Props) => {
  return (
    <div className={cx('flex', 'items-center')}>
      {icon} <p className={cx('ml-2')}>{text}</p>
    </div>
  )
}
