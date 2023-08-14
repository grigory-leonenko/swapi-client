import cx from 'classnames'
import { LoaderIcon } from '../assets'

export const Loader = () => {
  return (
    <div className={cx('flex', 'justify-center', 'mt-20')}>
      <LoaderIcon />
    </div>
  )
}
