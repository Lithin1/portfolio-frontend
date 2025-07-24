import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IAchievement } from "@/interfaces/achievementInterface";
import { ACHIEVEMENTS_API, SERVER } from "@/constants/constant";


// Async Thunk to fetch achievements
export const fetchAchievements = createAsyncThunk<IAchievement[]>(
  "achievement/fetchAchievements",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${SERVER}${ACHIEVEMENTS_API}`);
      return response.data?.data as IAchievement[];
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch achievements");
    }
  }
);

interface AchievementState {
  achievements: IAchievement[];
  loading: boolean;
  error: string | null;
}

const initialState: AchievementState = {
  achievements: [],
  loading: false,
  error: null,
};

const achievementSlice = createSlice({
  name: "achievement",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAchievements.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAchievements.fulfilled, (state, action: PayloadAction<IAchievement[]>) => {
        state.loading = false;
        state.achievements = action.payload;
      })
      .addCase(fetchAchievements.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default achievementSlice.reducer;
