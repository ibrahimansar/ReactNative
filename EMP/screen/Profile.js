import React,{useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient} from 'expo-linear-gradient';
import {Title, Card} from 'react-native-paper';

const Profile = () =>{
    return(
        <View style= {styles.root}>
            <LinearGradient 
            colors={["#0033ff", "#6bc1ff"]}
            style={{height:"20%"}}            
            />
            <View style={{alignItems:"center"}} >
                <Image
                style={{width:140, height:140, borderRadius:70, marginTop: -50}}
                source={{uri:"https://images.unsplash.com/photo-1528158134711-e89943f34728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"}}
                />
            </View>
            <View style={{alignItems:"center"}} >
                <Title>Ansari</Title>
                <Text>WebDev</Text>
            </View>
            <Card style={styles.mycard}>

            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    root:{
        flex:1
    },
    mycard:{
        margin:3
    },
    cardcontent:{
        flexDirection:"row"        
    }
})

export default Profile;