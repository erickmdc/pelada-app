import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PartidaState {
  jogadoresCasa: Array<string>;
  jogadoresFora: Array<string>;
  placarCasa: number;
  placarFora: number;
}

const initialState: PartidaState = {
  jogadoresCasa: ['Suygetsu', 'Ardiis', 'Ange1', 'Shao', 'Zyppan', 'Doombros'],
  jogadoresFora: ['Tacolilla', 'Adverso', 'Kingg', 'Shyy', 'Melser', 'Onur'],
  placarCasa: 0,
  placarFora: 0
};

export const partidaSlice = createSlice({
  name: 'partida',
  initialState,
  reducers: {
    addJogadorCasa: (state, action: PayloadAction<string>) => {
      state.jogadoresCasa.push(action.payload)
    },
    addJogadorFora: (state, action: PayloadAction<string>) => {
      state.jogadoresFora.push(action.payload)
    },
    addGolCasa: (state) => {
      state.placarCasa += 1;
    },
    addGolFora: (state) => {
      state.placarFora += 1;
    }
  }
});

export const { addGolCasa, addGolFora, addJogadorCasa, addJogadorFora } = partidaSlice.actions;
export default partidaSlice.reducer;