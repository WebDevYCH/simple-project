import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import Button from '../components/Button'

export default function RegisterScreen() {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  return (
    <View style={styles.container}>
      <Image
        style={{ width:152.5,height:8,marginTop: 50,resizeMode: 'stretch',}}
        source={require('../../img/star.svg')}
      />
      <Header>LOGO</Header>
      <Text style={styles.login}>Login</Text>
      <View style={styles.buttongroup}>
        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        <Button
          mode="contained"
          onPress={() => {}}
        >
          SUBMIT
        </Button>
      </View>
      <View style={styles.textgroup}>
        <Text >Register Free</Text>
        <Text >Forgot Password</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight:900,
    fontSize:32,
    
  },
  buttongroup:{
    width:'85%'
  },
  textgroup:{
    width:'85%',
    flexDirection:'row',
    justifyContent:'space-between',
    fontSize:12,
    marginTop:15,   
    marginBottom:80,                   
  },
  login:{
    width:'100%',
    textAlign:'left',
    marginTop:20,
    marginLeft:52,
    fontSize:12,
    fontWeight:700,
    justifyContent:'flex-start'
  }
});
