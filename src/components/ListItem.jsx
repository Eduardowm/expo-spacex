import React from "react";
import {View} from "react-native";
import {buttonStyles, listViewStyles as styles} from "../../styles";
import {Button, Card, Paragraph, Title} from 'react-native-paper';

export default function ListItem({item, navigation}) {
    let launchDate = new Date(item.launch_date_local)
    launchDate = `${launchDate.getDate()}-${parseInt(launchDate.getMonth() + 1)}-${launchDate.getFullYear()}`;

    return <View style={styles.item}>
        <Card key={item.id}>
            <Card.Content>
                <Title>{item.mission_name}</Title>
                <Paragraph>{launchDate}</Paragraph>
            </Card.Content>
            <Card.Cover
                source={{uri: item.links.flickr_images.length ? item.links.flickr_images[0] : 'https://cdn.dribbble.com/users/610788/screenshots/5157282/spacex.png'}}/>
            <Card.Actions>
                <Button style={buttonStyles.button} color="white"
                        onPress={() => navigation.navigate("LaunchDetails", item)}>View more</Button>
            </Card.Actions>
        </Card>
    </View>;
}
