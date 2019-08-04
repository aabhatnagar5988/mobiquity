/* eslint-disable prettier/prettier */
import React from 'react';
import { Header, Left, Body, Right, Button, Title, Text,Icon } from 'native-base';
import {Image,View} from 'react-native';
import backButton from '../../assets/back_white.png';

type P = {
    leftText: String,
    titleText: String,
    rightText: String,
    rightClickHandler:Any,
    leftClickHandler:Any,
  };

const TopBar = ({leftText,titleText,rightText,rightClickHandler,leftClickHandler}:P) =>{
  return(
     <View style={{width:'100%'}}> 
    <Header>
    {leftText && <Left>
        <Button transparent onPress={leftClickHandler}>
      <Image
        source={backButton}
        style={{width:20, height:20 }}
       ></Image>
       </Button>
    </Left>}

    <Body>
      <Title>{titleText}</Title>
    </Body>
    <Right>
      <Button hasText transparent onPress={rightClickHandler}>
        <Text>{rightText}</Text>
      </Button>
    </Right>
  </Header>
  </View>
  );
}

export default TopBar;