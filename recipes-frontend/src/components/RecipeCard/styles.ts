import {StyleSheet, Dimensions} from 'react-native';

// Get the screen width
const {width} = Dimensions.get('window');

const cardWidth = width / 2 - 10; // Adjust padding as needed

const styles = StyleSheet.create({
  cardContainer: {
    width: cardWidth,
    height: 200,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginBottom: 10, // Adds spacing between rows
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  singleCardContainer: {
    width: '100%',
    height: 200,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
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
