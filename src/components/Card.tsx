import { memo } from 'react'
import cx from 'classnames'
import { Link } from 'react-router-dom'

interface Props {
  id: string
  name: string
  birth: string
  isLoading: boolean
}

export const Card = memo(({ id, name, birth, isLoading }: Props) => {
  return (
    <div
      className={cx({
        'cursor-pointer': !isLoading,
        'pointer-events-none': isLoading,
        'brightness-50': isLoading,
      })}
    >
      <Link to={`/person/${id}`}>
        <div
          className={cx(
            'relative',
            'p-4',
            'rounded-xl',
            'border',
            'shadow-[0_0_0_1px]',
            'border-gray-700',
            'shadow-transparent',
            'hover:border-violet-700',
            'hover:shadow-violet-700',
            'transition-colors',
            'duration-200',
          )}
        >
          <img
            className={cx('w-full', 'rounded-lg', 'aspect-square', 'object-cover', 'object-top')}
            src={`/persons/${id}.jpg`}
          />
          <div className={cx('mt-2')}>
            <p className={cx('font-semibold', 'text-base')}>{name}</p>
            <p className={cx('text-sm', 'text-gray-400')}>{birth}</p>
          </div>
        </div>
      </Link>
    </div>
  )
})
