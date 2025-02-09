import {SafeAreaView} from 'react-native-safe-area-context';
import { Button, Form, H4, Spinner } from 'tamagui';
import {useState} from "react";
import {Text, View, StyleSheet} from 'react-native';


export const LoginScreen = () => {
    const [status, setStatus] = useState('off');

    console.log("LoginScreen");
    return (
        <SafeAreaView className="flex-1 w-full h-full items-center justify-center">
           <View className="w-[90%] h-[80%] items-center justify-center bg-slate-900">
               <Form
                   alignItems="center"
                   minWidth={300}
                   gap="$2"
                   onSubmit={() => setStatus('submitting')}
                   borderWidth={1}
                   borderRadius="$4"
                   backgroundColor="$background"
                   borderColor="$borderColor"
                   padding="$8"
               >
                    <H4>Login</H4>
               </Form>
           </View>

        </SafeAreaView>
    );
};