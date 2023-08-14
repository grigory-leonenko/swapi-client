import { memo, ChangeEvent, ReactNode } from 'react'
import cx from 'classnames'

interface Props {
  id?: string
  type?: string
  label?: string
  placeholder?: string
  icon?: ReactNode
  value: string
  onChange: (value: string) => void
}

export const Input = memo(({ id, type = 'text', label, placeholder, icon, value, onChange }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <div className={cx('relative', 'mt-4', 'backdrop-blur-sm')}>
      {label && (
        <label htmlFor={id} className={cx('block', 'font-medium', 'mb-2')}>
          {label}
        </label>
      )}
      {icon && <div className={cx('absolute', 'flex', 'h-full', 'items-center', 'left-2')}>{icon}</div>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={cx(
          'w-full',
          icon ? 'pl-8' : 'pl-4',
          'pr-4',
          'py-2',
          'border',
          'shadow-[0_0_0_1px]',
          'shadow-transparent',
          'border-gray-700',
          'bg-transparent',
          'placeholder:text-gray-700',
          'hover:border-gray-600',
          'focus:border-violet-700',
          'focus:shadow-violet-700',
          'outline-none',
          'rounded-md',
          'transition-all',
          'duration-200',
        )}
      />
    </div>
  )
})
