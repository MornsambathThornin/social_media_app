import { SafeAreaView, View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import globalStyle from '../../assets/styles/main';
import style from './style';
import { ProfileTabNavigation } from '../../navigation/MainNavigation';

const Profile = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
        <View style={style.profileStatsContainer}>
          <View style={[style.singleStatContainer, style.singleStatBorder]}>
            <Text style={style.singleStatNumber}>45</Text>
            <Text style={style.singleStatText}>Following</Text>
          </View>
          <View style={[style.singleStatContainer, style.singleStatBorder]}>
            <Text style={style.singleStatNumber}>5M</Text>
            <Text style={style.singleStatText}> Followers</Text>
          </View>
          <View style={style.singleStatContainer}>
            <Text style={style.singleStatNumber}>15</Text>
            <Text style={style.singleStatText}> Posts</Text>
          </View>
        </View>
        <View style={style.border} />

        <View style={{ height: 550 }}>
          <ProfileTabNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
