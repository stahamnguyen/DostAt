import React, { Component } from 'react';
import { Image, Text, StyleSheet } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import StatView from './StatView/StatView';

import { MEDIUM_GRAY, DARK_GRAY, BLACK, DARKEST_GRAY, DARK_BROWN, BROWN } from '../../config/constant';

const PlayerCard = (props) => {

    return (
        <LinearGradient
            colors={[DARK_GRAY, DARKEST_GRAY ,BLACK]}
            style={styles.container}
        >
            <Image
                source={props.data.image !== "" ? {uri: props.data.image} : require("../../assets/defaultAvatar.png")}
                style={styles.avatar}
            />
            <Text style={styles.playerName}>
                {props.data.playerName}
            </Text>
            <StatView data={{ mmr: props.data.mmr, rank: props.data.rank }}/>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'black',
        shadowColor: 'black',
        shadowOpacity: 0.6,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        width: 300,
        height: 400,
        alignItems: 'center',
        padding: 10,
        marginBottom: 50
    },
    avatar: {
        width: 200,
        height: 200,
        marginBottom: 10,
        resizeMode: "cover"
    },
    playerName: {
        flex: 1,
        color: 'white',
        fontSize: 16
    }
});

export default PlayerCard;