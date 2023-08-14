import cx from 'classnames'
import { Layout } from '../../components'
import { CryingFaceIcon } from '../../assets'

export const NotFound = () => {
  return (
    <Layout>
      <div className={cx('flex', 'flex-col', 'items-center', 'mt-20', 'gap-2')}>
        <CryingFaceIcon />
        <p className={cx('font-semibold', 'text-neutral-300')}>Page does not exits - 404</p>
      </div>
    </Layout>
  )
}
