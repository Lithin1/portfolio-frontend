import type { EducationType } from "@/interfaces/educationInterface";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { EDUCATION_API, SERVER } from "@/constants/constant";


// Async Thunk for fetching education data
export const fetchEducation = createAsyncThunk<EducationType[]>(
  "education/fetchEducation",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${SERVER}${EDUCATION_API}`);
      return response.data.data; // Adjust this based on your controller response
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch education data");
    }
  }
);

interface EducationState {
  educations: EducationType[];
  loading: boolean;
  error: string | null;
}

const initialState: EducationState = {
  educations: [],
  loading: false,
  error: null,
};

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEducation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEducation.fulfilled, (state, action) => {
        state.educations = action.payload;
        state.loading = false;
      })
      .addCase(fetchEducation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default educationSlice.reducer;
