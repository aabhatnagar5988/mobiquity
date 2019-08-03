import React from 'react';
import {  Card, CardItem, Text, Body } from "native-base";
import {Image} from 'react-native';

type P = {
    firstName: String,
    lastName: String,
    image: String,
  };

const ListItem = ({firstName,lastName,image}:P) =>{
  return(
    <Card>
            <CardItem header bordered>
              <Text>{firstName} {lastName}</Text>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: image}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
          </Card>
  );
}

export default ListItem;