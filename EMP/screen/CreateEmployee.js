import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TextInput} from 'react-native-paper';

const CreateEmployee =() => {
    const [Name, setName] = useState("")
    const [Phone, setPhone] = useState("")
    const [Email, setEmail] = useState("")
    const [Salary, setSalary] = useState("")
    const [Picture, setPicture] = useState("")
    const [Modal, setModal] = useState("")
    return(
        <View style={Styles.root}>
            <TextInput 
            label = 'Name'
            value= {Name}
            onChangeText={text => setName(text)}            
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flex:1
    }
})

export default CreateEmployee;