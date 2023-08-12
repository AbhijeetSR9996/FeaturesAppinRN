import React, {useRef} from 'react';
import {ScrollView, Button, View, Text, Image} from 'react-native';

const ScrollToTopinRN = () => {
  const scrollViewRef = useRef(null);

  const scrollToTop = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({y: 0, animated: true});
    }
  };

  return (
    <>
      <Button title="Scroll to Top" onPress={scrollToTop} />
      <ScrollView ref={scrollViewRef}>
        <Text>Your scrollable content1</Text>
        <Text>Your scrollable content2</Text>
        <Text>Your scrollable content3</Text>
        <Text>Your scrollable content4</Text>
        <Text>Your scrollable content5</Text>
        <Text>Your scrollable content6</Text>
        <Text>Your scrollable content7</Text>
        <View>
          <Image source={require('./assets/images/onboarding2.png')} />
          <Image source={require('./assets/images/onboarding2.png')} />
          <Image source={require('./assets/images/onboarding2.png')} />
          <Image source={require('./assets/images/onboarding2.png')} />
        </View>
      </ScrollView>
    </>
  );
};

export default App;

===============================

import React, {useRef, useState} from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';

const App = () => {
  const scrollViewRef = useRef(null);
  const [fabVisible, setFabVisible] = useState(false);

  const scrollToTop = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({y: 0, animated: true});
    }
  };

  const handleScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setFabVisible(offsetY > 100); // Change the threshold as needed
  };

  return (
    <>
      <ScrollView
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        <Text>Your scrollable content1</Text>
        <Text>Your scrollable content2</Text>
        <Text>Your scrollable content3</Text>
        <Text>Your scrollable content4</Text>
        <Text>Your scrollable content5</Text>
        <Text>Your scrollable content6</Text>
        <Text>Your scrollable content7</Text>
        <View>
          <Image source={require('./assets/images/onboarding2.png')} />
          <Image source={require('./assets/images/onboarding2.png')} />
          <Image source={require('./assets/images/onboarding2.png')} />
          <Image source={require('./assets/images/onboarding2.png')} />
        </View>
      </ScrollView>
      {fabVisible && (
        <TouchableOpacity onPress={scrollToTop} style={styles.fab}>
          <Image
            source={require('./assets/icons/arrow-down.png')}
            style={{tintColor: 'white'}}
          />
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = {
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: 'blue',
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default ScrollToTopinRN;
