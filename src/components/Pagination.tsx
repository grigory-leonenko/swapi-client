import { memo, useMemo } from 'react'
import cx from 'classnames'
import { LeftChevronIcon, RightChevronIcon } from '../assets'

const buttonBaseStyle = cx(
  'w-8',
  'h-8',
  'flex',
  'text-neutral-300',
  'justify-center',
  'items-center',
  'hover:bg-neutral-500/[0.2]',
  'rounded-full',
  'transition-colors',
  'focus:outline-none',
  'duration-200',
)
const disabledColor = '#404040'
const activeColor = '#d4d4d4'

interface Props {
  totalPages: number
  limitPages?: number
  currentPage: number
  onPageChange: (page: number) => void
}

export const Pagination = memo(({ totalPages, limitPages = 5, currentPage, onPageChange }: Props) => {
  const pages = useMemo(() => {
    const pages = []
    let start = Math.max(currentPage - Math.floor(limitPages / 2), 1)
    const end = Math.min(start + limitPages - 1, totalPages)

    if (end - start < limitPages - 1) {
      start = Math.max(end - limitPages + 1, 1)
    }

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    return pages
  }, [currentPage, totalPages, limitPages])

  const handlePageChange = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page)
    }
  }

  const renderPageItem = (page: number) => (
    <li key={page}>
      <button
        className={cx(buttonBaseStyle, {
          'bg-violet-700': page === currentPage,
          'hover:bg-violet-700': page === currentPage,
        })}
        onClick={() => handlePageChange(page)}
      >
        {page}
      </button>
    </li>
  )

  return (
    <div className={cx('flex', 'justify-center', 'mt-4')}>
      <nav>
        <ul className={cx('flex', 'gap-0.5')}>
          <li>
            <button
              className={buttonBaseStyle}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <LeftChevronIcon color={currentPage === 1 ? disabledColor : activeColor} />
            </button>
          </li>

          {pages.map(renderPageItem)}

          <li>
            <button
              className={buttonBaseStyle}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <RightChevronIcon color={currentPage === totalPages ? disabledColor : activeColor} />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
})
