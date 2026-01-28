import {
  Dimensions,
  Easing,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import { colors } from '../styles/colors';
import ImageFile from '../constants/ImageFile';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const AnimatedToast = ({ type, message, visible }) => {
  const yValue = useSharedValue(0);
  useEffect(() => {
    if (visible) {
      yValue.value = withTiming(300, {
        duration: 300,
        easing: Easing.out(Easing.ease),
      });

      setTimeout(() => {
        yValue.value = withTiming(-300, {
          duration: 300,
          easing: Easing.in(Easing.ease),
        });
      }, 300);
    }
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: yValue.value }],
    };
  });
  return (
    <Animated.View style={[styles.animatedToast, animatedStyle]}>
      <View
        style={[
          {
            backgroundColor:
              type == 'success'
                ? colors.GREEN
                : type == 'error'
                ? colors.LIGHTRED
                : type == 'warning'
                ? colors.WARNING
                : colors.TEXTSECONDARY,
          },
          styles.sideView,
        ]}
      ></View>
      <View
        style={[
          styles.circle,
          {
            backgroundColor:
              type == 'success'
                ? colors.GREEN
                : type == 'error'
                ? colors.LIGHTRED
                : type == 'warning'
                ? colors.WARNING
                : colors.TEXTSECONDARY,
          },
        ]}
      >
        <Image
          style={styles.icon}
          source={
            type == 'success'
              ? ImageFile.success
              : type == 'error'
              ? ImageFile.error
              : type == 'warning'
              ? ImageFile.warning
              : ImageFile.info
          }
        />
      </View>
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};

export default AnimatedToast;

const styles = StyleSheet.create({
  animatedToast: {
    width: Dimensions.get('window').width - 50,
    height: 70,
    backgroundColor: colors.PRIMARY,
    shadowColor: colors.MAINBG,
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowOffset: { x: 5, y: 0 },
    position: 'absolute',
    top: 70,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    overflow: 'hidden',
  },
  circle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: colors.LIGHTRED,
    marginLeft: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
  sideView: {
    width: 7,
    height: '100%',
  },
  message: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
    color: colors.TEXTPRIMARY,
  },
  icon: {
    height: 25,
    width: 25,
  },
});
