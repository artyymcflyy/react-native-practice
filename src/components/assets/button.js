import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const Button = props => {
    const {name, style, onPress} = props;
    return(
        <TouchableOpacity style={style} onPress={onPress}>
            <Icon name={name} size={30} color={'white'}/>
        </TouchableOpacity>
    );
};

export default Button;