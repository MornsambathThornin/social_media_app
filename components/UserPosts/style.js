import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  userPostContainer: {
    borderBottomWidth: 1,
    borderBlockColor: '#EFF2F6',
    marginVertical: 20,
    paddingHorizontal: 20,
  },

  name: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 19,
  },
  location: {
    fontFamily: 'Inter',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 15,
    color: '#79869F',
  },
  userInformation: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPostInformation: {
    marginLeft: 10,
  },
  image: {
    borderWidth: 1,
    borderColor: '#F35BAC',
    borderRadius: 100,
    padding: 2,
  },
  userInformationContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: 20,
  },
  post: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  userPostStats: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
  },
  userPostStatsButton: {
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPostStatsIcons: {
    marginRight: 3,
    color: '#79869F',
  },
  userPostStatsText: {
    fontFamily: 'Inter',
    color: '#79869F',
  },
  postDummyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CBCDD0FF',
    borderRadius: 10,
    height: '400',
    width: '100%',
  },
});

export default style;
