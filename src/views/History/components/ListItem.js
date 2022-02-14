import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

//Packages
import dayjs from 'dayjs';

//Styles
import {FontStyles} from '../../../styles/FontStyles';
import Colors from '../../../styles/Colors';

export default function ListItem({data}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.textContainer1}>
            <Text style={[FontStyles.p2_m, styles.text]}>Fecha</Text>
            <Text style={[FontStyles.h4_b, styles.textDetail]}>
              {dayjs(data.fecha).format('YYYY-MM-DD')}
            </Text>
          </View>
          <View style={styles.textContainer2}>
            <Text style={[FontStyles.p2_m, styles.text]}>Valor</Text>
            <Text style={[FontStyles.h4_b, styles.textDetail]}>
              {data.valor}
            </Text>
          </View>
        </View>
      </View>
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
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  textContainer1: {flex: 1.5},
  textContainer2: {flex: 1},
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
  textDetail: {color: Colors.White},
});
