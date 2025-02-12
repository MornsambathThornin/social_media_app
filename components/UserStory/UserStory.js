import React from 'react';
import { Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const UserStory = props => {
  return (
    <View>
      <View style={style.userImageContainer}>
        <Image
          source={require('../../assets/images/default-profile.png')}
          style={style.imageStyle}
        />
      </View>
      <Text style={style.name}>{props.firstname}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstname: PropTypes.string.isRequired,
};

export default UserStory;
