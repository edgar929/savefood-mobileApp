import React from 'react';
import {Text,View,StyleSheet,Image,TouchableOpacity,ScrollView,Dimensions,FlatList} from 'react-native';
import {Icon,withBadge} from 'react-native-elements';
import {colors,parameters} from '../global/styles';
import {restaurantsData} from '../global/Data';

const MyAccountScreen = () => {
    return (
        <View style={styles.container}>
           <Text>MY account</Text>  
        </View>
    )
}
const styles = StyleSheet.create({
});

export default MyAccountScreen;