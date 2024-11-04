import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, TouchableOpacity, ToastAndroid} from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const InputBox = ({label, onChangeText}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1}}  onChangeText={onChangeText}/>
        </View>
    )
}

const MyApp = ()=> {
  // let username = "";
  // let pw = "";
    const [username, setUsername] = useState('');
    const [pw, setPw] = useState('');
    const [type, setType] = useState('');


    return (
      <View style = {{padding:20, paddingTop:20}}>

           <Text style={{paddingTop:50}}>User Type:</Text>
          <RNPickerSelect
              onValueChange = {(value)   => setType(value) }
              items={[
                      {label: 'Admin', value:'Admin'},
                  {label: 'Guest', value:'Guest'}
                      ]}
              />
          {/*EXERCISE 1A*/}
        {/*<Text>Password:</Text>*/}
        {/*<TextInput style={  {borderWidth: 1}} />*/}

          {/*Exceracise 1G*/}
          <InputBox label="User Name:" onChangeText={(text) => setUsername(text)}/>
          <InputBox label="Password:" onChangeText={(text) => setPw(text)}/>
          <TouchableOpacity onPress={() =>
          ToastAndroid.show('welcome'+' '+type+' '+ username, ToastAndroid.SHORT)}>
              <Text>LOG IN</Text>
          </TouchableOpacity>
          <Text>{pw}</Text>


          {/*<Text>Username:</Text>*/}

          {/*<TextInput style={  {borderWidth: 1}}*/}
          {/*onChangeText={(text) => setUsername(text)}*/}
          {/*/>*/}

          {/*<Text>Password:</Text>*/}

          {/*<TextInput style={  {borderWidth: 1}}*/}
          {/*onChangeText={(text) => setPw(text)}*/}
          {/*/>*/}

          {/*<TouchableOpacity onPress={() =>ToastAndroid.show(pw, ToastAndroid.SHORT)}>*/}
          {/*    <Text>LOG IN</Text>*/}
          {/*</TouchableOpacity>*/}




          {/*/!*Exercise 1C and 1D*!/*/}
          {/*<Button title="Log in"*/}
          {/*onPress = {() => Alert.alert('Welcome!')}/>*/}

          {/*/!*exercise 1E*!/*/}

          {/*<TouchableOpacity*/}
          {/*    onPress = {() => Alert.alert('Welcome!')}>*/}
          {/*    <Text>LOG IN</Text>*/}
          {/*</TouchableOpacity>*/}

          {/*/!*Exercise 1F*!/*/}

          {/*<TouchableOpacity*/}
          {/*    onPress = {() => ToastAndroid.show('Welcome!',ToastAndroid.SHORT)}>*/}
          {/*    <Text>LOG IN</Text>*/}
          {/*    </TouchableOpacity>*/}



      </View>
  )
}

export default MyApp;
