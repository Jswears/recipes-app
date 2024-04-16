import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    width: '50%',
    height: 200,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  singleCardContainer: {
    width: '100%',
    height: 200,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  cardServings: {
    fontSize: 14,
    color: 'white',
  },
  cardProgress: {
    fontSize: 14,
    color: 'white',
  },
});

export default styles;
