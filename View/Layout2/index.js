import { View, Text, Pressable, Alert, ActivityIndicator, 
   StatusBar , SafeAreaView ,TextInput  } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react'; 
import axios from 'axios';

const Layout2 = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,  // Ẩn header
    });
  }, [navigation]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = async () => {
    try {
      // Kiểm tra xem mật khẩu và mật khẩu nhập lại có khớp nhau không
      if (password !== confirmPassword) {
        alert('Lỗi Mật khẩu và mật khẩu nhập lại không khớp');
        return;
      }
  
      // Kiểm tra xem email đã tồn tại chưa
      const existingUserResponse = await axios.get('https://654bb6915b38a59f28ef965a.mockapi.io/Ap/api/userName', {
        params: {
          email: email,
        },
      });
  
      if (existingUserResponse.data.length > 0) {
        alert('Lỗi Email đã tồn tại. Vui lòng sử dụng email khác.');
        return;
      }
  
      // Nếu không có user nào có cùng email, tiếp tục đăng ký
      const signUpResponse = await axios.post('https://654bb6915b38a59f28ef965a.mockapi.io/Ap/api/userName', {
        email: email,
        password: password,
      });
  
      if (signUpResponse.status === 200) {
        // Đăng ký thành công, bạn có thể thực hiện các hành động khác ở đây
        alert('Thành công Đăng ký thành công');
        navigation.navigate('Layout1'); // Chuyển hướng đến màn hình Layout1 sau khi đăng ký thành công
      } else {
        // Xử lý khi đăng ký không thành công
        alert('Lỗi Đăng ký không thành công');
      }
    } catch (error) {
      // Xử lý lỗi kết nối hoặc lỗi khác
      console.error('Lỗi đăng ký:', error);
      alert('Lỗi Đã xảy ra lỗi, vui lòng thử lại sau');
    }
  };
  

  return (
    <View style={{flex: 1 , backgroundColor: 'white'}}>
        <StatusBar/>

        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
                <View style={{marginLeft: 15, marginTop: 15}}>
                    <Pressable                   
                        onPress={()=> navigation.navigate("Layout1")}
                    >
                        <Ionicons name="arrow-back-outline" size={28} color="black" />
                    </Pressable>
                </View>
            </View>
            
            <View style={{flex: 2, justifyContent: "center"}}>
            <Feather name="user" size={70} color="black" style={{marginHorizontal: 15,textAlign : 'center' }} />
                <Text style={{fontSize: 40, fontWeight: 'bold', textAlign: "center"}}>Sign Up</Text>
            </View>
            <View style={{flex: 7, alignItems:"center"}}>
                <View style={{flexDirection: "row", width: "90%", borderWidth: 1
                        , borderRadius: 12, alignItems: "center", marginTop: 60}}>
                            <Feather name="user" size={24} color="black" style={{marginHorizontal: 15}}/>
                            <TextInput
                                placeholder='Enter your email address'
                                style={{paddingVertical: 10, flexGrow: 1, fontSize: 16}}
                                placeholderTextColor={"#888"}
                                value={email}
                                onChangeText={setEmail}
                            />
                </View>
                <View style={{flexDirection: "row", width: "90%", borderWidth: 1, marginTop: 30
                    , borderRadius: 12, alignItems: "center",}}>
                        <Feather name="key" size={24} color="black" style={{marginHorizontal: 15}} />
                        <TextInput
                            placeholder='Enter your password'
                            secureTextEntry={true}
                            style={{paddingVertical: 10, flexGrow: 1, fontSize: 16}}
                            placeholderTextColor={"#888"}
                            value={password}
                            onChangeText={setPassword}
                        />
                </View>
                <View style={{flexDirection: "row", width: "90%", borderWidth: 1, marginTop: 30
                    , borderRadius: 12, alignItems: "center",}}>
                        <Feather name="key" size={24} color="black" style={{marginHorizontal: 15}} />
                        <TextInput
                            placeholder='Enter your confirm password'
                            secureTextEntry={true}
                            style={{paddingVertical: 10, flexGrow: 1, fontSize: 16}}
                            placeholderTextColor={"#888"}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                </View>


                <View
                    style={{width: "100%", alignItems: "center" , marginTop : 50}}
                >
                    <Pressable style={{width: "30%", alignItems: "center" ,
                     marginTop: 30, padding: 15, backgroundColor: '#87CEFA', borderRadius: 10}}
                        onPress={handleSignUp}
                        disabled={showPassword}
                    >
                        {
                            showPassword
                            ?
                            <ActivityIndicator style={{marginTop: 30,}} size="large"/>
                            :
                            <Text style={{textAlign: "center", fontSize: 20, fontWeight: "700", color: 'white'}}>Sign Up?</Text>
                        }
                    </Pressable>
                </View>
            </View>

        </SafeAreaView>
    </View>
)
};


export default Layout2;
