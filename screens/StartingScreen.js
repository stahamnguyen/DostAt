import React, { Component } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { navigatorStyle } from '../config/navigatorStyleConfig';

import { LIGHTEST_GRAY, LIGHT_GRAY, MEDIUM_GRAY, DARK_GRAY } from '../config/constant';

class StartingScreen extends Component {
    constructor(props) {
        super(props);
    }

    buttonOnPress = i => {
        const screenId = ["DostAt.ProPlayersScreen", "DostAt.StartingScreen", "DostAt.RankingScreen"]

        this.props.navigator.push({
            screen: screenId[i],
            title: "",
            passProps: {

            },
            navigatorStyle: {
                ...navigatorStyle
            }
        });
    }

    titles = ['Steam ID', 'Heroes', 'Rankings'];

    buttons = this.titles.map((title, i) => {

        return (
            <TouchableOpacity
                style={styles.buttonContainer}
                key={i}
                onPress={() => {this.buttonOnPress(i)}}>
                    <LinearGradient
                        style={styles.button}
                        colors={[LIGHT_GRAY, MEDIUM_GRAY, DARK_GRAY]}
                    >
                        <Text style={styles.buttonTitle}>{title}</Text>
                    </LinearGradient>
            </TouchableOpacity>
        )
    });

    render() {
        return (
            <ImageBackground
                source={require("../assets/images/background.png")}
                style={styles.container}
                resizeMode="cover"
            >
                <Image 
                    source={require('../assets/images/logo.png')}
                    style={styles.logo}
                />
                {this.buttons}
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: 70,
        resizeMode: "cover"
    },
    buttonContainer: {
        width: 200,
        height: 50,
        marginBottom: 30
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
    },
    buttonTitle: {
        fontSize: 20,
        color: LIGHTEST_GRAY,
        fontWeight: "800"
    }
  });

export default StartingScreen;