/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  StyleSheet,
  PixelRatio,
} from 'react-native'

export default StyleSheet.create({
  flex: {
    flex: 1
  },
  container: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 300,
    flexDirection: 'row',
    backgroundColor: '#ff0067',
    height: 80,
    borderRadius: 5
  },
  centerStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  borderLeft: {
    borderLeftWidth: 1/PixelRatio.get(),
    borderColor: '#fff'
  },
  borderBottom: {
    borderBottomWidth: 1/PixelRatio.get(),
    borderColor: '#fff'
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  }
});