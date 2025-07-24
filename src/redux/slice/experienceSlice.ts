import type { ExperienceType } from "@/interfaces/experienceInterface";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { EXPERIENCE_API , SERVER} from "@/constants/constant";

export const fetchExperiences = createAsyncThunk<ExperienceType[]>(
  "experience/fetchExperiences",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${SERVER}${EXPERIENCE_API}`);
      return res.data.data; // Extracting only 'data' array
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message || "Failed to fetch experiences");
    }
  }
);

interface ExperienceState {
  experiences: ExperienceType[];
  loading: boolean;
  error: string | null;
}

const initialState: ExperienceState = {
  experiences: [],
  loading: false,
  error: null,
};

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExperiences.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExperiences.fulfilled, (state, action) => {
        state.experiences = action.payload;
        state.loading = false;
      })
      .addCase(fetchExperiences.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default experienceSlice.reducer;
