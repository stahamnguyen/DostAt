import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TextInput, SafeAreaView, Text, Keyboard, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import PlayerCard from '../components/PlayerCard/PlayerCard';

import { MEDIUM_GRAY, LIGHTEST_GRAY, BROWN, DARK_BROWN } from '../config/constant'

class ProPlayersScreen extends Component {

    state = {
        playerName: "",
        image: "",
        mmr: "",
        rank: "",
        note: ""
    }

    constructor(props) {
        super(props);
    }

    fetchPlayerDataBySteamID = id => {

        const url = "https://api.opendota.com/api/players/" + id;

        fetch(url)
            .then(data => data.json())
            .then(parsedData => {
                this.setState({
                    playerName: parsedData.profile.name,
                    image: parsedData.profile.avatarfull,
                    mmr: parsedData.mmr_estimate.estimate,
                    rank: parsedData.leaderboard_rank 
                });
            })
            .catch((e) => console.log(e));
    }

    popToStartingScreen = () => {
        this.props.navigator.pop();
    }

    render(){
        return (
            <ImageBackground
                source={require("../assets/background.png")}
                style={styles.container}
                resizeMode="cover"
            >
                <SafeAreaView style={styles.safeArea}>
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholder="Enter player's ID"
                        placeholderTextColor={LIGHTEST_GRAY}
                        style={styles.textInput}
                        selectionColor={LIGHTEST_GRAY}
                        keyboardAppearance="dark"
                        returnKeyType="search"
                        autoFocus={true}
                        onSubmitEditing={(event) => this.fetchPlayerDataBySteamID(event.nativeEvent.text)}
                    />
                    <Text style={styles.note}>Look up players' information by SteamID</Text>
                    <PlayerCard data={this.state} />
                    <TouchableOpacity
                        style={styles.backButtonContainer}
                        onPress={this.popToStartingScreen}
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
                </SafeAreaView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,    
        alignItems: 'center',
    },
    safeArea: {
        flex: 1,
        alignItems: "center"
    },
    textInput: {
        backgroundColor: MEDIUM_GRAY,
        height: 40,
        width: 300,
        borderRadius: 3,
        padding: 10,
        marginTop: 20,
        color: LIGHTEST_GRAY,
        marginBottom: 5
    },
    note: {
        color: 'white',
        width: 300,
        fontSize: 12,
        marginBottom: 40
    },
    backButtonContainer: {
        padding: 10,
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

export default ProPlayersScreen;