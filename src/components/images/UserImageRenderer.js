import React from 'react';
import { View, Image } from 'react-native';

const UserImageRenderer = (props) => {

    const { userIcon, subIcon, moreUsers } = styles;

    const { style, images } = props;

    if(images.length > 1) {
        /*images.map((item, index) => {
            test = <Image style={ userIcon } source={{uri: item.img }}/>;
            test2 = <Image style={ userIcon } source={{uri: item.img }}/>
        });*/
        return (
            <View style={ moreUsers }>
                <Image style={ userIcon } source={{ uri: props.images[0].img }}/>
                <Image style={ subIcon } source={{ uri: props.images[1].img }}/>
            </View>
        );
    } else {
        return (
            <Image style={ userIcon } source={{ uri: props.images[0].img }}/>
        );
    }
}

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

    }
}

export { UserImageRenderer };