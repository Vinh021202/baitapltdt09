import { useState, useEffect } from 'react'; 
import { View, Text, Pressable, Image, TextInput, SafeAreaView, Alert ,Button } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const Layout1 = ({ navigation }) => {
    
    useEffect(() => {
        navigation.setOptions({
          headerShown: false,  // Ẩn header
        });
      }, [navigation]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  async function handleLogin(){
    if(email.trim() === "" || password.trim() === ""){
        alert("Please fill all fields")
    }else{
        setShowPassword(true);
        const res = await fetch(`https://654bb6915b38a59f28ef965a.mockapi.io/Ap/api/userName?email=${email}&password=${password}`);
        const data = await res.json();
        setShowPassword(false);
        if (!data || data.length === 0){
            alert("Email hoặc tài khoản của bạn không chính xác");
        } else {
            navigation.navigate("Layout3", {email: email});
            setEmail("");
            setPassword("");
        }
    }
}

     

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1, paddingHorizontal: 20}}>

            <View style={{alignItems: "center", marginTop: 70}}>
                <Image source={require("../../assets/Data/icon.png")} style={{height: 150, width: 155}} />
                <Text style={{textAlign: "center", fontSize: 32, fontWeight: "700", marginTop: 15}}>Hello Again!</Text>
                <Text style={{textAlign: "center", fontSize: 14, fontWeight: "400", marginTop: 5, color: "#7E7E7E"}}>Log into your account</Text>
            </View>

            <View style={{marginTop: 30}}>
                <View style={{borderWidth: 1, borderColor: "#E5E5E5", borderRadius: 10, flexDirection: "row", alignItems: "center", paddingLeft: 10, marginBottom: 15}}>
                <Feather name="user" size={24} color="black" style={{marginHorizontal: 15}}/>
                    <TextInput 
                        placeholder='Enter your email address' 
                        style={{flex: 1, fontSize: 18, padding: 10}} 
                        onChangeText={text => setEmail(text)} 
                        value={email} 
                    />
                </View>

                <View style={{borderWidth: 1, borderColor: "#E5E5E5", borderRadius: 10, flexDirection: "row", alignItems: "center", paddingLeft: 10}}>
                <Feather name="key" size={24} color="black" style={{marginHorizontal: 15}} />
                    <TextInput 
                        placeholder='Enter your Password' 
                        style={{flex: 1, fontSize: 18, padding: 10}} 
                        secureTextEntry={!showPassword} 
                        onChangeText={text => setPassword(text)} 
                        value={password} 
                    />
                    <Pressable onPress={() => setShowPassword(prev => !prev)}>
                        {showPassword ? 
                            <Entypo name="eye-with-line" size={24} color="black" /> : 
                            <Entypo name="eye" size={24} color="black" />
                        }
                    </Pressable>
                </View>
            </View>

            <View style={{alignItems: "flex-end", marginTop: 5}}>
            <Pressable style={{marginTop: 30, padding: 10, backgroundColor: '#87CEFA', borderRadius: 10}}
              onPress={() => navigation.navigate("Layout2")}>
                <Text style={{textAlign: "center", fontSize: 15, fontWeight: "300", color: 'white'}}>Sign Up?</Text>
            </Pressable>
            </View>

            <Pressable style={{marginTop: 30, padding: 15, backgroundColor: '#87CEFA', borderRadius: 10}}
             onPress={handleLogin}>
                <Text style={{textAlign: "center", fontSize: 20, fontWeight: "700", color: 'white'}}>Continue</Text>
            </Pressable>

            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                <View style={{flex: 1, height: 1, backgroundColor: '#E0E0E0'}} />
                <Text style={{marginHorizontal: 10, color: '#7E7E7E'}}>or</Text>
                <View style={{flex: 1, height: 1, backgroundColor: '#E0E0E0'}} />
            </View>

            <View style={{flexDirection: "row", alignContent:"flex-start", justifyContent: 'center',  marginTop: "30px"}}>
            <Image
                source={require("../../assets/Data/google.png")}
                style={{width: "50px", height: "50px"}}
                resizeMode="contain"
            />
            <Image
                source={require("../../assets/Data/face.png")}
                style={{width: "50px", height: "50px"}}
                resizeMode="contain"
            />
                <Image source={require("../../assets/Data/apple.png")} 
                    style={{width: "50px", height: "50px"}}
                    resizeMode='contain'

                />
            </View>
        </View>
    </SafeAreaView>
);
};

export default Layout1;