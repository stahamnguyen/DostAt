import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, ActivityIndicator, Text, FlatList, SafeAreaView, Dimensions } from 'react-native';

import { LIGHTEST_GRAY } from '../config/constant';
import TeamCell from '../components/TeamCell/TeamCell';
import BackButton from '../components/BackButton/BackButton';

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
            <SafeAreaView style={styles.container}>
                <ImageBackground
                    source={require("../assets/images/background.png")}
                    style={styles.container}
                    resizeMode="cover"
                >
                    {this.state.data ?
                        <FlatList 
                            data={this.state.data}
                            renderItem={({item, index}) => <TeamCell data={{item, index}}/>}
                            style={styles.list}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        :
                        <ActivityIndicator style={styles.activityIndicator}/>}
                    <BackButton
                        styles={styles.marginSmall}
                        onPress={this.popToStartingScreen} />
                </ImageBackground>
            </SafeAreaView>
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