import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native';

const colorGitHub = '#010409';
const colorFontGitHub = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';
const urlToMyGitHub = 'https://github.com/CarlosEduardo31';
const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/53567018?v=4';

const App = () => {
  const handlePressGoToGitHub = async () => {
    const res = await Linking.canOpenURL(urlToMyGitHub);
    if(res){
      await Linking.openURL(urlTuMyGitHub);
    }
  }
  return (
<SafeAreaView style={style.container}>
  <StatusBar backgroundColor={colorGitHub} barStyle="ligh-content" />
    <View style={style.content}>
      <Image style={style.avatar} source={{uri:imageProfileGitHub}}/>
      <Text style={[style.defaultText, style.name]}>Hello Word</Text>
      <Text style={[style.defaultText, style.nickName]}>HelloWord</Text>
      <Text style={[style.defaultText, style.description]}>O que é “Hello World” na programação? O “Olá, mundo”, em português, é um pequeno código que pode ser desenvolvido em diferentes linguagens de programação. Seu objetivo é facilitar o conhecimento da estrutura básica e o funcionamento da linguagem.</Text>

  <View style={style.areaPixelArt}>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
       <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
       <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={[style.pixel, style.pixelLetras]}>
      </View>
       <View style={[style.pixel, style.pixelLetras]}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={[style.pixel, style.pixelLetras]}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
       <View style={[style.pixel, style.pixelLetras]}>
      </View>
       <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
       <View style={[style.pixel, style.pixelLetras]}>
      </View>
       <View style={style.pixel}>
      </View>
      <View style={[style.pixel, style.pixelLetras]}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
       <View style={[style.pixel, style.pixelLetras]}>
      </View>
       <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
     <View style={[style.pixel, style.pixelLetras]}>
      </View>
      <View style={style.pixel}>
      </View>
       <View style={[style.pixel, style.pixelLetras]}>
      </View>
       <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={[style.pixel, style.pixelLetras]}>
      </View>
       <View style={style.pixel}>
      </View>
       <View style={[style.pixel, style.pixelLetras]}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={[style.pixel, style.pixelLetras]}>
      </View>
       <View style={style.pixel}>
      </View>
       <View style={style.pixel}>
      </View>
      <View style={[style.pixel, style.pixelLetras]}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={[style.pixel, style.pixelLetras]}>
      </View>
       <View style={style.pixel}>
      </View>
       <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={[style.pixel, style.pixelLetras]}>
      </View>
      <View style={[style.pixel, style.pixelLetras]}>
      </View>
       <View style={style.pixel}>
      </View>
       <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={[style.pixel, style.pixelLetras]}>
      </View>
      <View style={style.pixel}>
      </View>
       <View style={style.pixel}>
      </View>
       <View style={style.pixel}>
      </View>
      <View style={[style.pixel, style.pixelLetras]}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View> 
      <View style={style.pixel}>
      </View>
       <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
       <View style={style.pixel}>
      </View>
       <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
       <View style={style.pixel}>
      </View>
       <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>
      <View style={style.pixel}>
      </View>      
  </View>
 
    <Pressable onPress={handlePressGoToGitHub}>
      <View style={style.button}>
        <Text style={style.textButton}>
          Open in GitHub
        </Text>
      </View>
    </Pressable>

    </View>
</SafeAreaView>
 );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGitHub,
    flex: 1, //expandir para tela inteira
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 30,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius:100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGitHub,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 10,
  },
  nickName: {
    fontSize: 18,
    color: colorDarkFontGitHub,
    marginBottom: 10,
  },
  description: {
    textAlign:"left",
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    backgroundColor:colorDarkFontGitHub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    color: colorFontGitHub,
    fontWeight: 'bold',
    fontSize: 16,
  },
  pixel: {
    backgroundColor: 'green',
    width: 12,
    height: 12,
    borderRadius: 3,
    margin: 2,
  },
  areaPixelArt: {
    flex: 1,
    width:260,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
   pixelLetras: {
    backgroundColor: '#00FF00',
  },
  
});