import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Ionicons} from "@expo/vector-icons"
import React from 'react';

export default function App(item:any) {
    const [select, setcheckBoxState] = React.useState(false);
    function toDate(date:any){
        var dd = date.split('-');
        var final = new Date(dd[0],dd[1] - 1 ,dd[2]);
        return(final.getDay()+'. ' + final.toLocaleString('default', { month: 'short' }) + ' ' + final.getFullYear());
    }
        function Ich(){
        if (select) {
            return (
                <View>
                    {item.Marks.map((item:any) => (
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingTop:1,paddingRight:5}}>
                            <View style={{backgroundColor:"#EB7221",height:55,width:55,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:30,color:'white'}}>{item.Value}</Text></View>
                            <Text>{item.Name}</Text>
                            <View style={{flexDirection:'column'}}>
                                <Text style={{fontSize:20}}>{toDate(item.Date)}</Text>
                                <Text style={{textAlign:'center',color:'#EB7221'}}>Váha: {item.Weight}</Text>
                            </View>
                        </View>
                    ))
                }
            </View>
            );
        }
        else{
            return(<View></View>)
        }
    }
return (
    <View style={styles.shadow}>
        <View style={styles.container}>
            <Ionicons color={'white'} size={27} style={{backgroundColor:"#EB7221",padding:5,borderRadius:12,marginLeft:10}} name="calculator-outline"></Ionicons>
            <View style={{flexDirection:'column',marginLeft:20}}>
                <Text style={{fontSize:16,fontWeight:'600'}}>{item.Name}</Text>
                <Text>Průměr 2.00</Text>
            </View>
            <View style={{marginLeft:'auto',flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text style={{paddingTop:30}}>Známky: {item.Marks.length}</Text>
                <TouchableOpacity  onPress={()=>{select?setcheckBoxState(false):setcheckBoxState(true)}}>
                    <Ionicons name='chevron-up-outline' color="#EB7221" size={20}></Ionicons>
                </TouchableOpacity>
            </View>
        </View>
        {Ich()}
    </View>

);
}

const styles = StyleSheet.create({
container: {
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    padding:5,
    backgroundColor:'white',
},
shadow:{
    margin:3,
    width:350,
    borderRadius:20,
    overflow:'hidden',
    shadowColor:'black',
    shadowOffset:{height:1,width:5},
    shadowRadius:20,
    shadowOpacity:0.25
}
});
