import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import ImageCarousel from "../components/ImageCarousel";

const LaunchDetails = ({navigation}) => {
    const {params: item} = navigation.state;

    return (
        <View style={{flex: 1, backgroundColor: 'black', alignItems: 'center'}}>
            <Text
                style={{
                    color: 'white',
                    fontSize: 32,
                    marginTop: 50,
                    marginBottom: 25
                }}
            >
                {item.mission_name}
            </Text>

            <View style={{flexDirection: 'row'}}>
                <ScrollView
                    horizontal={true}
                >
                    <ImageCarousel/>
                </ScrollView>
            </View>
        </View>
    );
};

export default LaunchDetails;
