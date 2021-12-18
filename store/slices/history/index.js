import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const historyCoinSlice = createSlice({
   name:"historyList",
   initialState:{
       list:[]
   },
   reducers:{
        setCoinHistory: (state, action) => {
        state.list = action.payload;
       },
       }
      

   }
)
export const {setCoinHistory} = historyCoinSlice.actions;
export default historyCoinSlice.reducer

export const fetchPriceByTime = (coin,period) => dispatch => {
    console.log(coin,period)
        axios
        .get(`https://api.coincap.io/v2/assets/${coin}/history?interval=${period}`)
        .then((response) => {
        
            let array = []
            console.log("hiiiiiistory",response.data)
           response.data.data.forEach(element => {
                array.push({
                    time:element.time,
                    price:element.priceUsd,
                })
            });
            
          dispatch(setCoinHistory(array))
        })
        .catch((error) => console.log(error));}     
   //}
