import React from 'react';
import {StyleSheet, View, ScrollView, Dimensions} from 'react-native';

//Packages
import {LineChart} from 'react-native-chart-kit';
import dayjs from 'dayjs';

//Styles
import Colors from '../../../styles/Colors';

export default function Chart({data}) {
  let renderChart = () => {
    let labels = [];
    let values = [];

    data.serie.forEach((element, index) => {
      if (index < 10) {
        labels.push(dayjs(element.fecha).format('DD/MM'));
        values.push(element.valor);
      }
    });

    const chartData = {
      labels: labels.reverse(),
      datasets: [
        {
          data: values.reverse(),
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
          strokeWidth: 2,
        },
      ],
    };

    return (
      <View style={styles.mainContainer}>
        <LineChart
          data={chartData}
          width={Dimensions.get('window').width - 20}
          height={300}
          verticalLabelRotation={30}
          chartConfig={{
            backgroundGradientFrom: Colors.PrimaryBlue,
            backgroundGradientTo: Colors.PrimaryBlue,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    mainContainer: {
      alignItems: 'center',
      marginTop: 40,
    },
  });

  return <ScrollView>{renderChart()}</ScrollView>;
}
