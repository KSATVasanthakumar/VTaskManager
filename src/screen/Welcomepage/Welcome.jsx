import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../styles/colors';
import ImageFile from '../../constants/ImageFile';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainViewContainer}>
        <Text style={styles.appWelcomeText}>{'Welcome To '}</Text>
        <View style={styles.appHeading}>
          <Text style={styles.appVText}>{'V'}</Text>
          <Text style={styles.appTtext}>{'Task'}</Text>
        </View>
        <View style={styles.appTitleContainer}>
          <Text style={styles.appTitle}>{'* Stay Organized, Every Day'}</Text>
        </View>
        <View style={styles.appNextImage}>
          <Pressable onPressIn={() => navigation.navigate('Login')}>
            <Image source={ImageFile.next} />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
  },

  mainViewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitleContainer: {
    padding: 30,
  },
  appHeading: {
    flexDirection: 'row',
  },
  appVText: {
    color: colors.ACCENT,
    fontSize: 30,
    fontWeight: '700',
  },
  appTtext: {
    color: colors.WARNING,
    fontSize: 30,
    fontWeight: '800',
  },
  appWelcomeText: {
    color: colors.TEXTSECONDARY,
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 20,
  },
  appTitle: {
    color: colors.TEXTSECONDARY,
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'italic',
  },
  appNextImage: {
    position: 'absolute',
    bottom: '50',
    right: '20',
  },
});
