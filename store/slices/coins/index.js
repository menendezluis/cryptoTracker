import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const coinslice = createSlice({
   name:"coinsList",
   initialState:{
       list:[]
   },
   reducers:{
       setcoinList: (state, action) => {
        state.list = action.payload;
       },
       }

   }
)
export const {setcoinList} = coinslice.actions;
export default coinslice.reducer

export const fetchCoinList = () => dispatch => {
        axios
        .get("https://api.coinlore.net/api/tickers/?start=0&limit=50")
        .then((response) => {
            let array = []
            response.data.data.forEach(element => {
                array.push({
                    id:element.id,
                    name:element.name,
                    symbol:element.symbol,
                    price:element.price_usd,
                    market_cap:element.market_cap_usd,
                    volume:element.volume_usd_24h,
                    nameid: element.nameid,
                    rank: element.rank,
                    percent_change_24h: element.percent_change_24h,
                    percent_change_1h: element.percent_change_1h,
                    percent_change_7d: element.percent_change_7d,
                    price_btc: element.price_btc,
                    market_cap_usd: element.market_cap_usd,
                    volume24: element.volume24,
                    volume24a: element.volume24a
                })
            });
          dispatch(setcoinList(array))
        })
        .catch((error) => console.log(error));}     
   //}
