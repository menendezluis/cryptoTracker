import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const coinsGeckoSlice = createSlice({
   name:"coinsGeckoList",
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
export const {setcoinList} = coinsGeckoSlice.actions;
export default coinsGeckoSlice.reducer

export const fetchCoinGeckoList = () => dispatch => {
        axios
        .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false")
        .then((response) => {
        
            let array = []
           console.log("gecko",response.data)
           response.data.forEach(element => {
                array.push({
                    id:element.id,
                    name:element.name,
                    symbol:element.symbol,
                    image:element.image,
                    current_price:element.current_price,
                    market_cap:element.market_cap,
                    market_cap_rank:element.market_cap_rank,
                    fully_diluted_valuation: element.fully_diluted_valuation,
                    total_volume: element.total_volume,
                    high_24h: element.high_24h,
                    low_24h: element.low_24h,
                    price_change_24h: element.price_change_24h,
                    price_change_percentage_24h: element.price_change_percentage_24h,
                    market_cap_change_24h: element.market_cap_change_24h,
                    market_cap_change_percentage_24h: element.market_cap_change_percentage_24h,
                    circulating_supply: element.circulating_supply,
                    total_supply: element.total_supply,
                    max_supply: element.max_supply,
                    ath: element.ath,
                    ath_change_percentage: element.ath_change_percentage,
                    ath_date: element.ath_date,
                    atl: element.atl,
                    atl_change_percentage: element.atl_change_percentage,
                    atl_date: element.atl_date,
                    roi: element.roi,
                    last_updated: element.last_updated
                }
                )
            });
          dispatch(setcoinList(array))
        })
        .catch((error) => console.log(error));}     
   //}
