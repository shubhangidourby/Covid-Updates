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
                    
                
                    
            <View style={styles.textContainer}>
            <Text style={styles.textformat}>{val.state}</Text>   
            <Text style={styles.confirmStyle}>{val.confirmed}</Text>
            <Text style={styles.activeStyle}>{val.active}</Text>    
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
            <View style={styles.textContainer}>
            <Text style={styles.textformat}>STATE</Text>   
            <Text style={styles.confirmStyle}>CONFIRMED</Text>
            <Text style={styles.activeStyle}>ACTIVE</Text>    
            <Text style={styles.deathStyle}>DEATH</Text>
            <Text style={styles.recoverStyle}>RECOVERED</Text>
            <Text style={styles.text}>LAST UPDATED</Text>
            </View> 
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
            
            justifyContent:'center'
        },
        textContainer:{
            backgroundColor:'#8ea4ab',
            flexDirection:'row',
            justifyContent:'space-between'
        },
        confirmStyle:
        {
         fontSize:24,
         width:160,
         color:'#bf0a1f'    
        },
        activeStyle:
        {
         fontSize:24,
         width:160,
         color:'#20318a'    
        },
        deathStyle:
        {
         fontSize:24,
         width:160,
         color:'#630101'    
        },
        recoverStyle:
        {
         fontSize:24,
         width:160,
         color:'#1a961e'    
        },
        textformat:
        {
        width:180,
        fontSize:24,
        color:'#000'    
        },
        text:
        {
        fontSize:24,
        width:180,
        color:'#000'    
        }
    }
);