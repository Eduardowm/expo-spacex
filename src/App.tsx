import React from 'react';
import {AppRegistry} from 'react-native';
import ApolloClient from "apollo-client";
import {HttpLink} from "apollo-link-http";
import {InMemoryCache} from "apollo-cache-inmemory";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import LaunchesScreen from "./screens/LaunchesScreen";
import LaunchDetailsScreen from "./screens/LaunchDetailsScreen";
import {ApolloProvider} from "@apollo/react-hooks";
import {Provider as PaperProvider} from 'react-native-paper';

const apolloClient = new ApolloClient({
    link: new HttpLink({
        uri: "https://api.spacex.land/graphql/"
    }),
    cache: new InMemoryCache()
});

const AppNavigator = createStackNavigator(
    {
        "SpaceX Launches": LaunchesScreen,
        LaunchDetails: LaunchDetailsScreen,
    },
    {
        initialRouteName: "SpaceX Launches"
    }
);
const AppContainer = createAppContainer(AppNavigator);

export const App = ({props}) =>
    <ApolloProvider client={apolloClient}>
        <PaperProvider>
            <AppContainer theme={"dark"}/>
        </PaperProvider>
    </ApolloProvider>

AppRegistry.registerComponent("SpaceX", () => App);
