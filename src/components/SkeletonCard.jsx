import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, View } from 'react-native';

const SkeletonCard = () => (
  <View style={styles.skeletonCard}>
    <ShimmerPlaceHolder
      LinearGradient={LinearGradient}
      style={styles.skeletonTitle}
    />
    <ShimmerPlaceHolder
      LinearGradient={LinearGradient}
      style={styles.skeletonLine}
    />
  </View>
);
const styles = StyleSheet.create({
  skeletonCard: {
    backgroundColor: '#e5e7eb',
    borderRadius: 10,
    padding: 12,
    marginTop: 15,

    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  skeletonTitle: {
    height: 16,
    width: '60%',
    backgroundColor: '#d1d5db',
    borderRadius: 6,
    marginBottom: 8,
  },
  skeletonLine: {
    height: 12,
    width: '90%',
    backgroundColor: '#d1d5db',
    borderRadius: 6,
  },
});

export default SkeletonCard;
