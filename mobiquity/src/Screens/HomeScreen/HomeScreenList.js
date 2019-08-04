/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { View,FlatList,ActivityIndicator,Image } from "react-native";
import {getUsersData} from '../../Store/actions/Users';
import { useSelector, useDispatch } from 'react-redux';
import ListItem from '../../Components/ListItem';
import TopBar from '../../Components/TopBar';
import {Screens} from '../../Constants/NavConstants';


var pageNumber = 1;

const HomeScreenList = ({navigation}) =>{
  const dispatch = useDispatch();
    const {
      users,
      isLoading,
      total_pages
    } = useSelector(state => ({ users: state.users, isLoading:state.isLoading,total_pages:state.totalPages }));
  
    const loadUsers = () => {
      pageNumber = 1;
      dispatch(getUsersData(pageNumber));
    };

    const loadMoreUsers = () => {
      pageNumber = pageNumber+1;
      if(pageNumber<=total_pages)
       dispatch(getUsersData(pageNumber));
    };

    useEffect(loadUsers, []);

    const renderFooter = () =>{
      if(isLoading){
        return (
   <ActivityIndicator
     size="large"
     color="#C31E3C"
   />);
 
   }
   else 
     return null;
    }

    const addNewUser = () =>{
      navigation.navigate(Screens.AddForm,{
        callback:loadUsers
      });
    }

  return (<View style={{alignItems:'center', flex:1}}>
    <TopBar titleText="Mobiquity" rightText = "Add user" rightClickHandler = {addNewUser}></TopBar>
    <View style={{width:'90%', height:'90%'}}>
    <FlatList
        data={users}
        renderItem={({ item }) => (
          <ListItem firstName={item.first_name} lastName={item.last_name} image={item.avatar} />
        )}
        onEndReached={loadMoreUsers}
        onEndReachedThreshold={0.01}
        keyExtractor={(item, index) => `${index}`}
        ListFooterComponent={renderFooter}
      />

</View>
  </View>
  );
}

export default HomeScreenList;
