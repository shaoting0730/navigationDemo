/**
 * Created by shaotingzhou on 2017/5/9.
 */
/**
 * Created by shaotingzhou on 2017/5/9.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class OneDetails extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: '详情',
        headerStyle:{backgroundColor:'cyan'},
        headerTintColor: 'red',
        headerLeft:(
            <Text onPress={()=>navigation.goBack()}>回到上一页</Text>
        ),
        headerTitleStyle:{alignSelf:'center'} //安卓title的位置

    })
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    传过来的参数是: {this.props.navigation.state.params.age} + {this.props.navigation.state.params.name}
                </Text>
                <Text>测试下FlatList 和 ListView性能</Text>
                <Text onPress={()=>this.onclickBtn()}>点击再跳转FlatList</Text>
                <Text onPress={()=>this.onclickBtn1()}>点击再跳转ListView</Text>
            </View>
        );
    }
    onclickBtn =() =>{
        this.props.navigation.navigate('OneDetailsFlat')
    }
    onclickBtn1 =() =>{
        this.props.navigation.navigate('OneDetailsList')
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

