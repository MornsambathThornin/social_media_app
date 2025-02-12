import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  header: {
    paddingHorizontal: horizontalScale(24),
    marginVertical: verticalScale(20),
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  messageIcon: {
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 100,
  },

  messageNumberContainer: {
    width: 12,
    height: 12,
    backgroundColor: '#F35BAC',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 7,
    top: 10,
  },

  messageNumber: {
    fontSize: 8,
    fontFamily: 'Inter',
    lineHeight: 10,
    fontWeight: 'bold',
    color: '#FFFFFFFF',
  },

  userStoryContainer: {},

  userStoryList: {
    paddingHorizontal: 13,
  },

  userPostContainer: {
    // backgroundColor: 'red',
    marginTop: 20,
    height: '100%',
    paddingHorizontal: 24,
  },
});

export default style;
