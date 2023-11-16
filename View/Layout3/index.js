
import { useState, useEffect } from 'react'; 
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View,Image,TextInput,TouchableOpacity, SafeAreaView,Pressable} from 'react-native';

const Layout3 = ({ navigation }) => {
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

    //xoa
    const DeleteNote = async (id) => {
        await fetch(`https://654bb6915b38a59f28ef965a.mockapi.io/Ap/api/user/${id}`, {
          method: "DELETE",
        })
          .then(() => {
            const newTodos = todos.filter((item) => item.id !== id);
            setTodos(newTodos);
          })
          .catch((error) => console.error(error));
      };
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

    return (
        <SafeAreaView style={styles.container}>
             <View style = {{
                 flexDirection: "row",
                 justifyContent: "space-between",
                 alignItems: "center",
                 paddingTop : 20,
            }}
            >
             <Pressable
                style={{
                    width : '10%',
                    padding : 10,
                    borderRadius : 20,
                    marginTop : 15,
                }}
                onPress={()=>{
                    navigation.navigate('Layout1')
                }}>
                  <Image
                    source={require('../../assets/Image 183.png')}
                    style={{
                        width: 15,
                        height: 15,
                    }}
                  
            />
            </Pressable>
            
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
            </View>
            <View style={{marginTop: 30 }}>
            <View style={styles.viewText}>
                    <Image source={require("../../assets/Frame.png")}
                        style={{position: "absolute", left: 12, height: "100%", width: 32}}
                        resizeMode='contain'
                    />
                    <TextInput placeholder='Search' style={styles.textIp}/>
                    </View>
                </View>
          <View style={styles.view2}>
            <ScrollView>
                    {!!todos?.length && todos?.map((todo) => {
                        return (
                            <View style={styles.todo}>
                                <TouchableOpacity 
                                  onPress={()=>{DeleteNote(todo.id)}}
                                  style={{width:'50px'}}>
                                 <Image source={require('../../assets/Frame3.png')} style={styles.checkIcon} />
                              </TouchableOpacity>
                            <Text style={styles.todoText}>{todo?.name}</Text>
                            <Image source={require('../../assets/Frame2.png')} style={styles.editIcon} />
                          </View>
                          
                        )
                    })}
                </ScrollView>
          </View>
          <View style={styles.view3}>
          <TouchableOpacity 
          onPress={() => navigation.navigate("Layout4")}
           >
            <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>
          </View>
        </SafeAreaView>
    )
}

export default Layout3

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        backgroundColor: "#fff",
        paddingHorizontal: 15, 
    },
    view1:{
        flexDirection:'row',
        alignItems:'center',
        width:'80%',
        height:50,
        top:80,
        left:20,
        borderColor:'gray',
        borderWidth:1,
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
    view2:{
        borderRadius : 15,
        width: "90%",
        left : '20px',
        paddingTop : 30,
    },
    view3:{
        width:70,
        height:70,
        top:50,
        left:160,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'skyblue',
        borderRadius:50,
    },
        // ... other styles
        todo: {
          flexDirection: 'row',
          justifyContent: 'space-between', // This will place the icons on either side of the text
          alignItems: 'center',
          padding: 10,
          marginVertical: 8,
          backgroundColor: '#F0F0F0',
          borderRadius: 10,
          // Add shadow styles etc. here
        },
        checkIcon: {
          width: 20,
          height: 20,
          marginLeft: 10,
        },
        todoText: {
          flex: 1, // This will make the text take up the rest of the space
          textAlign: 'left',
          marginLeft: 10,
        },
        editIcon: {
          width: 20,
          height: 20,
          marginRight: 10,
        },
          fabIcon: {
            fontSize: 24, // Adjust size of the plus icon
            color: '#ffffff' // Color of the plus icon
          }
})