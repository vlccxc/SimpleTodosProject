import React, {useState} from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

export default function App(){
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      Alert.alert('DELETE', 'Do you want to delete?', [
        {text: 'Yes'}
      ]);
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {

    if(text.length > 3){
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ];
      });
    }else{
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
        {text: 'Understood'}
      ]);
    }
  }

  return(
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        {/* header */}
        <Header/>

        {/* content */}
        <View style={styles.content}>
          {/* add to do */}
          <AddTodo submitHandler={submitHandler}/>

          {/* to form */}
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <Todos item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  }
});

// import React, {Component} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   Alert,
//   BackHandler,
//   PermissionsAndroid,
//   Image,
//   ActivityIndicator,
//   Linking,
//   RefreshControl,
//   ImageBackground,
// } from 'react-native';

// export default class App extends Component{
//   constructor(props) {
//     super(props)
  
//     this.state = {
//       username: '',
//       password: '',
//       isLogin: false
//     }
//   }

//   login = () => {
//     if(!this.state.username || !this.state.password){
//       Alert.alert("Error", 'Please input your username & password');
//     }else{
//       this.setState({
//         isLogin: true
//       });
//     }
//   }

//   backAction = () => {
//     Alert.alert('Warning', 'do you want to close this application?', [
//       {
//         text: 'cancel',
//         onPress: () => null,
//         style: 'cancel'
//       },
//       {
//         text: 'ok',
//         onPress: () => BackHandler.exitApp()
//       }
//     ])
//     return true;
//   }

//   requestCameraPermission = async() => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.CAMERA
//       )

//       if(granted == PermissionsAndroid.RESULTS.granted){
//         console.log('allow access');
//       }else{
//         console.log('doesnt allow access');
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   componentDidMount(){
//     this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.backAction);
//   }

//   componentWillUnmount(){
//     this.backHandler.remove();
//   }

//   render() {
//     const {username, password, isLogin} = this.state;

//     return (
//       <View style={styles.container}>
//         <ImageBackground
//           source={{uri: 'https://www.bing.com/th?id=OIP.4qRyvOdox_2osBuigM8x0QHaLH&w=76&h=108&c=8&rs=1&qlt=90&o=6&dpr=1.2&pid=3.1&rm=2'}}
//           style={{
//             flex: 1, 
//             resizeMode: 'cover', 
//             justifyContent: 'center',
//             alignItems: 'center'
//           }}>
//         </ImageBackground>

//         <Text>Username: </Text>
//         <TextInput 
//           style={styles.input} 
//           placeholder='enter your username...'
//           value={username}
//           onChangeText={(username) => this.setState({username})}/>
//         <Text>Password: </Text>
//         <TextInput 
//           style={styles.input} 
//           placeholder='enter your password...'
//           value={password}
//           onChangeText={(password) => this.setState({password})}
//           secureTextEntry={true}/>

//           <TouchableOpacity 
//             style={styles.button}
//             onPress={() => this.login()}>
//             <Text style={styles.text}>LOGIN</Text>
//           </TouchableOpacity>

//           {isLogin && (
//             <Text style={{marginTop: 20}}>{username} Success Login</Text>
//           )}

//           <TouchableOpacity
//             style={{paddingTop: 50}}
//             onPress={() => Linking.openURL('https://google.com')}>
//             <Image
//               source={{uri: 'https://www.bing.com/th?id=OIP.neTp253amaORNv-lj2e9-AHaE8&w=146&h=98&c=8&rs=1&qlt=90&o=6&dpr=1.2&pid=3.1&rm=2'}}
//               style={{width: '100%', height: 200}}
//               resizeMode='cover'
//             />
//           </TouchableOpacity>

//           {/* <ActivityIndicator size='small' color='#212121' style={{paddingTop: 10}}/> */}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 30,
//     paddingHorizontal: 20,
//     backgroundColor: '#fff',
//   },
//   input: {
//     padding: 10,
//     borderBottomWidth: 1,
//     marginBottom: 20,
//   },
//   button: {
//     paddingHorizontal: 30,
//     padding: 10,
//     backgroundColor: 'pink',
//     borderRadius: 10,
//   },
//   text: {
//     fontWeight: 'bold', 
//     textAlign: 'center'
//   }
// });