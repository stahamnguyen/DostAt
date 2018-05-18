import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground, TextInput, SafeAreaView, Text, Keyboard, TouchableOpacity, Animated } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import PlayerCard from '../components/PlayerCard/PlayerCard';
import GradientButton from '../components/GradientButton/GradientButton';

import { MEDIUM_GRAY, LIGHTEST_GRAY, BROWN, DARK_BROWN } from '../config/constant'

class ProPlayersScreen extends Component {

    state = {
        fetchData: {
            playerName: "",
            image: "",
            mmr: "",
            rank: ""
        },
        note: "Look up players' information by SteamID",
        shakeAnim: new Animated.Value(0)
    }

    constructor(props) {
        super(props);
    }

    fetchPlayerDataBySteamID = id => {

        const url = "https://api.opendota.com/api/players/" + id;

        fetch(url)
            .then(data => data.json())
            .then(parsedData => {
                if(parsedData.profile) {
                    this.setState({
                        fetchData: {
                            playerName: parsedData.profile.name,
                            image: parsedData.profile.avatarfull,
                            mmr: parsedData.mmr_estimate.estimate,
                            rank: parsedData.leaderboard_rank 
                        },
                        note: "Look up players' information by SteamID"
                    });
                } else {
                    this.setState({
                        fetchData: {
                            playerName: "",
                            image: "",
                            mmr: "",
                            rank: "" 
                        },
                        note: "Cannot find player with input SteamID"
                    });

                    Animated.timing(this.state.shakeAnim, {
                        toValue: 1,
                        duration: 50,
                        useNativeDriver: true
                    }).start(() => {
                        Animated.timing(this.state.shakeAnim, {
                        toValue: -1,
                        duration: 50,
                        useNativeDriver: true
                        }).start(() => {
                            Animated.timing(this.state.shakeAnim, {
                                toValue: 0,
                                duration: 50,
                                useNativeDriver: true
                                }).start()
                        });
                    });
                }
                
            })
            .catch((e) => console.log(e));
    }

    popToStartingScreen = () => {
        this.props.navigator.pop();
    }

    render(){
        return (
            <ImageBackground
                source={require("../assets/images/background.png")}
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
                    <Text style={styles.note}>{this.state.note}</Text>
                    <Animated.View
                        style={{transform: [
                            {rotate: this.state.shakeAnim.interpolate({
                                inputRange: [-1, 1],
                                outputRange: ['-3deg', '3deg']
                            })}
                        ]}}>
                        <PlayerCard data={this.state.fetchData} />
                    </Animated.View>
                    <GradientButton
                        onPress={this.popToStartingScreen}
                        colors={[DARK_BROWN, BROWN]}
                        title="BACK"
                    />
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
    }
});

export default ProPlayersScreen;
