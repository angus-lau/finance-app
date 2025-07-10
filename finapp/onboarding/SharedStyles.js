import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  title: {
    fontFamily: 'FungkyBrow',
    fontSize: 38,
    color: '#A7D338',
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 20,
  },
  illustration: {
    width: 600,
    height: 350,
    marginBottom: 36,
  },
  descriptor: {
    fontFamily: 'sans-serif',
    fontWeight: '600',
    fontSize: 38,
    color: '#A7D338',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  description: {
    fontSize: 15,
    color: '#434343',
    textAlign: 'center',
    marginHorizontal: 24,
    marginBottom: 18,
    lineHeight: 22,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 38,
    marginTop: 2,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D3E7C9',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#88CC3A',
    width: 10,
    height: 10,
  },
  button: {
    width: 270,
    height: 48,
    backgroundColor: '#A7E065',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
    position: 'absolute',
    bottom: 34,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '500',
  },
});

export default styles;