import React,{useState} from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import {TextInput, Button} from 'react-native-paper';

const CreateEmployee =() => {
    const [Name, setName] = useState("")
    const [Phone, setPhone] = useState("")
    const [Email, setEmail] = useState("")
    const [Salary, setSalary] = useState("")
    const [Picture, setPicture] = useState("")
    const [modal, setModal] = useState("")
    return(
        <View style={styles.root}>
            <TextInput 
            label = 'Name'
            style={styles.inputStyle}
            value= {Name}
            theme = {theme}
            onChangeText={text => setName(text)}            
            />
            <TextInput 
            label = 'Email'
            style={styles.inputStyle}
            value= {Email}
            theme = {theme}
            mode="outlined"
            onChangeText={text => setEmail(text)}            
            />
            <TextInput 
            label = 'Phone'
            style={styles.inputStyle}
            value= {Phone}
            theme = {theme}
            keyboardType="number-pad"
            onChangeText={text => setPhone(text)}            
            />
            <TextInput 
            label = 'Salary'
            style={styles.inputStyle}
            value= {Phone}
            theme = {theme}
            onChangeText={text => setSalary(text)}            
            />
            <Button icon="upload" mode="contained" onPress={() => setModal(true)}>
                Press here
            </Button>
            <Modal
            animationType="slide"
            transparent={false}
            visible={modal}
            onRequestClose={() => {
                setModal(false)
            }}
            >
                <View>
                    <View style={styles.modalButtonView}>
                        <Button icon="camera"  mode="contained" onPress={() => setModal(false)}>
                            cancel
                        </Button>           
                        <Button icon="camera"  mode="contained" onPress={() => setModal(false)}>
                            cancel
                        </Button>                
                    </View>
                    <Button icon="camera" onPress={() => setModal(false)}>
                            cancel
                    </Button>                    
                </View>
            </Modal>
        </View>
    )
}

const theme = {
    colors:{
        primary: "#006aff"
    }
}

const styles = StyleSheet.create({
    root:{
        flex:1
    },
    inputStyle: {
        margin:5
    },
    // modalButtonView: {
    //     position:"absolute",
    //     bottom:2,
    //     width:100%
    // },
})

export default CreateEmployee;