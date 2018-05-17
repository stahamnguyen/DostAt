import React from 'react';
import { Text, Image, StyleSheet, SafeAreaView } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { DARK_GRAY, DARKEST_GRAY, BLACK } from '../../config/constant';

const TeamCell = (props) => {

    return (
        <LinearGradient
            colors={[DARK_GRAY, DARKEST_GRAY ,BLACK]}
            style={styles.container}
        >
            <Text style={styles.textRank}>#{props.data.index + 1}</Text>
            <Image
                source={props.data.item.logo_url ? {uri: props.data.item.logo_url} : require("../../assets/images/defaultAvatar.png")}
                style={styles.avatar}
            />
            <Text style={styles.textName}>{props.data.item.name}</Text>
            <Text style={styles.textRating}>{props.data.item.rating}</Text>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        position: "relative"
    },
    textRank: {
        fontSize: 12,
        color: 'white',
        marginRight: 20
    },
    textName: {
        flex: 1,
        fontSize: 12,
        color: 'white'
    },
    textRating: {
        fontSize: 12,
        color: 'white',
        position: "absolute",
        right: 10
    },
    avatar: {
        width: 20,
        height: 20,
        resizeMode: 'cover',
        marginRight: 20
    }
});

export default TeamCell;