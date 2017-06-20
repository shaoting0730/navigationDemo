/**
 * Created by shaotingzhou on 2017/5/9.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    ListView,
    AsyncStorage,
    TextInput,
    ScrollView,
    RefreshControl
} from 'react-native';
var {width,height} = Dimensions.get('window');
var dataAry = []
var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
//在static中使用this. 修改方法见:http://www.jianshu.com/p/2f575cc35780
//防止点击多次,跳转界面多次,需修改react-navigation源码.详见:https://github.com/react-community/react-navigation/pull/1348/files
export default class OneDetailsList extends Component{
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'ListView',
        headerStyle:{backgroundColor:'red'},
        headerRight:(
            <Text onPress={()=>navigation.state.params.navigatePress()}>
                点击
            </Text>
        )
    });
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        for(var i = 0;i<10;i++){
            dataAry.push(i)
        }
        this.state = {
            text:'XXXX',
            dataSource:ds.cloneWithRows(dataAry),
        };
    }
    render() {
        return (
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    onEndReached={this.onEndReached}
                />
        );
    }

    //listView的renderRow
    renderRow =(rowData,sectionID,rowID,highlightRow) =>{
        var R = parseInt(Math.random()*255)
        var G = parseInt(Math.random()*255)
        var B = parseInt(Math.random()*255)
        return(
            <View style={{flexDirection:'row',marginTop:5,marginLeft:5,borderWidth:1,marginRight:5,borderColor:'#DEDEDE',backgroundColor:'white'}}>
                <Image source={require('../image/one_selected.png')} style={{width:60,height:60,borderRadius:30,marginTop:5,marginBottom:5}}/>
                <View style={{flexDirection:'column',justifyContent:'space-around',marginLeft:5}}>
                    <Text style={{fontSize:16,color:'rgba('+R+','+G+','+B+',1.0)'}}>歌名: 彩虹彼岸</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:14,color:'#BDBDBD'}}>歌手:虚拟歌姬</Text>
                        <Text style={{fontSize:14,color:'#BDBDBD',marginLeft:10}}>专辑:react native</Text>
                    </View>
                </View>
            </View>
        )
    }

    onEndReached =() =>{
        alert(dataAry.length)
        for(var i = 0;i<10;i++){
            dataAry.push(i)
        }
        this.setState({
            dataSource:ds.cloneWithRows(dataAry),
        })
    }

    componentDidMount(){
        this.props.navigation.setParams({
            navigatePress:this.navigatePress
        })
    }

    navigatePress = () => {
        alert(this.state.text)
    }


};

var styles = StyleSheet.create({
    container: {
        flex: 1,
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
    }
});

