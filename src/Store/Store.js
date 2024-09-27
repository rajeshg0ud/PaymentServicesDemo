import {configureStore} from '@reduxjs/toolkit'
import Slice from './Slice';

const Store= configureStore({
    reducer:{
        'Slice' : Slice,
    }
})

export default Store;