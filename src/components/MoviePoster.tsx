import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Movie } from '../interfaces/movieInterface';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}
const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const {navigate} = useNavigation();
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={()=>navigate('DetailScreen',movie)}
            style={{
                width,
                height,
                marginHorizontal: 2 ,
                paddingBottom:20,
                paddingHorizontal: 5
                 
                     

            }}
            
            >
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,

    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.9,
        shadowRadius: 8.30,

        elevation: 10,
    }
});
export default MoviePoster
