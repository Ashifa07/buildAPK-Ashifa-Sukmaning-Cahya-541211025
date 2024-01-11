import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const App = () => {
  const figmaUrl = 'https://www.figma.com/file/MDShiEzq1vvvlrqVlYUloH/Hi-Toys-(Copy)?type=design&node-id=4-664&mode=design&t=HI4Te9igetkK0lWa-0';

  const openFigma = () => {
    Linking.openURL(figmaUrl);
  };

  const instagramUrl = 'https://www.instagram.com/Ashifasmc/';

  const openInstagram = () => {
    Linking.openURL(instagramUrl);
  };

  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', color: 'black', marginTop: 30 }}>My-Porto♡ </Text>
      </View>
      <View style={{ backgroundColor: 'white', padding: 30, alignItems: 'center' }}>
        <Image style={{ width: 200, height: 160, marginLeft: 60 }} source={require('../portofolioku/assets/profile.jpg')} />
      </View>
      <TextInput placeholder="Ashifa" style={{ backgroundColor: 'white', fontWeight: 'bold', textAlign: 'center' }} />
      <TextInput placeholder="I have two main hobbies that bring " style={{ backgroundColor: 'white', textAlign: 'center', marginLeft: 50, marginRight: 50 }} />
      <TextInput placeholder="me happiness and fulfillment. " style={{ backgroundColor: 'white', textAlign: 'center', marginLeft: 50, marginRight: 50 }} />
      <TextInput placeholder="The first one is reading and writing" style={{ backgroundColor: 'white', textAlign: 'center', marginLeft: 50, marginRight: 50 }} />
      <TextInput placeholder="stories to  experience the wonders " style={{ backgroundColor: 'white', textAlign: 'center', marginLeft: 50, marginRight: 50 }} />
      <TextInput placeholder="of words. The second one is web " style={{ backgroundColor: 'white', textAlign: 'center', marginLeft: 50, marginRight: 50 }} />
      <TextInput placeholder="programming in the front-end area" style={{ backgroundColor: 'white', textAlign: 'center', marginLeft: 50, marginRight: 50 }} />
      <View style={{ backgroundColor: 'pink', borderRadius: 20, borderColor: '#3e4278', borderWidth: 10, marginLeft: 80, marginRight: 80, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 30, marginBottom: 30 }}>
        <TouchableOpacity onPress={openInstagram}>
          <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>CONTACT ME</Text>
        </TouchableOpacity>
      </View>
      <TextInput placeholder="-----My Recent Project-----" style={{ backgroundColor: 'pink', fontWeight: 'bold', textAlign: 'center', color: '#3E4278' }} />
      <View style={{ backgroundColor: 'white', padding: 30, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image style={{ width: 170, height: 240 }} source={require('../portofolioku/assets/Hi-Toyz.png')} />
        <TouchableOpacity style={styles.arrowButton} onPress={openFigma}>
          <Image source={require('../portofolioku/assets/Button.png')} style={styles.arrowImage} />
        </TouchableOpacity>
      </View>
      <TextInput placeholder="Hi-Toys" style={{ backgroundColor: 'white', fontWeight: 'bold', marginLeft: 90 }} />
      <View style={{ backgroundColor: 'white', padding: 30, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
       <Image style={{ width: 200, height: 200 }} source={require('../portofolioku/assets/Calm.png')} />
        <TouchableOpacity style={styles.arrowButton} onPress={openFigma}>
          <Image source={require('../portofolioku/assets/Button.png')} style={styles.arrowImage} />
        </TouchableOpacity>
      </View>
      <TextInput placeholder="Calm" style={{ backgroundColor: 'white', fontWeight: 'bold', marginLeft: 100 }} />
      <View style={{ backgroundColor: 'white', padding: 30, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image style={{ width: 170, height: 100 }} source={require('../portofolioku/assets/JeTFlix.png')} />
        <TouchableOpacity style={styles.arrowButton} onPress={openFigma}>
          <Image source={require('../portofolioku/assets/Button.png')} style={styles.arrowImage} />
        </TouchableOpacity>
      </View>
      <TextInput placeholder="JeTFlix" style={{ backgroundColor: 'white', fontWeight: 'bold', marginLeft: 90, marginBottom: 50 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  arrowButton: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowImage: {
    width: 40,
    height: 40,
  },
});

export default App;
