import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets';
import './SearchBar.css';

const SearchBar = ({visible}) => {

    const {search, setSearch, setShowSearch, showSearch } = useContext(StoreContext);

  return (
    visible && showSearch ?
    <div className='search-bar-container' >
        <div className='search-bar'>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search...' />
            <img src={assets.search_icon} onClick={()=>setShowSearch(false)} alt="" />
        </div>
        <img src={assets.cross_icon} onClick={()=>setShowSearch(false)} alt="" />
    </div>
    : null
  ) 
}

export default SearchBar
