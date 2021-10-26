import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import { MovieFull } from '../interfaces/movieInterface'
import { Cast } from '../interfaces/creditsInterface';
import CastItem from '../components/CastItem'
import currencyFormatter from 'currency-formatter'
interface Props {
    movieFull: MovieFull;
    cast: Cast[]
}
const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            {/* Detalles */}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons
                        name="star-outline"
                        color="grey"
                        size={15}
                    />
                    <Text> {movieFull.vote_average}</Text>

                    <Text style={{ marginLeft: 5 }}>
                        - {movieFull.genres.map(g => g.name).join(', ')}
                    </Text>

                </View>
                 {/* Fecha de lanzamiento */}
                 <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>
                    Fecha de lanzamiento
                </Text>
                <Text style={{ fontSize: 16 }}>
                    {movieFull.release_date}
                </Text>
                {/* Historia */}
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>
                    Historia
                </Text>
                <Text style={{ fontSize: 16 }}>
                    {movieFull.overview}
                </Text>
                {/* Presupuesto */}
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>
                    Presupuesto
                </Text>
                <Text style={{ fontSize: 18 }}>
                    {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
                </Text>
            </View>
            {/* Casting */}
            <View style={{ marginTop: 10, marginBottom: 100 }}>
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20 }}>
                    Actores
                </Text>
                {/* <CastItem actor={cast[0]} /> */}
                <FlatList                    
                    data={cast}
                    keyExtractor={item => item.id.toString()}
                    renderItem={ ({item}) => <CastItem  actor= {item}/> }
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{marginTop:10 ,height:70 }}
                />
            </View>



        </>
    )
}

export default MovieDetails
