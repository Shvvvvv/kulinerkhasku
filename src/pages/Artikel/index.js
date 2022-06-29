import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  View,
  Text,
  ScrollView,
} from 'react-native';
import React from 'react';
import cilok from '../../assets/image/cilok.jpg';

const Artikel = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#33907C" />
      <ScrollView
        style={{
          maxHeight: '100%',
          maxWidth: '100%',
        }}>
        <View style={{height: 300, width: '100%', backgroundColor: 'black'}}>
          <ImageBackground
            source={cilok}
            resizeMode="cover"
            style={{height: '100%', width: '100%'}}
          />
        </View>
        <View style={{paddingBottom: 20, position: 'relative'}}>
          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              alignSelf: 'center',
              position: 'absolute',
              top: '80%',
              borderRadius: 10,
              padding: 15,
            }}>
            <Text style={{color: 'black', textAlign: 'justify'}}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham. There are many variations of passages
              of Lorem Ipsum available, but the majority have suffered
              alteration in some form, by injected humour, or randomised words
              which don't look even slightly believable. If you are going to use
              a passage of Lorem Ipsum, you need to be sure there isn't anything
              embarrassing hidden in the middle of text. All the Lorem Ipsum
              generators on the Internet tend to repeat predefined chunks as
              necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum
              which looks reasonable. The generated Lorem Ipsum is therefore
              always free from repetition, injected humour, or
              non-characteristic words etc.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Artikel;

const styles = StyleSheet.create({});
