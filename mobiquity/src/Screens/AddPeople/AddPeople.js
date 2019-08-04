/* eslint-disable prettier/prettier */
import React,{ useState } from 'react';
import {View,TextInput,StyleSheet,Alert,ActivityIndicator} from 'react-native';
import TopBar from '../../Components/TopBar';
import { useSelector, useDispatch } from 'react-redux';
import {postUserData, getUsersData} from '../../Store/actions/Users';
const AddPeople = ({navigation}) =>{
   
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    const {
        isLoading,
      } = useSelector(state => ({ isLoading:state.isLoading}));
  
      
    const style = StyleSheet.create({
        textInputStyle:{
            width:'90%',
            borderWidth: 2,
            borderColor: 'lightgrey',
            marginTop:10
        },

        textInputContainer:{
           alignItems:'center',
           width:'100%',
           marginTop:10, 
        }
    });

    const submitData = () =>{
        if (!firstName) {
            Alert.alert('Please enter first name');
            return;
          }
          if (!lastName) {
            Alert.alert('Please enter last name');
            return;
          }
          console.log("First name is",firstName);
          console.log("Last name is",lastName);

          dispatch(postUserData(firstName, lastName,userDetailsChanged));
    }

    const userDetailsChanged = () =>{
      
            Alert.alert(
                'User information saved',
                `${firstName} ${lastName} saved with post api.`,
                [
                  {text: 'OK', onPress: () => {
                    let callback = navigation.getParam("callback");
                    callback();
                    navigation.pop();
                  }},
                ],
                {cancelable: false},
              );
        
    };

    return (
        <View>
         <TopBar leftText="Back" rightText="Done" titleText="Add New User" leftClickHandler={()=>{
           navigation.pop();
         }}
         rightClickHandler={submitData}
         ></TopBar>

          <View style={style.textInputContainer}>
            <TextInput
             placeholder="First name"
             value={firstName}
             onChangeText={(text)=>{
               setFirstName(text);
             }}
             style={style.textInputStyle}

            ></TextInput>

        <TextInput
             placeholder="Last name"
             value={lastName}
             onChangeText={(text)=>{
               setLastName(text);
             }}
             style={style.textInputStyle}
            ></TextInput>

           {isLoading && <ActivityIndicator
     size="large"
     color="#C31E3C"
   />} 

          </View>

        </View>
    );
}

export default AddPeople;