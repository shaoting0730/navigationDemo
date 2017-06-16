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
import { NavigationActions } from 'react-navigation'
const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'One'})
    ]
})
export default class OneDetailsList extends Component{
    static navigationOptions = ({ navigation }) => ({
         header:null  //取消导航栏
    })
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        for(var i = 0;i<10;i++){
            dataAry.push(i)
        }
        this.state = {
            dataSource:ds.cloneWithRows(dataAry),
        };
    }
    backAction =()=>{
        this.props.navigation.goBack()
    }
    onclickAction =()=>{
        alert('点击了')
    }
    render() {
        return (
            <View>
                <View style={{height:64,backgroundColor:'red',flexDirection:'row',justifyContent:'space-around',alignItems:"center"}}>
                    <Text onPress={()=>this.backAction()} style={{marginTop:10}}>返回上一层</Text>
                    <Text style={{marginTop:10}}>listView</Text>
                    <Text style={{marginTop:10}} onPress={()=>this.onclickAction()}>点击</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    onEndReached={this.onEndReached}
                />
            </View>
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

