import * as React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import gbr1 from '../assets/image/baso-tahu.jpg';
import gbr2 from '../assets/image/makanan.jpg';
import gbr3 from '../assets/image/makanan-khas.jpg';
import gbr4 from '../assets/image/cilok.jpg';
import gbr5 from '../assets/image/karedok.jpg';

export default class CR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          url: gbr1,
          teks: 'CEK DISINI',
        },
        {
          url: gbr2,
        },
        {
          url: gbr3,
        },
        {
          url: gbr4,
        },
        {
          url: gbr5,
        },
      ],
    };
  }

  _renderItem({item, index}) {
    return (
      <View
        style={{
          backgroundColor: 'transparent',
          height: 170,
          width: 320,
        }}>
        <ImageBackground
          source={item.url}
          resizeMode="cover"
          style={{
            flex: 1,
            borderRadius: 10,
            marginHorizontal: 10,
          }}
          imageStyle={{borderRadius: 10}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              borderRadius: 10,
              backgroundColor: 'rgba(0,0,0,.4)',
              paddingHorizontal: 30,
            }}>
            <Text style={{color: 'white', fontSize: 18}}>
              CARI KULINER KHAS?
            </Text>
            <TouchableOpacity>
              <View
                style={{
                  borderColor: 'white',
                  borderWidth: 2,
                  borderRadius: 50,
                  maxWidth: 120,
                  padding: 4,
                  marginTop: 10,
                }}>
                <Text style={{color: 'white', textAlign: 'center'}}>
                  CEK DISINI
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView
        style={{
          height: 190,
          backgroundColor: '#E5E5E5',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Carousel
            layout={'default'}
            ref={ref => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={100}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({activeIndex: index})}
          />
        </View>
      </SafeAreaView>
    );
  }
}
