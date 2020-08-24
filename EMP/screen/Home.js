import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Card } from 'react-native-paper';

const Home = () => {
    return (
        <View>
            <Card style={styles.mycard}>
                <View style={styles.cardView}>
                <Image
                style={{width:50, height:50, borderRadius: 50/2}}
                source={{uri: "https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=821&q=80" }}  ></Image>
                <Text>Hello Thalaiva</Text>
                </View>
            </Card>
        </View>
    )
};


const styles = {
    mycard:{
        margin:5,
    },
    cardView:{        
        flexDirection:"row"
    }
};

export { Home }