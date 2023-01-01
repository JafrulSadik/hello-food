import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userRedux";

export default configureStore({
  reducer: { user: userSlice, },
}
);




// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import userSlice from "./userRedux";
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from "redux-persist";
//   import storage from "redux-persist/lib/storage";

//   const persistConfig = {
//     key: "root",
//     version: 1,
//     storage,
//   };

//   const persistedReducer = persistReducer(persistConfig, userSlice)

// export const store = configureStore({
//     reducer:  persistedReducer,
//         middleware: (getDefaultMiddleware) => getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//               },
//         }),
// })

// export let persistor = persistStore(store)
