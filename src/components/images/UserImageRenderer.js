import React from 'react';
import { View, Image } from 'react-native';

const UserImageRenderer = (props) => {

    const { style, images } = props;

    if(images.length > 1) {
        images.map((item, index) => {
            test = <Image style={ style.userIcon } source={{uri: item.img }}/>;
            test2 = <Image style={ style.userIcon } source={{uri: item.img }}/>
        });
        return (
            <View>
                <Image style={ style } source={{ uri: props.images[0].img }}/>
                <Image style={ style } source={{ uri: props.images[1].img }}/>
            </View>
        );
    } else {
        return (
            <Image style={ style } source={{ uri: props.images[0].img }}/>
        );
    }
}

export { UserImageRenderer };