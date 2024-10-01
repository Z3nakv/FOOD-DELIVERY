import React, { useEffect, useRef, useState } from 'react';
import { menu_list } from '../../assets/assets';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import './ExploreMenu.css';

const ExploreMenu = ({ category, setCategory }) => {
  const sliderRef = useRef(null);
  const [scroll, setScroll] = useState(0); // Inicializa el estado de scroll en 0
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;

    if (slider) {
      // Establecer el valor inicial del scroll
      setScroll(slider.scrollLeft);

      // Actualizar visibilidad de las flechas
      const updateArrowsVisibility = () => {
        setShowLeftArrow(slider.scrollLeft > 0);
        setShowRightArrow(slider.scrollLeft + slider.clientWidth < slider.scrollWidth);
      };

      // Escuchar el evento de scroll para actualizar el estado cuando el usuario se desplaza
      const handleScroll = () => {
        setScroll(slider.scrollLeft);
        updateArrowsVisibility();
      };

      // Inicializa la visibilidad de las flechas
      updateArrowsVisibility();

      // Añadir el listener de scroll
      slider.addEventListener('scroll', handleScroll);

      // Limpiar el listener cuando el componente se desmonte
      return () => {
        slider.removeEventListener('scroll', handleScroll);
      };
    }
  }, [sliderRef]); // El efecto depende de sliderRef para que solo se ejecute una vez cuando se monta

   // Función para desplazar el slider hacia la izquierda
   const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  // Función para desplazar el slider hacia la derecha
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };


  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time</p>
      <div className='scroll-container'>
        <div
        className='explore-menu-list'
        ref={sliderRef}
        >
          {showLeftArrow &&  <span
          className='arrow left'
          onClick={scrollLeft}
          ><IoIosArrowBack /></span> }
          { menu_list.map(( item, index ) => {
              return (
                  <div
                  onMouseUp={() => setCategory(prev => prev===item.menu_name?"All":item.menu_name)}
                  key={index}
                  className='explore-menu-list-item'>
                      <img  className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name} />
                      <p>{item.menu_name}</p>
                  </div>
              )
          }) }
          {
          showRightArrow && 
          scroll + sliderRef.current.clientWidth !== sliderRef.current.scrollWidth ?
          <span
          className='arrow right'
          onClick={scrollRight}
          ><IoIosArrowForward /></span> : null }
        </div>
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
