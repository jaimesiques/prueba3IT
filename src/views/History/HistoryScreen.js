import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';

//Packages
import axios from 'axios';
import dayjs from 'dayjs';

//Components
import ListItem from './components/ListItem';

//Utils
import Header from '../../utils/Header';

//Styles
import {FontStyles} from '../../styles/FontStyles';
import Colors from '../../styles/Colors';

const HistoryScreen = ({route, navigation}) => {
  const {code} = route.params;
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState(null);

  //Functions

  //Renders

  let historyList = () => {
    return (
      <FlatList
        style={styles.flatList}
        data={data.serie}
        renderItem={({item}) => {
          return <ListItem data={item} />;
        }}
        keyExtractor={(item, index) => index}
      />
    );
  };

  //LifeCycle

  useEffect(() => {
    //Obtengo información desde API
    axios.get(`https://mindicador.cl/api/${code}`).then((res) => {
      setData(res.data);
      setLoader(false);
    });
  }, [code]);

  return (
    <View style={styles.main}>
      {loader ? (
        <ActivityIndicator
          style={styles.subContainer}
          size="large"
          color={Colors.LightBlue}
        />
      ) : (
        <View style={styles.loaderContainer}>
          <Header title={data.nombre} navigation={navigation} />
          {historyList()}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: Colors.PrimaryBlue},
  subContainer: {flex: 1},
});

export default HistoryScreen;
