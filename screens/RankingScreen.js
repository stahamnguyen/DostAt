import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, ActivityIndicator, Text, FlatList, SafeAreaView, Dimensions } from 'react-native';

import { LIGHTEST_GRAY, DARK_BROWN, BROWN } from '../config/constant';
import TeamCell from '../components/TeamCell/TeamCell';
import GradientButton from '../components/GradientButton/GradientButton';

class RankingScreen extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        data: null
    }

    componentDidMount() {
        fetch("https://api.opendota.com/api/teams")
            .then(data => data.json())
            .then(parsedData => {
                this.setState({
                    data: parsedData
                });
            });
    }

    popToStartingScreen = () => {
        this.props.navigator.pop();
    }

    render() {
        return (
            <ImageBackground
                source={require("../assets/images/background.png")}
                style={styles.container}
                resizeMode="cover"
            >
                <SafeAreaView style={styles.container}>
                    
                    {this.state.data ?
                        <FlatList 
                            data={this.state.data}
                            renderItem={({item, index}) => <TeamCell data={{item, index}}/>}
                            style={styles.list}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        :
                        <ActivityIndicator style={styles.activityIndicator}/>}
                    <GradientButton
                        styles={styles.marginSmall}
                        colors={[DARK_BROWN, BROWN]}
                        title="BACK"
                        onPress={this.popToStartingScreen} />
                </SafeAreaView>
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
    list: {
        marginTop: 30,
        width: Dimensions.get('window').width - 80
    },
    activityIndicator: {
        flex: 1
    },
    marginSmall: {
        margin: 20
    }
  });

export default RankingScreen;