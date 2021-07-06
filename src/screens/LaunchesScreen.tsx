import React from "react";
import {FlatList, SafeAreaView, Text} from "react-native";
import {useQuery} from "@apollo/react-hooks";
import {listScreenStyles as styles} from "../../styles";
import {GET_LAUNCHES} from "../queries";
import ListItem from "../components/ListItem";

export default ({navigation}) => {
    const {loading, data} = useQuery(GET_LAUNCHES);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{navigation.getParam("title")}</Text>
            {loading ? (
                <Text style={styles.title}>Loading ...</Text>
            ) : (
                data && <FlatList
                    data={data.launchesPast}
                    renderItem={(item) => <ListItem item={item.item} navigation={navigation}/>}
                    keyExtractor={item => `${item[`id`]}`}
                />
            )}
        </SafeAreaView>
    );
}
