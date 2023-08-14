import { useMemo } from 'react'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import { PersonResult, usePersonData } from '../../hooks/api'
import { MaleIcon, FemaleIcon, QuestionIcon, SizeIcon, BackArrowIcon } from '../../assets'
import { PersonField } from './PersonField'
import { Input } from '../../components'

interface Props {
  id: string
  person: PersonResult
}

export const PersonData = ({ id, person }: Props) => {
  const { data, setField } = usePersonData(id, person)
  const gender = useMemo(() => {
    switch (data.gender) {
      case 'male':
        return <MaleIcon />
      case 'female':
        return <FemaleIcon />
      default:
        return <QuestionIcon />
    }
  }, [data.gender])

  return (
    <div className={cx('flex', 'flex-col', 'items-center', 'pb-10')}>
      <h1 className={cx('text-3xl', 'font-semibold')}>{data.name}</h1>
      <div className={cx('flex', 'w-full', 'mt-8')}>
        <img className={cx('rounded-lg')} src={`/persons/${id}.jpg`} alt={`${data.name} avatar`} />
        <div className={cx('flex-1', 'ml-8')}>
          <div className={cx('flex', 'gap-2')}>
            <PersonField icon={gender} text={data.gender} />
            <PersonField icon={<SizeIcon vertical />} text={data.height} />
            <PersonField icon={<SizeIcon />} text={data.mass} />
          </div>
          <div className={cx('mt-4')}>
            <Input label="Hair color" value={data.hair_color} onChange={value => setField('hair_color', value)} />
            <Input label="Skin color" value={data.skin_color} onChange={value => setField('skin_color', value)} />
            <Input label="Eye color" value={data.eye_color} onChange={value => setField('eye_color', value)} />
          </div>
          <Link to="/" className={cx('block', 'flex', 'gap-2', 'mt-4')}>
            <BackArrowIcon /> <p>Back</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
