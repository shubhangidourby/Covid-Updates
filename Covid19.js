import React, { Component } from 'react';  
import { StyleSheet,View, Button, Alert,Text, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default class Covid19 extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            isLoading:true ,
            dataSource:null,
        };
    }
    componentDidMount()
        {
            return fetch('https://api.covid19india.org/data.json')
            .then((response)=>response.json())
            .then((responseJson)=>{
                this.setState({
                    isLoading:false,
                    dataSource:responseJson.statewise
                })
                console.log(this.state.dataSource);
            })
        }
    render(){
            if(this.state.isLoading==true)
            {
               return(
                   <View>
                       <ActivityIndicator/>
                   </View>
               ); 
            }
            else
            {
          let statewise=this.state.dataSource.map((val,key)=>{
            return(
                <View key={key}>
                    <View >
            <Text style={styles.textformat}>{val.state}</Text>    
                    </View>
                    <View style={styles.textContainer}>
            <Text style={styles.confirmStyle}>{val.confirmed}</Text>
            <Text style={styles.activeStyle}>{val.active}</Text>    
                    </View>
                <View style={styles.textContainer}>
            <Text style={styles.deathStyle}>{val.deaths}</Text>
            <Text style={styles.recoverStyle}>{val.recovered}</Text>
            <Text style={styles.text}>{val.lastupdatedtime}</Text>  
                </View>
                </View>
            );
          });
        
        return(
            <ScrollView>
                <ScrollView  horizontal>
            <View style={styles.container}>
                {statewise}
             </View>
             </ScrollView>
             </ScrollView>
        );
    }
}
}
const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            margin:10,
            justifyContent:'center'
        },
        textContainer:{
            backgroundColor:'#8ea4ab',
            flexDirection:'row',
            justifyContent:'space-between'
        },
        confirmStyle:
        {
         fontSize:30,
         color:'#bf0a1f'    
        },
        activeStyle:
        {
         fontSize:30,
         color:'#20318a'    
        },
        deathStyle:
        {
         fontSize:30,
         color:'#630101'    
        },
        recoverStyle:
        {
         fontSize:30,
         color:'#1a961e'    
        },
        textformat:
        {
        fontSize:36,
        color:'#000'    
        },
        text:
        {
        fontSize:30,
        color:'#000'    
        }
    }
);