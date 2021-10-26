import React, { useContext } from 'react';
import Carousel from 'react-native-snap-carousel';
import { View, ActivityIndicator, Dimensions, ListRenderItemInfo, ScrollView } from 'react-native';

import MoviePoster from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ImageColors from 'react-native-image-colors';
import { Movie } from '../interfaces/movieInterface';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';
import { useEffect } from 'react';

const { width: windowWidth } = Dimensions.get('window');
const HomeScreen = () => {
    const {setMainColors} = useContext(GradientContext)
    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();

    const getPosterColors = async (index:number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primary="red" , secondary="white" ] = await getImageColors(uri) ;
    setMainColors({primary,secondary})
    }
    useEffect(() => {
     if(nowPlaying.length > 0) {
            getPosterColors(0)
     }
    }, [nowPlaying])  
    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator color="red" size={100} />
            </View>
        )
    }
    return (
        <GradientBackground >
            <ScrollView>
                <View style={{ marginTop: top + 20 }}>
                    {/* Carousel principal */}
                    <View style={{ height: 440 }}>
                        <Carousel
                            data={nowPlaying}
                            renderItem={({ item }: ListRenderItemInfo<Movie>) => <MoviePoster movie={item} />}
                            sliderWidth={windowWidth}
                            itemWidth={300}
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={index=>getPosterColors(index)}
                        />
                    </View>
                    <HorizontalSlider
                        title={"Populares"}
                        movies={popular}
                    />
                    <HorizontalSlider
                        title={"Top Rated"}
                        movies={topRated}
                    />
                    <HorizontalSlider
                        title={"Upcoming"}
                        movies={upcoming}
                    />
                </View>
            </ScrollView>
        </GradientBackground>

    )
}

export default HomeScreen
