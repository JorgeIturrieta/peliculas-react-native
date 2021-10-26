import React from 'react'
import { Image, StyleSheet } from 'react-native';
import { View, Text } from 'react-native'
import { Cast } from '../interfaces/creditsInterface';
interface Props {
    actor: Cast

}
const CastItem = ({ actor }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
    return (
        <View style={styles.container}>
            {
                actor.profile_path &&
                <Image
                    source={{ uri }}
                    style={{ width: 50, height: 50, borderRadius: 10 }}
                />
            }
            <View style={styles.actorInfo}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    {actor.name}
                </Text>
                <Text style={{ fontSize: 15, opacity: 0.7 }}>
                    {actor.character}
                </Text>

            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,

        height: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.9,
        shadowRadius: 8.30,
        elevation: 6,
        marginLeft: 20,
        paddingRight: 15,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 3  ,

    }
});
export default CastItem
