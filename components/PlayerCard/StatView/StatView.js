import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatView = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}>
                    MMR:
                </Text>
                <Text style={styles.text}>
                    {props.data.mmr}
                </Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.text}>
                    Ranking:
                </Text>
                <Text style={styles.text}>
                    {props.data.rank}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 100,
        justifyContent: "space-around"
    },
    content: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    text: {
        color: 'white',
        fontSize: 20
    }
});

export default StatView;