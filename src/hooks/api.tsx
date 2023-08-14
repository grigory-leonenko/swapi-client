import { useQuery } from '@tanstack/react-query'
import { useCallback } from 'react'

interface Person {
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
  results: Person[]
}

interface ResponseError {
  detail: string
}

export const usePeople = (page: number, query: string) => {
  const fetchPeople = useCallback(() => {
    console.log('call fetch', page, query)
    return fetch(`https://swapi.dev/api/people?page=${page}&search=${query}`).then(res => res.json())
  }, [page, query])

  return useQuery<PeopleResult, ResponseError>({
    queryKey: ['projects', page, query],
    queryFn: fetchPeople,
    keepPreviousData: true,
  })
}
