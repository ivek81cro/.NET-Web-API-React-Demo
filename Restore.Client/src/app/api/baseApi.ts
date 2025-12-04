import { fetchBaseQuery, type BaseQueryApi, type FetchArgs } from "@reduxjs/toolkit/query"
import { startLoading, stopLoading } from "../layout/uiSlice";

const customBaseQuery = fetchBaseQuery({
    baseUrl: 'https://localhost:5001/api'
});

const sleep = () => new Promise(resolve => setTimeout(resolve, 1000)); // Simulate 1 second delay

export const baseQueryWithErrorHandling = async (args: string | FetchArgs, 
    api: BaseQueryApi, extraOptions: object) => {
        
        api.dispatch(startLoading());
        // Simulate network delay
        await sleep();
        
        const result = await customBaseQuery(args, api, extraOptions);
        api.dispatch(stopLoading());
        
        // Global error handling
        if (result.error) {
            // Handle the error here, e.g., log it or show a notification
            const { status, data } = result.error;
            console.log(`Error ${status}:`, data);
        }
        return result;
    }