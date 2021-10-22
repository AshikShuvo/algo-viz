import { configureStore } from "@reduxjs/toolkit";
const Store=configureStore({
    reducer:{}
});
type RootState=ReturnType<typeof Store.getState>
export default Store;