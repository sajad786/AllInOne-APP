import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductList from './src/Screens/ProductList/ProductList'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import Home from './src/Screens/Home/Home'

const App = () => {
  return (
    <Provider store={store} >
      <>
      <Home/>
      {/* <ProductList/> */}
      </>
     </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'green'
  },
  textStyle:{
    fontSize:22,
    fontWeight:'bold',
    color:'white',
    textDecorationLine:'underline'
  }
})