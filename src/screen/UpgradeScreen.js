import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity  } from 'react-native';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import Buttons from '../components/Button';
import Svg, { Defs, Circle, Use, ClipPath, G, Path } from "react-native-svg"
import { theme } from '../core/theme';
import { Divider } from 'react-native-paper';
// import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

export default function UpgradeScreen() {
  const [firstname, setFirst] = useState({ value: '', error: '' })
  const [lastname, setLast] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [credit, setCredit] = useState({ value: '', error: '' })
  _onChange => form => console.log(form);
  return (
    <View style={styles.container}>
      <Header>LOGO</Header>
      <Image style={styles.starstyle} source={require('../img/Star.svg')}/>
      <Text style={styles.graph}>Pricing graphic</Text>
      <Text style={styles.login}>Some instructions and/or information</Text>
      <View style={styles.buttongroup}>
        <TextInput
          label="First Name"
          returnKeyType="next"
          value={firstname.value}
          onChangeText={(text) => setFirst({ value: text, error: '' })}
          error={!!firstname.error}
          errorText={firstname.error}
        />
        <TextInput
          label="Last Name"
          returnKeyType="done"
          value={lastname.value}
          onChangeText={(text) => setLast({ value: text, error: '' })}
          error={!!lastname.error}
          errorText={lastname.error}
        />
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
          label="Credit Card Number"
          returnKeyType="done"
          value={credit.value}
          onChangeText={(text) => setCredit({ value: text, error: '' })}
          error={!!credit.error}
          errorText={credit.error}
          secureTextEntry
        />
        
       { /* CreditCardInput can be used only real device not web*/}

        {/* <CreditCardInput onChange={this._onChange} /> */}
        <Buttons
          mode="contained"
          onPress={() => {}}
        >
          SUBMIT
        </Buttons>
      </View>
      <Text style={styles.login}>Worried about your privacy?</Text>
      <Text style={styles.answer}>Quisque placerat facilisis egestas cillum dolore. Cum sociis natoque penatibus et magnis dis.</Text>
      <View style={styles.walletgroup}>
        <View style={styles.walletheader}>
          <Svg
            height={30}
            viewBox="-27 24 100 100"
            width={30}
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <Defs>
              <Circle cx={23} cy={74} id="a" r={50} />
            </Defs>
            <Use fill="#F5EEE5" overflow="visible" xlinkHref="#a" />
            <ClipPath id="b">
              <Use overflow="visible" xlinkHref="#a" />
            </ClipPath>
            <G clipPath="url(#b)">
              <Defs>
                <Path
                  d="M36 95.9c0 4 4.7 5.2 7.1 5.8 7.6 2 22.8 5.9 22.8 5.9 3.2 1.1 5.7 3.5 7.1 6.6v9.8H-27v-9.8c1.3-3.1 3.9-5.5 7.1-6.6 0 0 15.2-3.9 22.8-5.9 2.4-.6 7.1-1.8 7.1-5.8V85h26v10.9z"
                  id="c"
                />
              </Defs>
              <Use fill="#E6C19C" overflow="visible" xlinkHref="#c" />
              <ClipPath id="d">
                <Use overflow="visible" xlinkHref="#c" />
              </ClipPath>
              <Path
                clipPath="url(#d)"
                d="M23.2 35h.2c3.3 0 8.2.2 11.4 2 3.3 1.9 7.3 5.6 8.5 12.1 2.4 13.7-2.1 35.4-6.3 42.4-4 6.7-9.8 9.2-13.5 9.4h-.6c-3.7-.2-9.5-2.7-13.5-9.4-4.2-7-8.7-28.7-6.3-42.4 1.2-6.5 5.2-10.2 8.5-12.1 3.2-1.8 8.1-2 11.4-2h.2z"
                fill="#D4B08C"
              />
            </G>
            <Path
              d="M22.6 40c19.1 0 20.7 13.8 20.8 15.1 1.1 11.9-3 28.1-6.8 33.7-4 5.9-9.8 8.1-13.5 8.3h-.5c-3.8-.3-9.6-2.5-13.6-8.4-3.8-5.6-7.9-21.8-6.8-33.8C2.3 53.7 3.5 40 22.6 40z"
              fill="#F2CEA5"
            />
          </Svg>
          <Text style={styles.mywallet}>My wallet</Text>
        </View>
        <Text style={styles.providorhelp}>If you don't have a <Text style={styles.wallet}>wallet</Text> yet, you can select a provider and creat one now.</Text>
        <View style={styles.walletlist}>
           <View style={styles.walletcomponent}>
              <View  style={styles.midmask}>
                 <Image style={styles.metamask} source={require('../img/metamask.svg')}/>
                 <Text style={styles.mywallet}>MetaMask</Text>
              </View>
              <TouchableOpacity style={styles.metabuttonstyle} onPress={() => {}}> 
                 <Text>Popular</Text>
              </TouchableOpacity> 
            </View>
            <View style={styles.walletcomponent}>
              <View  style={styles.midmask}>
                 <Image style={styles.metamask} source={require('../img/coinbase.svg')}/>
                 <Text style={styles.mywallet}>Coinbase Wallet</Text>
              </View>
              {/* <TouchableOpacity style={styles.buttonstyle} onPress={() => {}}> 
                 <Text>Popular</Text>
              </TouchableOpacity>  */}
            </View>
            <View style={styles.walletcomponent}>
              <View  style={styles.midmask}>
                 <Image style={styles.metamask} source={require('../img/walletconnect.svg')}/>
                 <Text style={styles.mywallet}>WalletConnect</Text>
              </View>
              {/* <TouchableOpacity style={styles.buttonstyle} onPress={() => {}}> 
                 <Text>Popular</Text>
              </TouchableOpacity>  */}
            </View>
            <View style={styles.walletcomponent}>
              <View  style={styles.midmask}>
                 <Image style={styles.metamask} source={require('../img/phantom.jpg')}/>
                 <Text style={styles.mywallet}>Phantom</Text>
              </View>
              <TouchableOpacity style={styles.buttonstyle} onPress={() => {}}> 
                 <Text>Solana</Text>
              </TouchableOpacity> 
            </View>
            <View style={styles.walletcomponent}>
              <View  style={styles.midmask}>
                 <Image style={styles.metamask} source={require('../img/glow.jpg')}/>
                 <Text style={styles.mywallet}>Glow</Text>
              </View>
              <TouchableOpacity style={styles.buttonstyle} onPress={() => {}}> 
                 <Text>Solana</Text>
              </TouchableOpacity> 
            </View>
            <Text style={styles.more}>
              Show more options
            </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  walletgroup:{
    marginTop:10,
     width:'90%',
     borderColor: theme.colors.bordercolor,
     borderWidth: 1,
     shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 1,
  },
  wallet:{
    color:theme.colors.blue,
    fontSize:13,
    fontWeight:700
  },
  walletcomponent:{
    borderBottomColor: theme.colors.bordercolor, 
    borderBottomWidth:2, 
    paddingHorizontal:20,
    width:'100%',
    paddingVertical:20,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  midmask:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
  },
  more:{
    paddingVertical:10,
    paddingHorizontal:'auto', 
    textAlign:'center',
    fontSize:20
  },
  metabuttonstyle:{
    width: 80,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: theme.colors.blue,
    color:theme.colors.white
  },
  buttonstyle:{
    width: 80,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: theme.colors.greybackgroundcolor,
    color:theme.colors.white
  },
  walletlist:{
    marginHorizontal:'auto',
    width:'85%',
    borderColor: theme.colors.bordercolor,
    borderWidth: 2,
    borderRadius:15,
  }, 
  metamask:{
    width:22,
    height:20,
  },
  container: {
    paddingBottom:50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight:900,
    fontSize:32,
    paddingBottom:50,
  },
  buttongroup:{
    width:'85%'
  },
  walletheader:{
    borderBottomColor:theme.colors.bordercolor,
    borderBottomWidth: 2,
    width:'100%',
    flexDirection:'row',
    paddingLeft:10,
    alignItems:'center',
    fontSize:12,
    marginTop:15,   
    paddingBottom:20,                   
  },
  graph:{
    position:'absolute',
    top:260,
    fontSize:12,
    fontWeight:700,
    justifyContent:'flex-start'
  },
  login:{
    width:'87%',
    textAlign:'left',
    marginTop:20,
    fontSize:12,
    fontWeight:700,
    justifyContent:'flex-start'
  },
  providorhelp:{
    width:'100%',
    textAlign:'left',
    marginVertical:20,
    paddingHorizontal:10,
    fontSize:12,
    fontWeight:700,
    justifyContent:'flex-start'
  },
  mywallet:{
    width:'87%',
    textAlign:'left',
    paddingLeft:20,
    fontSize:12,
    fontWeight:700,
    justifyContent:'flex-start'
  },
  answer:{
    width:'87%',
    textAlign:'left',
    marginTop:20,
    fontSize:12,
    fontWeight:400,
    justifyContent:'flex-start',
    marginBottom:20
  },
  starstyle:{
    marginTop:110,
    width: 300,
    height: 300,
  }
});
