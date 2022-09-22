import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isPending: false,
    isSuccess: false,
    errorMessage: '',
    posts: [],
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return response.data   
    } catch (e) {
        throw(e)
    }
})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(fetchPosts.pending, (state) => {
            state.isPending = true
            state.isSuccess = false
            state.errorMessage = ''
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.isPending = false
            state.isSuccess = false
            state.errorMessage = action.error.message
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = [...action.payload]
            state.isSuccess = true
            state.isPending = false
            state.errorMessage = ''
        })
    }
})
export default postsSlice.reducer