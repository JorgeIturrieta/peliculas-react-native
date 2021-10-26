import { useRef } from 'react'
import { Animated } from 'react-native'

export default function useFade() {
    const opacity = useRef(new Animated.Value(0)).current;
    const fadeIn = (callback?:Function) => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }
        ).start(()=>callback? callback():null);
    }
    const fadeOut = (duration:number=300) => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration,
                useNativeDriver: true
            }
        ).start();
    }



    return {
        fadeIn,
        fadeOut,
        opacity,
    }


}
