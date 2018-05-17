import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { DARK_BROWN, BROWN } from '../../config/constant';

import LinearGradient from 'react-native-linear-gradient';

const BackButton = (props) => {
    console.log(props)
    return(
        <TouchableOpacity
            style={[styles.backButtonContainer, props.styles]}
            onPress={props.onPress}
        >
            <LinearGradient
                colors={[DARK_BROWN, BROWN]}
                style={styles.backButton}
            >
                <Text style={styles.buttonTitle}>
                    Back
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    backButtonContainer: {
        width: 200,
        borderRadius: 2
    },
    backButton: {
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2
    },
    buttonTitle: {
        color: 'white',
        fontSize: 25
    }
});

export default BackButton;