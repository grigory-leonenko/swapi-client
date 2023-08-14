// import cx from 'classnames'
import { Layout, Loader } from '../../components'
import { usePerson } from '../../hooks/api'
import { useParams } from 'react-router-dom'
import { PersonData } from './PersonData'

export const Person = () => {
  const { id } = useParams<{ id: string }>()

  if (!id) {
    throw new Error('Error while person page match')
  }

  const { isLoading, data } = usePerson(id)

  if (isLoading || !data) {
    return (
      <Layout>
        <Loader />
      </Layout>
    )
  }

  return (
    <Layout>
      <PersonData id={id} person={data} />
    </Layout>
  )
}
