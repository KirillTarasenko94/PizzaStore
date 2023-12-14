import React, { useContext } from 'react'

import style from './serach.module.scss'
import { SerachContext } from '../../App.tsx'

function Search() {
  const {serch, setSearch} = useContext(SerachContext)
  
  return (
    <input onClick={() => setSearch('')} value={serch} onChange={(e) => setSearch(e.target.value)} className={style.root} placeholder='Поиск пицці..' />
  )
}

export default Search;