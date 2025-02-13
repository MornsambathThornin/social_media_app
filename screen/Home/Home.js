/* eslint-disable react-native/no-inline-styles */

import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  View,
  SafeAreaView,
  Pressable,
  Text,
  FlatList,
  Dimensions,
  StatusBar,
} from 'react-native';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import Title from '../../components/Title/Title';
import style from './styles';
import UserStory from '../../components/UserStory/UserStory';
import UserPost from '../../components/UserPosts/UserPost';
import globalStyle from '../../assets/styles/main';
import { Routes } from '../../navigation/Routes';

const ItemSeparator = () => <View style={{ width: 13 }} />;
const Home = ({ navigation }) => {
  const data = [
    {
      firstName: 'John',
      id: 1,
    },
    {
      firstName: 'Kate',
      id: 2,
    },
    {
      firstName: 'Drake',
      id: 3,
    },
    {
      firstName: 'Dara',
      id: 4,
    },
    {
      firstName: 'Jesica',
      id: 5,
    },
    {
      firstName: 'Linda',
      id: 6,
    },
    {
      firstName: 'Dennis',
      id: 7,
    },
    {
      firstName: 'Dora',
      id: 8,
    },
    {
      firstName: 'Jenny',
      id: 9,
    },
  ];

  const posts = [
    {
      firstName: 'Alice',
      LastName: 'Brush',
      location: 'California  Los Angeles',
      likes: 1210,
      comments: 30,
      bookmarks: 90,
      id: 1,
    },
    {
      firstName: 'John',
      LastName: 'Doe',
      location: 'California  Los Angeles',
      likes: 1210,
      comments: 30,
      bookmarks: 90,
      id: 2,
    },
    {
      firstName: 'Kate',
      LastName: 'Morgan',
      location: 'California  Los Angeles',
      likes: 1210,
      comments: 30,
      bookmarks: 90,
      id: 3,
    },
    {
      firstName: 'Drake',
      LastName: 'Wills',
      location: 'California  Los Angeles',
      likes: 1210,
      comments: 30,
      bookmarks: 90,
      id: 4,
    },
    {
      firstName: 'Dara',
      LastName: 'Brown',
      location: 'California  Los Angeles',
      likes: 1210,
      comments: 30,
      bookmarks: 90,
      id: 5,
    },
    {
      firstName: 'Jesica',
      LastName: 'Morgan',
      location: 'California  Los Angeles',
      likes: 1210,
      comments: 30,
      bookmarks: 90,
      id: 6,
    },
    {
      firstName: 'Linda',
      LastName: 'Wills',
      location: 'California  Los Angeles',
      likes: 1210,
      comments: 30,
      bookmarks: 90,
      id: 7,
    },
    {
      firstName: 'Dennis',
      LastName: 'Brown',
      location: 'California  Los Angeles',
      likes: 1210,
      comments: 30,
      bookmarks: 90,
      id: 8,
    },
    {
      firstName: 'Dora',
      LastName: 'Brown',
      location: 'California  Los Angeles',
      likes: 1210,
      comments: 30,
      bookmarks: 90,
      id: 9,
    },
    {
      firstName: 'Jenny',
      LastName: 'Brown',
      location: 'California  Los Angeles',
      likes: 1210,
      comments: 30,
      bookmarks: 90,
      id: 10,
    },
  ];

  const pageSize = 4;
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [renderedData, setRenderedData] = useState(data.slice(0, pageSize));

  const pageSizePosts = 4;
  const [postPageNumber, setPostPageNumber] = useState(1);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [renderedDataPosts, setRenderedDataPosts] = useState(
    posts.slice(0, pageSizePosts),
  );

  const [screenData, setScreenData] = useState(Dimensions.get('screen'));

  console.log('Screen Data', screenData);

  useEffect(() => {
    Dimensions.addEventListener('change', result => {
      console.log('change Screen Data', result.screen);
      setScreenData(result.screen);
    });
  }, []);

  const pagination = (userData, page, size, post = false) => {
    let startIndex = (page - 1) * size;
    //console.log('story', startIndex, renderedData.length);
    console.log('post', startIndex, renderedDataPosts.length);

    if (startIndex >= userData.length) {
      return [];
    }
    if (!post) {
      setPageNumber(page);
    } else {
      setPostPageNumber(page);
    }
    return userData.slice(startIndex, startIndex + size);
  };

  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={{ flex: 1 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <>
              <View style={style.header}>
                <Title title="Let's Explore" />
                <Pressable style={style.messageIcon}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    color="#CACDDE"
                    size={20}
                  />
                  <View style={style.messageNumberContainer}>
                    <Text style={style.messageNumber}>2</Text>
                  </View>
                </Pressable>
              </View>
              <View style={style.userStoryContainer}>
                <FlatList
                  nestedScrollEnabled
                  onMomentumScrollBegin={() => setIsLoading(false)}
                  onEndReachedThreshold={0.5}
                  keyExtractor={item => item.id.toString()}
                  onEndReached={() => {
                    if (!isLoading) {
                      setIsLoading(true);
                      setRenderedData(prev => [
                        ...prev,
                        ...pagination(data, pageNumber + 1, pageSize),
                      ]);
                      setIsLoading(false);
                    }
                  }}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={renderedData}
                  renderItem={({ item }) => (
                    <UserStory firstname={item.firstName} />
                  )}
                  contentContainerStyle={style.userStoryList}
                  ItemSeparatorComponent={ItemSeparator}
                />
              </View>
            </>
          }
          data={renderedDataPosts}
          renderItem={({ item }) => (
            <UserPost
              firstname={item.firstName}
              lastname={item.LastName}
              location={item.location}
              comments={item.comments}
              likes={item.likes}
              bookmarks={item.bookmarks}
            />
          )}
          onMomentumScrollBegin={() => setIsLoadingPosts(false)}
          onEndReachedThreshold={0.5}
          keyExtractor={item => item.id.toString()}
          onEndReached={() => {
            if (!isLoadingPosts) {
              setIsLoadingPosts(true);
              setRenderedDataPosts(prev => [
                ...prev,
                ...pagination(posts, postPageNumber + 1, pageSizePosts, true),
              ]);
              setIsLoadingPosts(false);
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
