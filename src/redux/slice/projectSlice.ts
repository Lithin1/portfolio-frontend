// src/redux/slice/projectSlice.ts
import { PROJECTS_API, SERVER } from '@/constants/constant';
import type { IProject } from '@/interfaces/projectInterface';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// AsyncThunk for fetching projects
export const fetchProjects = createAsyncThunk<IProject[]>(
  'projects/fetchProjects',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${SERVER}${PROJECTS_API}`);
      return response.data.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to fetch projects');
    }
  }
);

// Initial state
interface ProjectState {
  projects: IProject[];
  loading: boolean;
  error: string | null;
}

const initialState: ProjectState = {
  projects: [],
  loading: false,
  error: null,
};

// Project slice
const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.projects = action.payload;
        state.loading = false;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default projectSlice.reducer;
