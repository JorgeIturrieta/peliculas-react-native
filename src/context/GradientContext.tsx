
import React, { createContext, useState } from "react";
interface ImageColors {
    primary: string ;
    secondary: string;
}
interface ContextProps {
    colors: ImageColors;
    previousColors: ImageColors;
    setMainColors: (colors: ImageColors) => void;
    setPrevMainColors: (colors: ImageColors) => void; 
    
}
export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({ children }: any) => {

    const [colors, setColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent',
    });
    const [previousColors, setPreviousColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent',
    });
    const setMainColors = (colors:ImageColors) => {
            setColors(colors);
    }
    const setPrevMainColors = (colors:ImageColors) => {
        setPreviousColors(colors);
    } 
    return (
        <GradientContext.Provider value={{
            colors,
            previousColors,
            setMainColors, 
            setPrevMainColors ,      
     
        }}>
            {children}
        </GradientContext.Provider>
    )
}