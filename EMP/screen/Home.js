import React from 'react';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import { Card, FAB } from 'react-native-paper';

const Home = () => {
    const data = [
        {id:1, name: "Ansari", position: "WebDev"},
        {id:2, name: "Misbahi", position: "Auditor"},
        {id:3, name: "Fasla", position: "MLDev"},
        {id:4, name: "Smiley", position: "Nothing"},

    ]
    const renderList = ((item)=> {
        return(
            <Card style={styles.mycard} key={item.id}>
                <View style={styles.cardView}>
                <Image
                style={{width:50, height:50, borderRadius: 30}}
                source={{uri: "https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=821&q=80" }}  ></Image>
                    <View style={{marginLeft:10}}>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text>{item.position}</Text>
                    </View>
                </View>
            </Card>
        )
    })
    return (
        <View>
            {/* {Item} */}
            <FlatList 
             data ={data}
             renderItem={({item})=> {
                 return renderList(item);
             }}
             keyExtractor={item => `${item.id}`}
             />
             <FAB
             style = {styles.fab}
             small = {false}
             icon = "plus"
             theme={{colors:{accent: "#006aff"}}}
             onPress={()=> console.log('pressed')}
             />
        </View>
    )
};


const styles = {
    mycard:{
        margin:5,
    },
    cardView:{        
        flexDirection:"row",
        padding: 6
    },
    text:{
        fontSize:20
    },
    fab:{
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
};

export { Home }