import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image,TextInput, SafeAreaView,Pressable , FlatList , TouchableOpacity} from 'react-native';

const Layout4 = ({ navigation }) => {
    useEffect(() => {
        navigation.setOptions({
          headerShown: false,  // Ẩn header
        });
      }, [navigation]);
      const [todos, setTodos] = useState([]);
      const getTodoData = () => {
        fetch('https://654bb6915b38a59f28ef965a.mockapi.io/Ap/api/user')
            .then(response => response.json())
            .then((json) => {
                setTodos(json);
                console.log(json)
            })
    }

    useEffect(() => {
        getTodoData();
    }, [])
      //them
      const [name, setName]=useState("");

      const addNote = (note) => {
        fetch("https://654bb6915b38a59f28ef965a.mockapi.io/Ap/api/user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name}),
        })
          .then((response) => response.json())
          .then((json) => console.log(json))
          .catch((error) => console.log(error));
      };
    return(
        <SafeAreaView style={styles.container}>
              <View style = {{
                 flexDirection: "row",
                 justifyContent: "space-between",
                 alignItems: "center",
                 paddingTop : 20,
            }}>
            
                <View style = {{
                     flexDirection: 'row',
                     alignItems: 'center',
                     padding: 10,
                     backgroundColor: 'white',
                }}>
             <Image
                    source={require('../../assets/Frame1.png')}
                    style={{
                        width: 50,
                        height: 50,
                    }}   
            />
            <View style={{
                marginLeft: 10,
            }}>
            <Text style={{
                fontSize: 22,
                fontFamily: 'Epilogue',
                fontWeight: '700',
                lineHeight: 30,
                textAlign: 'center',
            }}>
            Hi Twinkle
            </Text>
            <Text style={{
                    fontSize: 14,
                    fontFamily: 'Epilogue',
                    fontWeight: '400', // Normal weight
                    lineHeight: 22,
                    textAlign: 'center',
                    color: '#9095A0', // Assuming this is the intended color
                }}>
                    Have a great day ahead
                    </Text>
                </View>

                </View>
                <Pressable
                style={{
                    width : '10%',
                    padding : 10,
                    borderRadius : 20,
                    marginTop : 15,
                }}
                onPress={()=>{
                    navigation.navigate('Layout2')
                }}>
                  <Image
                    source={require('../../assets/Image 183.png')}
                    style={{
                        width: 15,
                        height: 15,
                    }}/>
            </Pressable>
            </View>
            <Text style={styles.text}>ADD YOUR JOB </Text>
            <View style={{marginTop: 40 }}>
            <View style={styles.viewText}>
                    <Image source={require("../../assets/Frame (2).png")}
                        style={{position: "absolute", left: 12, height: "100%", width: 32}}
                        resizeMode='contain'
                    />
                    <TextInput placeholder='input your job' style={styles.textIp} onChangeText={setName}/>
                    </View>
                </View>
                
                <View style = {styles.viewBtn}>
                <Pressable style={styles.btn} 
                onPress={() => navigation.navigate("Layout3")}>
                    <TouchableOpacity onPress={()=>addNote(name)}>
                    <Text style={styles.btnText}>FINISH </Text>
                    
              </TouchableOpacity>
            </Pressable>
            </View>
            <View style={styles.view}>
                <Image source={require('../../assets/Image 95.png') } style={{width:170,height:170}}></Image>
            </View>

            
        </SafeAreaView>
    )
}

export default Layout4

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        backgroundColor: "#fff",
        paddingHorizontal: 15, 
    },
    text: {
        paddingTop: 30,
        fontSize: 35,
        fontFamily:'Epilogue',
        fontWeight:700,
        fontFamily: 'bole',
        lineHeight:36,
        textAlign:'center',
    },
    viewText : {
        borderWidth: 1, 
        borderRadius : 10,
        backgroundColor: "#fff",
        width: "90%",
        left : '20px',
        backgroundColor: "#fff"
    },
    textIp : {
        fontSize: 18, 
        paddingVertical: 10, 
        paddingLeft: 60 ,
        color:'#9095A0',
    },
    viewBtn : {
        alignItems : "center",
        paddingHorizontal: 20 ,
        marginTop: 70
    },
    btn : {
        backgroundColor: "#00BDD6",
        width : '60%',
        padding : 10,
        borderRadius : 10,
        marginTop : 15,
        height : 44,
        alignItems : "center",
    },
    btnText : {
        alignItems : "center", 
        fontSize: 17, 
        fontWeight: "700",
         color: 'white'
    },
    view:{
        alignItems: 'center',
        marginTop: 70,
    },
})