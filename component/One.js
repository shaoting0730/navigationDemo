/**
 * Created by shaotingzhou on 2017/5/9.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class One extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: '首页',
        headerStyle:{backgroundColor:'red'},
        headerTintColor: 'white',
    })

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.welcome} onPress={()=>this.onclickBtn()} >
                    跳转
                </Text>

            </View>
        );
    }
    componentWillMount(){
        console.disableYellowBox = true;  //关闭警告提示

    }

    onclickBtn =() =>{
        this.props.navigation.navigate('OneDetails', { name: 'XXX' ,age:25})
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

