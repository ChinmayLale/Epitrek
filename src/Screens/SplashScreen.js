import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
   View,
   Text,
   SafeAreaView,
   TouchableOpacity,
   StyleSheet,
   StatusBar,
} from 'react-native';
import FastImage from 'react-native-fast-image';

const SplashScreen = () => {
   const navigation = useNavigation();
   return (
      <SafeAreaView style={styles.container}>
         <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle="light-content"
         />

         <View style={[styles.innerContainer]}>
            <FastImage
               style={styles.image}
               source={{uri: 'https://picsum.photos/800/1200'}}
            />

            <TouchableOpacity
               style={styles.button}
               onPress={() => {
                  navigation.navigate('Home');
               }}>
               <Text>Click Here</Text>
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   innerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
   },
   image: {
      width: '100%',
      height: '100%',
      position: 'absolute', // Make the image cover the entire screen
      top: 0,
   },
   button: {
      position: 'absolute',
      bottom: 20,
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 5,
   },
});

export default SplashScreen;
