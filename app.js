import React,{ Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';


import Two from './component/Two';
import One from './component/One';
import OneDetails from './component/OneDetails'

export default class RootScene extends Component {

    render() {
        return (
            <Navigator
                onNavigationStateChange={
                    (prevState, currentState) => {
                             // 只要切换tab,push,pop,这里一定走
                             console.log(prevState)
                             console.log(currentState)

                        }
                    }
            />
        );
    }
}

const Tab = TabNavigator({
        One: {
            screen: One,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '苹果',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image
                        source={focused ?  require('./image/one_selected.png') : require('./image/one.png')}
                        style={{ width: 25, height: 25 }}
                    />
                )
            }),
        },
        Two: {
            screen: Two,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '安卓',
                tabBarIcon: ({ focused, tintColor }) => (
                    <Image
                        source={focused ? require('./image/two_selected.png') : require('./image/two.png') }
                        style={{ width: 25, height: 25 }}
                    />
                )
            }),
        },

    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#979797',
            inactiveTintColor: '#979797',
            style: { backgroundColor: '#ffffff' },
        },

    });

const Navigator = StackNavigator({
        Tab: {
            screen: Tab,

        },
        OneDetails : {
            screen: OneDetails,
        }

    });
