import React, {memo, useCallback, useRef, useState} from "react";
import {Dimensions, FlatList, Image, StyleSheet, Text, View,} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const {width: windowWidth, height: windowHeight} = Dimensions.get("window");

const styles = StyleSheet.create({
    slide: {
        height: windowHeight,
        width: windowWidth,
        justifyContent: "center",
        alignItems: "center",
    },
    slideImage: {width: windowWidth * 0.9, height: windowHeight * 0.7},
    slideTitle: {fontSize: 24},
    slideSubtitle: {fontSize: 18},

    pagination: {
        position: "absolute",
        bottom: 8,
        width: "100%",
        justifyContent: "center",
        flexDirection: "row",
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 2,
    },
    paginationDotActive: {backgroundColor: "lightblue"},
    paginationDotInactive: {backgroundColor: "gray"},

    carousel: {flex: 1},
});

const slideList = Array.from({length: 3}).map((_, i) => {
    return {
        id: i,
        image: `https://picsum.photos/1440/2842?random=${i}`,
        title: `This is the title ${i + 1}!`,
        subtitle: `This is the subtitle ${i + 1}!`,
    };
});

const Slide = memo(function Slide({data}) {
    return (
        <View style={styles.slide}>
            <Image source={{uri: data.image}} style={styles.slideImage}/>
            <Text style={styles.slideTitle}>{data.title}</Text>
            <Text style={styles.slideSubtitle}>{data.subtitle}</Text>
            <Icon size={30} name="favorite" onPress={(event) => alert("hi!")}/>
        </View>
    );
});

const Pagination = ({index}) => (
    <View style={styles.pagination} pointerEvents="none">
        {slideList.map((_, i) => {
            return (
                <View
                    key={i}
                    style={[
                        styles.paginationDot,
                        index === i
                            ? styles.paginationDotActive
                            : styles.paginationDotInactive,
                    ]}
                />
            );
        })}
    </View>
);

export default function Carousel() {
    const [index, setIndex] = useState(0);
    const indexRef = useRef(index);
    indexRef.current = index;
    const onScroll = useCallback((event) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);
        const distance = Math.abs(roundIndex - index);
        const isNoMansLand = 0.4 < distance;

        if (roundIndex !== indexRef.current && !isNoMansLand) {
            setIndex(roundIndex);
        }
    }, []);

    const flatListOptimizationProps = {
        initialNumToRender: 0,
        maxToRenderPerBatch: 1,
        removeClippedSubviews: true,
        scrollEventThrottle: 16,
        windowSize: 1,
        keyExtractor: useCallback(s => String(s.id), []),
        getItemLayout: useCallback(
            (_, index) => ({
                index,
                length: windowWidth,
                offset: index * windowWidth,
            }),
            []
        ),
    };

    const renderItem = useCallback(function renderItem({item}) {
        return <Slide data={item}/>;
    }, []);

    return (
        <>
            <FlatList
                data={slideList}
                style={styles.carousel}
                renderItem={renderItem}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                onScroll={onScroll}
                {...flatListOptimizationProps}
            />
            <Pagination index={index}/>
        </>
    );
}
