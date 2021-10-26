import React from 'react'
import { useRef } from 'react'
import { Button } from 'react-native';
import { View, Text, Animated } from 'react-native'
import useFade from '../hooks/useFade';

const FadeScreen = () => {
    const {opacity,fadeIn,fadeOut} = useFade();
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'grey',
            justifyContent: 'center' ,
           alignItems: 'center'
        }}
        >
            <Animated.View  
                style={{
                    backgroundColor:'#084F6A',
                    width:150,
                    height:150,
                    borderColor: 'white',
                    borderWidth: 8,
                    opacity,
                    marginBottom:10,
                }}
            />
            <Button
                title="FadeIn"
                onPress={()=>fadeIn()}
            />
             <Button
                title="FadeOut"
                onPress={()=>fadeOut()}
            />
        </View>
    )
}

export default FadeScreen
