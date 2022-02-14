import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
} from 'react-native';

//Packages
import axios from 'axios';
import dayjs from 'dayjs';

//Components
import Chart from './components/Chart';

//Utils
import Header from '../../utils/Header';

//Styles
import {FontStyles} from '../../styles/FontStyles';
import Colors from '../../styles/Colors';

//Services
import useAxios from '../../services/useAxios';

const DetailScreen = ({route, navigation}) => {
  const {code} = route.params;
  const [loader, setLoader] = useState(true);
  const {data, getDataDetail} = useAxios(setLoader);

  //Functions

  //Renders

  let renderInfoBox = () => {
    let valor;
    if (data.unidad_medida !== 'Porcentaje') {
      valor = `$${data.serie[0].valor}`;
    } else {
      valor = `${data.serie[0].valor}%`;
    }

    let infoText = (title, value) => {
      return (
        <View style={styles.infoBoxSubContainer}>
          <Text style={[FontStyles.p2_m, styles.title]}>{title}</Text>
          <Text style={[FontStyles.h5_b, styles.titleDetail]}>{value}</Text>
        </View>
      );
    };

    return (
      <View style={styles.infoBoxContainer}>
        <View style={styles.infoBoxRow}>
          {infoText('Nombre', data.nombre)}
          {infoText('Valor', valor)}
        </View>
        <View style={styles.infoBoxRow2}>
          {infoText('Fecha', dayjs(data.serie[0].fecha).format('YYYY-MM-DD'))}
          {infoText('Unidad de medida', data.unidad_medida)}
        </View>
      </View>
    );
  };

  //LifeCycle

  useEffect(() => {
    getDataDetail(code);
  }, []);

  return (
    <View style={styles.main}>
      {loader ? (
        <ActivityIndicator
          style={styles.subContainer}
          size="large"
          color={Colors.LightBlue}
        />
      ) : (
        <View style={styles.subContainer}>
          <Header title={data.nombre} navigation={navigation} />
          {renderInfoBox()}
          <Chart data={data} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: Colors.PrimaryBlue},
  subContainer: {flex: 1},
  infoBoxContainer: {
    marginHorizontal: 10,
    padding: 10,
    marginBottom: 20,
    borderRadius: 16,
    backgroundColor: Colors.SecondaryBlue,
  },
  infoBoxRow: {
    flexDirection: 'row',
  },
  infoBoxRow2: {
    flexDirection: 'row',
    marginTop: 10,
  },
  infoBoxSubContainer: {flex: 1},
  title: {color: Colors.Gray},
  titleDetail: {color: Colors.White},
});

export default DetailScreen;
