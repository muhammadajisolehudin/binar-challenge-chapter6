import { createSlice } from '@reduxjs/toolkit'

export const manipulasiKotakMakeup = createSlice({
  name: 'kotakMakeupMama',
  initialState: {
    jumlahMakeup: 10,
    namaBrand: "lato lato",
    penerbit: "sari roit",
    listBedak: ["bedak tabur", "bedak foundation", "bedak halus"],
  }, 
  reducers : {

    KurangiMakeUp:(state)=>{
      state.jumlahMakeup=state.jumlahMakeup - 1
    },
    TambahMakeUp:(state)=>{
      state.jumlahMakeup=state.jumlahMakeup + 1
    },
    GantiBrand:(state, action)=>{
      state.namaBrand=action.payload.namaBrand
      state.penerbit=action.payload.penerbit
    },
    TambahBedak:(state, action)=>{
      state.listBedak.push(action.payload)
    },
    HapusBedakTerakhir: (state) => {
      state.listBedak.pop();
    },

  },
  
})


export const { KurangiMakeUp, TambahMakeUp, GantiBrand, TambahBedak, HapusBedakTerakhir  } = manipulasiKotakMakeup.actions

export default manipulasiKotakMakeup.reducer