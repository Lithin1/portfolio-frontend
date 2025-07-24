import { configureStore } from '@reduxjs/toolkit';
import EducationReducer from './slice/educationSlice'
import ExperienceReducer from './slice/experienceSlice'
import ProjectReducer from './slice/projectSlice'
import AchievementReducer from './slice/achievementSlice'

const store = configureStore({
    reducer: {
        education : EducationReducer,
        experience : ExperienceReducer,
        project : ProjectReducer,
        achievement : AchievementReducer,
        
    },
}
)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;