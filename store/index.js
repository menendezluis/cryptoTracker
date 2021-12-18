import {configureStore} from '@reduxjs/toolkit'

//reducer
import coins from './slices/coins'
import coinsGecko from './slices/coinsGecko'
import history from './slices/history'

export default configureStore({
    reducer:{
        coins: coins,
        coinsGecko: coinsGecko,
        history: history
    
    }
})