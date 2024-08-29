import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets';
import { useLocation } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(StoreContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if(location.pathname.endsWith('/')){
            setVisible(true);
        }
        else {
            setVisible(false);
        }
    },[location])

  return showSearch && visible ? (
    <div className='search-bar-container'>
        <div className='search-bar'>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search...' />
            <img src={assets.search_icon} alt="" />
        </div>
        <img src={assets.cross_icon} onClick={()=>setShowSearch(false)} alt="" />
    </div>
  ) : null
}

export default SearchBar
