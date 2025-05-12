import { Button, FlatList, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Todo = () => {
const [input,setinput]=useState('')
const [data,setdata]=useState([])
const [editIndex, setEditIndex] = useState(null)

const handledata=()=>{

  if(input.trim()){
    if(editIndex !=null){
        const updateddata=[...data]
        updateddata[index]=input
        setdata(updateddata)
        setEditIndex('')
    }else{
        setdata(prev=>[...prev,input])
    }
    setinput('')
  }
}

const handledelete=(index)=>{
    let filter=data.filter((item,i)=>i!==index)
    setdata(filter)
}
const handleEdit=(index)=>{
  setinput(data[index])
  setEditIndex(index)
}

const renderItem = ({ item,index }) => (
    <View>
      <Text>{item}</Text>
     <TouchableOpacity onPress={()=>handledelete(index)}>
        <Text>delete</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={() => handleEdit(index)}>
        <Text>Edit</Text>
     </TouchableOpacity>
    </View>
  );
  return (
    <View style={{...styles.container}}>
    <TextInput 
    placeholder='Enter data'
    style={{borderWidth:1,width:'90%',height:50,borderRadius:10}}
    value={input}
    onChangeText={(text)=>setinput(text)}
    />
    <Button title='Submit' onPress={handledata}/>
    <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

export default Todo

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        padding:10
    }
})