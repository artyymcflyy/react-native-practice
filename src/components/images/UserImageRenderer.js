import React from 'react';
import { View, Image } from 'react-native';

const UserImageRenderer = (props) => {

    const { style, images } = props;

    if(images.length > 1) {
        return (
            <View>
                {
                    images.map((item, index) => {
                        <Image
                            style={ style.userIcon }
                            source={{uri: item.img }}/>
                    })
                }
            </View>
        );
    } else {
        return (
            <Image
                style={ style }
                source={{ uri: props.images[0].img }}/>
        );
    }
}

export { UserImageRenderer };