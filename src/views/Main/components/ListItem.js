import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

//Styles
import {FontStyles} from '../../../styles/FontStyles';
import Colors from '../../../styles/Colors';

export default function ListItem({data, navigation}) {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('History', {code: data.codigo});
        }}>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <View style={styles.iconSubContainer}>
              <Image
                style={styles.icon}
                source={
                  data.unidad_medida === 'Porcentaje'
                    ? require('../../../assets/icons/percent_icon.png')
                    : require('../../../assets/icons/dollar_icon.png')
                }
              />
            </View>
          </View>
          <View style={styles.subContainer}>
            <Text style={[FontStyles.p1_m, styles.text]}>{data.nombre}</Text>
            <Text style={[FontStyles.p2_m, styles.text]}>
              {data.unidad_medida}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => {
              navigation.navigate('Details', {code: data.codigo});
            }}>
            <Text style={[FontStyles.p2_m, {color: Colors.White}]}>
              Detalle
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 10,
    marginBottom: 8,
    paddingVertical: 4,
    backgroundColor: Colors.SecondaryBlue,
    borderRadius: 12,
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignItems: 'center',
  },
  subContainer: {flex: 1},
  iconContainer: {
    backgroundColor: Colors.DarkGray,
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  iconSubContainer: {width: 18, height: 18},
  icon: {width: '100%', height: '100%'},
  text: {color: Colors.Gray},
  detailsButton: {
    backgroundColor: '#5C6092',
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 10,
  },
});
