import { useEffect, useState } from 'react'
import './App.css'
import { HomePageWrap } from './HomePageWrap'
import { FavoritePlanets } from './FavoritesPage'
import { PlanetProvider , type Item, planetContextVal } from './planetProvider'
import { Route, Routes } from 'react-router-dom'
import { NotFoundPage } from './NotFoundPage'
import { EditingPage } from './EditingPage'




function App() {

  // getting the item array state
  const [planetItems, setPlanetItems] = useState<Item[]>([])

 // state for Item object - only 1
 const [imageContentStored, setImageContentStored] = useState<Item>()

    



  // Creating the LS function

  function setItemFavoritePlanet(item: Item) {
    let planetFav = [...planetItems, item]
    setPlanetItems(planetFav)
    
    localStorage.setItem('Planet_information', JSON.stringify(planetFav))
  }

  useEffect(() => {
    if (!localStorage.getItem('Planet_information')) {
        localStorage.setItem('Planet_information' , JSON.stringify(planetItems))
      
    }
  } , [localStorage])

 

  // getting my LS planets info parsed
  function storedContents() {
      const getStored = localStorage.getItem('Planet_information')
      setPlanetItems(JSON.parse(String(getStored)))
  }

  

  function deletePlanet(index: number) {
    const newArr: Item[] = []

    for (let i = 0; i < planetItems.length; i += 1){
      if (i !== index) {
        newArr.push(planetItems[i])
      }
    }
    setPlanetItems(newArr)
    // const yoyo = planetItems.splice(index , 1)
    localStorage.setItem('Planet_information' , JSON.stringify(newArr))
  }


  useEffect(() => {
    const getStored = localStorage.getItem('Planet_information')
    setPlanetItems(JSON.parse(String(getStored)))
  }, [])
  
  

 
  
 



// context function
  const contextValuePlanet: planetContextVal = {
    planetItem: planetItems,
    setPlanetFavorite: setItemFavoritePlanet,
    setStoredFavorite: storedContents,
    setImageContentStored: setImageContentStored,
    setPlanetItem: deletePlanet,
    imageContentStored: imageContentStored,
    }
  return (
    
    <PlanetProvider value={contextValuePlanet}>
      <Routes>
        <Route index element={<HomePageWrap />} />
        <Route path="/favoritePlanets" element={<FavoritePlanets planet={planetItems} />} />
        <Route path='/EditingPage/:planetId' element={<EditingPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </PlanetProvider>
    
  )
}

export default App
