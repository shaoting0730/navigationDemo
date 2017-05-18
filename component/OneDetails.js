/**
 * Created by shaotingzhou on 2017/5/9.
 */
/**
 * Created by shaotingzhou on 2017/5/9.
 */
/**
 * Created by shaotingzhou on 2017/5/9.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
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
    })
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    传过来的参数是: {this.props.navigation.state.params.age} + {this.props.navigation.state.params.name}
                </Text>

            </View>
        );
    }
    componentWillMount(){

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

