import { useState, useCallback } from 'react'
import cx from 'classnames'
import { Layout, Loader, Card, Pagination, Input } from '../../components'
import { usePeople } from '../../hooks/api'
import { CryingFaceIcon, SearchIcon } from '../../assets'
import { getPersonId } from '../../utils'

export const Dashboard = () => {
  const [query, setQuery] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const { isLoading, isFetching, isPreviousData, data, error } = usePeople(page, query)
  const totalPages = data?.count ? Math.ceil(data.count / 10) : 0
  const hasData = !!data?.results?.length

  const scrollPage = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [])

  const handleChangeQuery = useCallback(
    (value: string) => {
      setQuery(value)
      setPage(1)
      scrollPage()
    },
    [scrollPage],
  )

  const handleChangePage = useCallback(
    (page: number) => {
      setPage(page)
      scrollPage()
    },
    [scrollPage],
  )

  if (isLoading && !isPreviousData) {
    return (
      <Layout>
        <Loader />
      </Layout>
    )
  }

  return (
    <Layout>
      <div className={cx('w-[228px] ml-auto')}>
        <Input placeholder="Search" icon={<SearchIcon />} value={query} onChange={handleChangeQuery} />
      </div>
      {hasData && !error ? (
        <div className={cx('mt-4', 'grid', 'grid-cols-4', 'gap-4')}>
          {data.results.map(person => {
            const id = getPersonId(person.url)
            return (
              <Card
                key={id}
                id={id}
                name={person.name}
                birth={person.birth_year}
                isLoading={isFetching && isPreviousData}
              />
            )
          })}
        </div>
      ) : (
        <div className={cx('flex', 'flex-col', 'items-center', 'mt-20', 'gap-2')}>
          <CryingFaceIcon />
          <p className={cx('font-semibold', 'text-neutral-300')}>Nothing found</p>
        </div>
      )}
      {hasData && (
        <div className={cx('my-8')}>
          <Pagination totalPages={totalPages} currentPage={page} onPageChange={handleChangePage} />
        </div>
      )}
    </Layout>
  )
}
