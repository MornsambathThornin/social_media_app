import { View, FlatList, ScrollView, Image } from 'react-native';
import React from 'react';
import style from './style';

const ProfileTabPost = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[style.profileTabPostsContainer] }
    >
      <View style={[style.imageContainer, style.imageUpcomingRowsContainer]}>
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default-post.png')}
        />
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default-post.png')}
        />
      </View>
      <View style={[style.imageContainer, style.imageUpcomingRowsContainer]}>
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default-post.png')}
        />
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default-post.png')}
        />
      </View>
      <View style={[style.imageContainer, style.imageUpcomingRowsContainer]}>
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default-post.png')}
        />
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default-post.png')}
        />
      </View>
      <View style={[style.imageContainer, style.imageUpcomingRowsContainer]}>
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default-post.png')}
        />
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default-post.png')}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileTabPost;
