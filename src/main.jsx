import React from 'react'
import ReactDOM from 'react-dom/client'
import ShopItemClass from './components/ShopItemClass.jsx'


const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopItemClass item={item}/>
  </React.StrictMode>,
)
