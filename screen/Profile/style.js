import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  profileImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(32),
  },
  profileImageContent: {
    borderWidth: 1,
    padding: horizontalScale(3),
    borderRadius: horizontalScale(150),
    borderColor: '#0150EC',
  },
  profileImage: {
    width: horizontalScale(100),
    height: horizontalScale(100),
  },
  userName: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: scaleFontSize(20),
    lineHeight: scaleFontSize(24),
    color: '#022150',
  },
  userNameContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(20),
  },
  profileStatesContainer: {
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(16),
  },
  singleStateContainer: {
    paddingHorizontal: horizontalScale(18),
    alignItems: 'center',
    paddingVertical: verticalScale(10),
  },
  singleStateBorder: {
    borderRightWidth: 1.2,
    borderRightColor: '#E9EFF1',
  },
  singleStateNumber: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: scaleFontSize(20),
    lineHeight: scaleFontSize(24),
    color: '#022150',
  },
  singleStateText: {
    marginTop: verticalScale(6),
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    color: '#79869F',
  },
  border: {
    borderTopWidth: 1.2,
    borderColor: '#EFF2F6',
    marginVertical: verticalScale(16),
    marginHorizontal: horizontalScale(24),
  },
});

export default styles;
