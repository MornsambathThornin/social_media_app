import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faHeart,
  faComment,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';
import style from './style';

const UserPost = props => {
  return (
    <View style={style.userPostContainer}>
      <View style={style.userInformationContainer}>
        <View style={style.userInformation}>
          <View style={style.image}>
            <Image
              source={require('../../assets/images/default-profile.png')}
            />
          </View>
          <View style={style.userPostInformation}>
            <Text style={style.name}>
              {props.firstname} {props.lastname}
            </Text>
            {props.location && (
              <Text style={style.location}>{props.location}</Text>
            )}
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH} color="#79869F" size={22} />
      </View>
      <View style={style.post}>
        <View style={style.postDummyContainer}>
          <Text>Dummy Post</Text>
        </View>
        {/* <Image
          source={require('../../assets/images/default-post.png')}
          resizeMode="cover"
          style={{ width: '100%', resizeMode: 'cover' }}
        /> */}
      </View>
      <View style={style.userPostStats}>
        <Pressable style={style.userPostStatsButton}>
          <FontAwesomeIcon icon={faHeart} style={style.userPostStatsIcons} />
          <Text style={style.userPostStatsText}>{props.likes}</Text>
        </Pressable>
        <Pressable style={style.userPostStatsButton}>
          <FontAwesomeIcon icon={faComment} style={style.userPostStatsIcons} />
          <Text style={style.userPostStatsText}>{props.comments}</Text>
        </Pressable>
        <Pressable style={style.userPostStatsButton}>
          <FontAwesomeIcon icon={faBookmark} style={style.userPostStatsIcons} />
          <Text style={style.userPostStatsText}>{props.bookmarks}</Text>
        </Pressable>
      </View>
    </View>
  );
};
UserPost.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  location: PropTypes.string,
  comments: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
};

export default UserPost;
