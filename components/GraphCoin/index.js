import React, {useEffect, useState} from 'react';
//

// import all the components we are going to use
import {

   StyleSheet,
  Dimensions,
  Image,
  View,
  } from 'react-native';

  //import function to convert epoch time to readable time
import {timeConverter} from '../../utils'


//import React Native chart Kit for different kind of Chart
import {
  LineChart,
  } from 'react-native-chart-kit';
  import { fetchPriceByTime } from "../../store/slices/history";
  import {useDispatch,useSelector} from 'react-redux'

const GraphCoin = ({ coin }) => {
  const [historyTime, setHistoryTime] = useState({});
  console.log("coin",coin)
  const { list: historyList } = useSelector(state => state.history)
  const dispatch = useDispatch()
  useEffect( () => {
       dispatch(fetchPriceByTime(coin.id,'h1'))
  
  }, []);
  useEffect(() => {
    console.log("historyList",historyList)
    if(historyList.length > 0){
      let labels = []
      let data = []
      if(historyList.length > 0){
        historyList.forEach(element => {
          labels.push(new Date(element.time*1000).toLocaleString())
          data.push(parseFloat(element.price))
        });
        console.log("my new object",{labels,data})  
      }
      setHistoryTime({labels,datasets: data})
      
    }
  }, [historyList])
  




  console.log("history",historyList)
  const saveHistory = (labels,data) => {
    setHistoryTime({
      labels,
      datasets: [
        {
          data,
        },
      ],
  })   
  }


  console.log("historyTime",historyTime)
    return (
        <>
          <View style={styles.header}>
          <Image style={styles.image} source={{ uri: coin.image }} />
          </View>
          {historyList.length > 0 && historyList !== undefined ?
          <LineChart
            data={{
              labels: historyList?.map(item => new Date(item.time*1000).toLocaleString()),
              datasets: [
                {
                  data: historyList?.map(item => parseFloat(item.price)),
                },
              ],
            }}
            width={Dimensions.get('window').width }
            height={400}
            yAxisLabel={'$'}
            withInnerLines={false}
            withOuterLines={false}
         
            hideLegend = {true}
            chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fff",
                backgroundGradientTo: "#fff",
                
                stroke: "#ffa726",
              decimalPlaces: 2, 
              color: (opacity = 255) => `rgba(255, 0, 50, ${opacity})`,
              style: {
                borderRadius: 30,
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
          : null
          }
        </>
      );
}
export default GraphCoin;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
     
    },
    header: {
      textAlign: 'center',
      fontSize: 18,
     
      marginTop: 16,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    image: {
      width: 30,
      height: 30,
      marginTop: 10,
      marginBottom: 10,
    },
  });
  