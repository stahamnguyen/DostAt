import React, { Component } from 'react';
import { ImageBackground, View, Text, TouchableOpacity, StyleSheet, Button, TextInput } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { LIGHTEST_GRAY, LIGHTEST_GRAY_BLUR, MEDIUM_GRAY, DARKEST_GRAY, DARK_GRAY, BLACK, DARK_GREEN, LIGHT_GREEN, SCREEN_WIDTH } from '../config/constant';

import GradientButton from '../components/GradientButton/GradientButton';

class AuthenticatingScreen extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        authenticatingMode: "Sign In"
    }

    changeAuthMode = (mode) => {
        this.setState({
            authenticatingMode: mode
        })
    }

    render() {
        return (
            <ImageBackground
                source={require("../assets/images/background.png")}
                style={styles.background}
                resizeMode="cover"
            >
                <View style={styles.container}>
                    <View style={styles.authenticatingModeContainer}>
                        <Button
                            title="SIGN IN"
                            color={this.state.authenticatingMode === "Sign In" ? LIGHTEST_GRAY : LIGHTEST_GRAY_BLUR}
                            onPress={() => this.changeAuthMode("Sign In")}
                        />
                        <Button
                            title="SIGN UP"
                            color={this.state.authenticatingMode !== "Sign In" ? LIGHTEST_GRAY : LIGHTEST_GRAY_BLUR}
                            onPress={() => this.changeAuthMode("Sign Up")}
                        />
                    </View>
                    <View style={styles.formContainer}>
                        <LinearGradient
                            style={styles.formCard}
                            colors={[DARK_GRAY, DARKEST_GRAY ,BLACK]}
                        >
                            <View style={styles.form}>
                                <Text style={styles.text}>Username</Text>
                                <TextInput
                                    underlineColorAndroid="transparent"
                                    placeholder="Enter your username"
                                    placeholderTextColor={LIGHTEST_GRAY}
                                    style={styles.textInput}
                                    selectionColor={LIGHTEST_GRAY}
                                    keyboardAppearance="dark"
                                    returnKeyType="done"
                                />
                            </View>
                            <View style={styles.form}>
                                <Text style={styles.text}>Password</Text>
                                <TextInput
                                    underlineColorAndroid="transparent"
                                    placeholder="Enter your password"
                                    placeholderTextColor={LIGHTEST_GRAY}
                                    style={styles.textInput}
                                    selectionColor={LIGHTEST_GRAY}
                                    keyboardAppearance="dark"
                                    returnKeyType="done"
                                />
                            </View>
                            {this.state.authenticatingMode === "Sign Up" ? 
                                <View style={styles.form}>
                                    <Text style={styles.text}>Repeat password</Text>
                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        placeholder="Confirm your password"
                                        placeholderTextColor={LIGHTEST_GRAY}
                                        style={styles.textInput}
                                        selectionColor={LIGHTEST_GRAY}
                                        keyboardAppearance="dark"
                                        returnKeyType="done"
                                    />
                                </View>
                            :
                                null    
                            }
                        </LinearGradient>
                        <GradientButton
                            colors={[DARK_GREEN, LIGHT_GREEN]}
                            title="SUBMIT"
                        >
                        </GradientButton>
                        
                        {/* <View style={styles.buttonContainer}>
                        </View> */}
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    authenticatingModeContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'flex-end',
        width: 200,
        flex: 1,
        paddingBottom: 100
    },
    formContainer: {
        flex: 1,
        alignItems: 'center'
    },
    formCard: {
        borderRadius: 3,
        padding: 20,
        marginTop: -70,
        marginBottom: 20,
        justifyContent: 'space-between'
    },
    unselected: {
        opacity: 0
    },
    form: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5
    },
    textInput: {
        backgroundColor: MEDIUM_GRAY,
        height: 40,
        width: SCREEN_WIDTH - 200,
        borderRadius: 3,
        padding: 10,
        marginLeft: 20,
        color: LIGHTEST_GRAY,
        marginBottom: 5
    },
    text: {
        color: 'white'
    },
    buttonContainer: {

    }
});

export default AuthenticatingScreen;