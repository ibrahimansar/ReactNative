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
            mode="outlined"
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
            mode="outlined"
            keyboardType="number-pad"
            onChangeText={text => setPhone(text)}            
            />

            <TextInput 
            label = 'Salary'
            style={styles.inputStyle}
            value= {Salary}
            theme = {theme}
            mode="outlined"
            keyboardType="number-pad"
            onChangeText={text => setSalary(text)}            
            />

            <Button
                icon="upload" 
                mode="contained"
                style={styles.inputStyle}
                theme = {theme}
                onPress={() => setModal(true)}>
                    upload image
            </Button>

            <Button
                icon="content-save" 
                mode="contained"
                style={styles.inputStyle}
                theme = {theme}
                onPress={() => console.log("saved")}>
                    save
            </Button>
            
            <Modal
            animationType="slide"
            transparent={true}
            visible={modal}
            onRequestClose={() => {
                setModal(false)
            }}
            >
                <View style={styles.modalView}>
                    <View style={styles.modalButtonView}>

                        <Button
                        icon="camera"
                        mode="contained"
                        theme = {theme}
                        onPress={() => console.log("Pressed")}>
                            camera
                        </Button>      

                        <Button
                        icon="image-area"
                        mode="contained"
                        theme = {theme}
                        onPress={() => setModal(false)}>
                            gallery
                        </Button>  

                    </View>
                    <Button
                    theme = {theme}
                    onPress={() => setModal(false)}>
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
        margin:5,
    },
    modalButtonView:{
        flexDirection:"row",
        justifyContent:"space-around",
        padding:10
    },
    modalView:{
        position:"absolute",
        bottom:2,
        width:"100%",
        backgroundColor: "white"
    }
})

export default CreateEmployee;