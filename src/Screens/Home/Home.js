import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, login } from '../../redux/todoslice'


const Home = () => {
  const todos = useSelector(state => state?.todoreducer)
  console.log(todos, "todos>>>>")

  const dispatch = useDispatch()
  const increment = () => {
    dispatch(addTodo(1))
    // addTodo({a:'a'})
  }
  const getLogin = () => {
    dispatch(login(true))
    // addTodo({a:'a'})
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 26 }} >Home</Text>
      <View style={{ height: 60 }} />
      <Button title='Login' onPress={() => alert('hey')} />
      <TouchableOpacity onPress={increment} style={{ height: 48, width: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }} >
        <Text>ADD ME</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home