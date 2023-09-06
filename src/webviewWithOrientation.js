Home.js

import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {WebView} from 'react-native-webview';
import {useOrientation} from '../../components/UseOrientation';
const {height, width} = Dimensions.get('screen');

const Home = () => {
  const orientation = useOrientation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{color: '#000', fontWeight: 'bold'}}>DATA OF WEBVIEW</Text>
      <View>
        <WebView
          source={{uri: 'https://dummyjson.com/products'}}
          onLoad={() => console.log('WebView loaded')}
          onError={error => console.error('WebView error: ', error)}
          style={{
            flex: 1,
            height: orientation === 'PORTRAIT' ? height : width,
            width: orientation === 'PORTRAIT' ? width : height,
            marginHorizontal: moderateScale(10),
          }}
          javaScriptEnabled={true}
          startInLoadingState={true}
          scalesPageToFit={true}
        />
      </View>
    </View>
  );
};

export default Home;
==================================================
UseOrientation.js

import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

export const useOrientation = () => {
  const [orientation, setOrientation] = useState('PORTRAIT');

  const handleOrientationChange = ({screen}) => {
    if (screen.width > screen.height) {
      setOrientation('LANDSCAPE');
    } else {
      setOrientation('PORTRAIT');
    }
  };

  useEffect(() => {
    Dimensions.addEventListener('change', handleOrientationChange);

    return () => {
      Dimensions.removeEventListener('change', handleOrientationChange);
    };
  }, []);

  return orientation;
};
