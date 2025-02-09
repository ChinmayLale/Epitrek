import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Input } from 'tamagui';

const HomeScreen = () => {
   // const  
   return (
      <SafeAreaView className="w-full h-full">
         <View className="w-full h-full items-center">
            <Text className="text-2xl text-slate-700 font-[800]">
               HomeScreen
            </Text>
            <Input size="$4" borderWidth={2} width={"$20"}/>
         </View>
      </SafeAreaView>
   );
};

export default HomeScreen;
