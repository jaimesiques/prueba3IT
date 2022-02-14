import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';

//Styles
import {FontStyles} from '../styles/FontStyles';
import Colors from '../styles/Colors';

export default function Header({title, navigation}) {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={Colors.DarkGray} barStyle="light-content" />
      {title !== 'Indicadores Económicos' ? (
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={styles.backButtonImage}
            source={require('../assets/icons/backArrow_icon.png')}
          />
        </TouchableOpacity>
      ) : null}

      <Text style={[FontStyles.h3_b, styles.title]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 50 : 15,
    marginBottom: 20,
    justifyContent: 'center',
  },
  backButtonContainer: {
    height: 25,
    width: 25,
    position: 'absolute',
    left: 15,
    zIndex: 2,
  },
  backButtonImage: {height: '100%', width: '100%'},
  title: {color: Colors.White, textAlign: 'center', paddingHorizontal: 45},
});
