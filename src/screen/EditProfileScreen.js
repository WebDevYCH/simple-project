import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text,Picker, View,ScrollView,Dimensions,TouchableOpacity,Image } from 'react-native';
import Header from '../components/Header';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { FlatGrid } from 'react-native-super-grid';
import { theme } from '../core/theme';
import TextInput from '../components/TextInput';
import Button from '../components/Button'

export default function EditProfileScreen({navigation}) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [selectedValue, setSelectedValue] = useState('Select');
  const [password, setPassword] = useState({ value: '', error: '' })
  const screenWidth = Math.round(Dimensions.get('window').width);
  const find = ["Egypt", "Canada", "Australia", "Ireland"]
  return (
    <View style={styles.container}>
      <Header>LOGO</Header>
          <ScrollView style={styles.container1}>
            <Text style={styles.explore}>Explore Results</Text>
            <FlatGrid
              itemDimension={100}
              fixed={true}
              data={[1,1,1,1,1,1]}
              style={styles.gridView}
               staticDimension={screenWidth*0.9}
              //  fixed
              spacing={10}
              renderItem={({ item }) => (
                <Image style={styles.userphoto} source={require('../img/uploadimage.svg')} />
              )}
            />
            <Text style={styles.looking}>Looking for</Text>
            <Picker
              selectedValue={selectedValue}
              style={styles.pickerStrategic}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Select" value="java" />
            </Picker>

            <Text style={styles.looking}>Display Name</Text>
            <View style={styles.buttongroup}>
              <TextInput
                label=""
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="name"
                textContentType="name"
                keyboardType="name-address"
              />
            </View>

            <Text style={styles.looking}>Description</Text>
            <View style={styles.buttongroup}>
              <TextInput
                label=""
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                multiline={true}
                numberOfLines={5}
                autoCompleteType="name"
                textContentType="name"
                keyboardType="name-address"
              />
            </View>

            <Text style={styles.looking}>Gender</Text>
            <View style={styles.Gendergroup}>
              <TouchableOpacity style={styles.Interestsstyle} onPress={() => {}}> 
                <Text >Male</Text>
              </TouchableOpacity> 
              <TouchableOpacity style={styles.Interestsstyle} onPress={() => {}}> 
                <Text >Female</Text>
              </TouchableOpacity> 
            </View>

            <Text style={styles.looking}>Age</Text>
            <View style={styles.buttongroup}>
              <TextInput
                label=""
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="name"
                textContentType="name"
                keyboardType="name-address"
              />
            </View>

            <Text style={styles.looking}>Zodiac Sign</Text>
            <View style={styles.buttongroup}>
              <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                <Picker.Item label="Select" value="java" />
              </Picker>
            </View>

            <Text style={styles.looking}>City</Text>
            <View style={styles.buttongroup}>
              <TextInput
                label=""
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="name"
                textContentType="name"
                keyboardType="name-address"
              />
            </View>

            <Text style={styles.looking}>Education</Text>
            <View style={styles.buttongroup}>
              <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                <Picker.Item label="Select" value="java" />
              </Picker>
            </View>

            <Text style={styles.looking}>Profession</Text>
            <View style={styles.buttongroup}>
              <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                <Picker.Item label="Select" value="java" />
              </Picker>
            </View>

            <Text style={styles.looking}>Annual Income</Text>
            <View style={styles.buttongroup}>
              <TextInput
                label=""
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="name"
                textContentType="name"
                keyboardType="name-address"
              />
            </View>

            <Text style={styles.looking}>Nationality</Text>
            <View style={styles.buttongroup}>
              <TextInput
                label=""
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="name"
                textContentType="name"
                keyboardType="name-address"
              />
            </View>

            <Text style={styles.looking}>Ethnicity</Text>
            <View style={styles.buttongroup}>
              <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                <Picker.Item label="Select" value="java" />
              </Picker>
            </View>

            <Text style={styles.looking}>Height</Text>
            <View style={styles.Gendergroup}>
              <Picker
                selectedValue={selectedValue}
                style={styles.midpicker}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                <Picker.Item label="Select" value="java" />
              </Picker>
              <Picker
                selectedValue={selectedValue}
                style={styles.midpicker}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                <Picker.Item label="Select" value="java" />
              </Picker>
            </View>
            <View style={styles.buttongroup}>
              <TextInput
                label=""
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="name"
                textContentType="name"
                keyboardType="name-address"
              />
            </View>

            <Text style={styles.looking}>Religion</Text>
            <View style={styles.buttongroup}>
              <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                <Picker.Item label="Select" value="java" />
              </Picker>
              <Button
                mode="contained"
                onPress={() => {}}
              >
                SAVE PROFILE 
              </Button>
              <Button
                mode="contained"
                onPress={() => {}}
              >
                SAVE PROFILE
              </Button>
              <Button
                mode="contained"
                onPress={() => {}}
              >
                DELETE PROFILE
              </Button>
            </View>
          </ScrollView>
          
    </View>
  );
}

const styles = StyleSheet.create({
  buttongroup:{
    width:'94%',
    marginHorizontal:'auto',
    marginBottom:20,
  },
  buttonStyle:{
    borderWidth:2,
    borderRadius:5,
    color:theme.colors.primary,
    marginBottom:20,
  },
  dropdownStyle:{
    borderWidth:2,
    borderRadius:5,
    fontSize:1,
    color:theme.colors.primary
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight:900,
    fontSize:32,
    
  },
  Gendergroup:{
    marginTop:10,
    width:'90%',
    marginHorizontal:'auto',
    display:'flex',
    flexDirection:"row",
    justifyContent:'space-between',
    marginBottom:20,
  },
  buttonstyle:{
    width: '44%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: theme.colors.buttongreycolor,
    color: theme.colors.white,

    fontSize:15,
  },
  midpicker: {
    width: '45%',
    marginBottom: 10,
    height: 50,
    borderColor: theme.colors.primary,
    paddingHorizontal: 8,
    fontSize:18,
  },
  picker: {
    marginHorizontal:'auto',
    width: '100%',
    marginBottom: 10,
    height: 50,
    borderColor: theme.colors.primary,
    paddingHorizontal: 8,
    fontSize:18,
  },
  pickerStrategic: {
    marginHorizontal:'auto',
    width: '95%',
    marginBottom: 10,
    height: 50,
    borderColor: theme.colors.primary,
    paddingHorizontal: 8,
    fontSize:18,
  },
  Interestsstyle:{
    width: '44%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: theme.colors.white,
    color:theme.colors.black,
    fontSize:15,
    borderColor: theme.colors.black,
    borderWidth:1,
  },
  userphoto:{ 
    borderRadius: 5,
    width:100,
    height:100,
  },
  container1: { 
    marginHorizontal:'auto',
    paddingTop:20+getStatusBarHeight(),
    paddingLeft:10,
    paddingBottom:100
  },
  looking:{
    width:'94%',
    textAlign:'left',
    fontSize:12,
    fontWeight:700,
    justifyContent:'flex-start',
    marginHorizontal:'auto',
    marginBottom:10,
  },
  explore:{
    width:'94%',
    textAlign:'left',
    fontSize:12,
    fontWeight:700,
    marginTop:70 + getStatusBarHeight(),
    justifyContent:'flex-start',
    marginHorizontal:'auto',
    marginBottom:20,
  }
});
