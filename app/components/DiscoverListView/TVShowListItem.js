import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import { HOST_IMAGE } from '../../constants';
import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Progress from 'react-native-progress';
import { createImageProgress } from 'react-native-image-progress';
import DateTime from '../DateTime';

export default (props) => {
 const Image = createImageProgress(FastImage);
 const imageWidth = Dimensions.get('window').width - 45;
 return (
   <View style={styles.itemImage}>
     <Image indicator={Progress.Pie} imageStyle={{borderRadius: 10}} style={{width: imageWidth, height: 450}} source={{uri: HOST_IMAGE + `w300_and_h450_bestv2` + props.backdrop_path}}/>
     <View style={styles.itemContent}>
       <Text style={styles.postTitle}>{props.name}</Text>
       <DateTime style={styles.postRelease} date={props.first_air_date} format="MMMM D, YYYY"/>
       <View style={styles.viewFavorite}>
         <MaterialIcons style={{marginTop: 2}} name="favorite" size={15} color="white" />
         <Text style={styles.postFavorite}>{props.vote_count}</Text>
       </View>
     </View>
   </View>
 );
};

const styles = StyleSheet.create({
  itemImage: {
    flex: 1,
    shadowOffset: { width: 0,  height: 10 },
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginBottom: 20,
    position: 'relative'
  },
  itemContent: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 60
  },
  postTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  postRelease: {
    color: '#FCF8F9',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold'
  },
  viewFavorite: {
    marginTop: 10,
    position: 'relative'
  },
  postFavorite: {
    position: 'absolute',
    left: 20,
    color: '#FCF8F9',
    fontSize: 15,
    fontWeight: 'bold'
  }
});
