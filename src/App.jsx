import * as React from 'react'

import './App.css'


const products =[
  {
    id: 1,
    name: 'React Book',
    price: 32.5
  },{
    id: 2,
    name: 'Angular Book',
    price: 30.5
  },{
    id: 3,
    name: 'JS Book',
    price: 40
  },{
    id: 4,
    name: 'CSS Book',
    price: 20
  },{
    id: 5,
    name: 'HTML Book',
    price: 25
  },{
    id: 6,
    name: 'Vue Book',
    price: 35
  },{
    id: 7,
    name: 'Svelte Book',
    price: 30
  },{
    id: 8,
    name: 'React Native Book',
    price: 45
  },{
    id: 9,
    name: 'Flutter Book',
    price: 50
  },{
    id: 10,
    name: 'Dart Book',
    price: 30
  }
]


function getAsyncProduccts() {
  const asyncProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({data : {result : products}}) 
    }, 3000)
  })
  return asyncProducts
}




function App() {

  const [items, setItems] = React.useState([])


  React.useEffect(() => {
    getAsyncProduccts().then(response => {
      setItems(response.data.result)
    })
    .catch(error => {
      console.log('Error:', error)
    })
  },)



  return (
    <>
      <List items={items} />
    </>
  )
}



function List({items}) {
  return(
    <ul>
      {items.map(item => {
        const {id , name , price} =item
        return(
          <li key={id}>
            <h2>product name: {name}</h2>
            <p>product price: {price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</p>
          </li>
        )
      })}
    </ul>
  )
}







export default App
