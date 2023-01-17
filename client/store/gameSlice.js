import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
  level: 1,
  lives: 5,
  score: 0,
  useTimer: false,
  timeLeft: 0,
  gameOver: false,
  correctAnswers: 0,
  multiplier: 2,
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setLevel: (state, action) => {
      state.level = action.payload
    },
    setLives: (state, action) => {
      state.lives = action.payload
    },
    setScore: (state, action) => {
      state.score = action.payload
    },
    setUseTimer: (state, action) => {
      state.useTimer = action.payload
    },
    setTimeLeft: (state, action) => {
      state.timeLeft = action.payload
    },
    setGameOver: (state, action) => {
      state.gameOver = action.payload
    },
    setCorrectAnswers: (state, action) => {
      state.correctAnswers = action.payload
    },
    setMultipler: (state, action) => {
      state.multiplier = state.level * 2
    },
  },
})

export const {
  setLevel,
  setLives,
  setScore,
  setGameOver,
  setCorrectAnswers,
  setTimeLeft,
  setUseTimer,
  setMultipler,
} = gameSlice.actions

export default gameSlice.reducer
