import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  view: {
    width: '100%',
    padding: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'orange',
  },
  inputContainer: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    height: 25,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  leftIconContainer: {
    marginRight: 8,
  },
  rightIconContainer: {
    backgroundColor: 'transparent',
  },
  icon: {
    marginRight: 8,
  },
});

export default styles;
