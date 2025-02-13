import { SafeAreaView, View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import globalStyle from '../../assets/styles/main';
import style from './style';

const Profile = () => {
  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <ScrollView>
        <View style={style.profileImageContainer}>
          <View style={style.profileImageContent}>
            <Image
              style={style.profileImage}
              source={require('../../assets/images/default-profile.png')}
            />
          </View>
        </View>
        <View style={style.userNameContainer}>
          <Text style={style.userName}>Thornin Mornsambath</Text>
        </View>
        <View style={style.profileStatesContainer}>
          <View style={[style.singleStateContainer, style.singleStateBorder]}>
            <Text style={style.singleStateNumber}>45</Text>
            <Text style={style.singleStateText}>Following</Text>
          </View>
          <View style={[style.singleStateContainer, style.singleStateBorder]}>
            <Text style={style.singleStateNumber}>5M</Text>
            <Text style={style.singleStateText}> Followers</Text>
          </View>
          <View style={style.singleStateContainer}>
            <Text style={style.singleStateNumber}>15</Text>
            <Text style={style.singleStateText}> Posts</Text>
          </View>
        </View>
        <View style={style.border} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
