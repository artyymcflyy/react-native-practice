import React from 'react';
import { View, Image, Dimensions } from 'react-native';

const UserImageRenderer = (props) => {

    const { userIcon, subIcon, moreUsers, detailContainer, detailCircleView } = styles;

    const { style, images, detailScreen } = props;

    if(images.length > 1) {
        /*images.map((item, index) => {
            test = <Image style={ userIcon } source={{uri: item.img }}/>;
            test2 = <Image style={ userIcon } source={{uri: item.img }}/>
        });*/
        return (
            <View style={ moreUsers }>
                <Image style={ userIcon } source={{ uri: images[0].img }}/>
                <Image style={ subIcon } source={{ uri: images[1].img }}/>
            </View>
        );
    } else {
        return (
            <View style={detailScreen ? detailContainer : {}}>
                <Image style={ detailScreen ? detailCircleView : userIcon } source={{ uri: images[0].img }}/>
            </View>
        );
    }
};

const styles = {
    userIcon: {
        borderWidth: 2,
        borderColor: '#ECAC00',
        borderRadius: 50,
        height: 50,
        width: 50,
        left: 5
    },
    subIcon: {
        borderWidth: 2,
        borderColor: '#ECAC00',
        borderRadius: 50,
        height: 50,
        width: 50,
        zIndex: 1,
        right: 25
    },
    moreUsers: {
        flexDirection: 'row'

    },
    detailContainer: {
        position: 'absolute',
        elevation: 25,
        top: Dimensions.get('window').height/4 - 45,
        left: Dimensions.get('window').width/4 + 7,
    },
    detailCircleView: {
        height: 175,
        width: 175,
        borderWidth: 5,
        borderRadius: 100,
        borderColor: '#ecac00',
        shadowColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
}

export { UserImageRenderer };