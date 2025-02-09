import React from 'react';
import { SafeAreaView, TouchableOpacity, StatusBar, View } from 'react-native';
import { Text } from 'tamagui';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

const SplashScreen = () => {
   const navigation = useNavigation();

   return (
      <SafeAreaView className="flex-1">
         <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle="light-content"
         />

         <View className="flex-1 justify-center items-center bg-black">
            <FastImage
               style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 0 }}
               source={{ uri: 'https://picsum.photos/800/1200' }}
               resizeMode={FastImage.resizeMode.cover}
            />

            <View className="absolute flex-1 justify-center items-center z-10 w-full">
               <Text className="text-white text-3xl">Welcome to My App</Text>

               <TouchableOpacity
                  onPress={() => navigation.navigate('Home')}
                  className="absolute bottom-0 px-2 py-4 bg-white rounded-lg w-[50%] items-center">
                  <Text className="text-black text-lg">Get Started</Text>
               </TouchableOpacity>
            </View>
         </View>
      </SafeAreaView>
   );
};

export default SplashScreen;
