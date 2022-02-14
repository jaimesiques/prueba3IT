import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';

//Packages
import GetLocation from 'react-native-get-location';

//Components
import ListItem from './components/ListItem';

//Utils
import Header from '../../utils/Header';

//Styles
import Colors from '../../styles/Colors';

//Services
import useAxios from '../../services/useAxios';

const MainScreen = ({navigation}) => {
  const [loader, setLoader] = useState(true);
  const {data, getData} = useAxios(setLoader);

  //Functions

  let getLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then((location) => {
        // console.log(location);
      })
      .catch((error) => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };

  //Renders

  let renderList = () => {
    return (
      <FlatList
        style={styles.flatList}
        data={data}
        renderItem={({item}) => {
          return <ListItem data={item} navigation={navigation} />;
        }}
        keyExtractor={(item, index) => index}
      />
    );
  };

  //LifeCycle

  useEffect(() => {
    //Aplicación de función nativa
    getLocation();
    //Obtengo información desde API
    getData();
  }, []);

  return (
    <View style={styles.main}>
      {loader ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator
            style={styles.subContainer}
            size="large"
            color={Colors.LightBlue}
          />
        </View>
      ) : (
        <View style={styles.loaderContainer}>
          <Header title={'Indicadores Económicos'} />
          {renderList()}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: Colors.PrimaryBlue},
  subContainer: {flex: 1},
  item_line: {height: 1, width: '100%', backgroundColor: 'gray'},
  loaderContainer: {flex: 1},
});

export default MainScreen;
