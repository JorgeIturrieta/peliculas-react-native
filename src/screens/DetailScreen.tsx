import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMoviesDetails } from '../hooks/useMoviesDetails';
import MovieDetails from '../components/MovieDetails';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { };

const DetailScreen = ({ route,navigation }: Props) => {
    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { isLoading, movieFull, cast } = useMoviesDetails(movie.id);

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image
                        source={{ uri }}
                        style={styles.imagePoster}
                    />
                </View>
            </View>
            <View style={styles.marginContainer}>
                <Text style={styles.subtitle} >{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>

            {
                isLoading
                    ? <ActivityIndicator size={35} color="grey" style={{ marginTop: 20 }} />
                    : <MovieDetails movieFull={movieFull!} cast={cast} />
            }
            {/* Boton para regresar */}
            <TouchableOpacity  
                style={styles.backButton}
                onPress={()=>{navigation.pop()}}
            >
                <Icon
                    color="white"
                    name="arrow-back-outline"
                    size={50}              
                />
            </TouchableOpacity>

        </ScrollView>

    )
}
const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        // overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.9,
        shadowRadius: 8.30,
        elevation: 9,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25


    },
    imageBorder: {
        overflow: 'hidden',
        flex: 1,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25

    },
    imagePoster: {
        flex: 1,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    subtitle: {
        fontSize: 16,
        opacity: 0.8
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 30,
        left: 5
    }

});
export default DetailScreen
