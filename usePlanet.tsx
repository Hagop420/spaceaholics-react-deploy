import { useContext } from 'react'
import { planetContext } from './planetProvider'

export function usePlanet() {
  const context = useContext(planetContext)
  if (!context) {
    throw new Error('usePlanet must be used inside of PlanetProvider')
  }
  return context
}
