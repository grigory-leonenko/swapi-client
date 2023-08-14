import { useQuery } from '@tanstack/react-query'
import { useCallback, useState } from 'react'
import { getPersonLocalData } from '../utils'

export interface PersonResult {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: 'male' | 'female' | 'n/a'
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: Date
  edited: Date
  url: string
}

interface PeopleResult {
  count: number
  next: string | null
  previous: string | null
  results: PersonResult[]
}

interface ResponseError {
  detail: string
}

export const usePeople = (page: number, query: string) => {
  const fetchPeople = useCallback(() => {
    return fetch(`https://swapi.dev/api/people?page=${page}&search=${query}`).then(res => res.json())
  }, [page, query])

  return useQuery<PeopleResult, ResponseError>({
    queryKey: ['people', page, query],
    queryFn: fetchPeople,
    keepPreviousData: true,
  })
}

export const usePerson = (id: string) => {
  const fetchPerson = useCallback(() => {
    return fetch(`https://swapi.dev/api/people/${id}`).then(res => res.json())
  }, [id])

  return useQuery<PersonResult, ResponseError>({
    queryKey: ['person', id],
    queryFn: fetchPerson,
  })
}

export const usePersonData = (id: string, person: PersonResult) => {
  const localKey = `person:${id}`
  const localData = getPersonLocalData(localKey)
  console.log(localData)
  const [data, setData] = useState({ ...person, ...localData })

  const handleSetField = useCallback(
    (field: string, value: string) => {
      const nextData = {
        ...localData,
        [field]: value,
      }
      console.log(nextData)
      localStorage.setItem(localKey, JSON.stringify(nextData))

      setData(current => ({
        ...current,
        [field]: value,
      }))
    },
    [localKey, localData],
  )

  return { data, setField: handleSetField }
}
