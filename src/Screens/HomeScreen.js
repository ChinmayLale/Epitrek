import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = () => {
   return (
      <SafeAreaView className="w-full h-full">
         <View className="w-full h-full">
            <Text className="text-2xl text-slate-700 font-[800]">
               HomeScreen
            </Text>
         </View>
      </SafeAreaView>
   );
};

export default HomeScreen;
