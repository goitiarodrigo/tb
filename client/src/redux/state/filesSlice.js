import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import Files from '../../services/files.service.js';

export const fetchValidsFiles = createAsyncThunk('files/data', async () => {
    const response = await Files.getValidsFiles();

    return response;
});

export const fetchFileData = createAsyncThunk('file/filename', async (fileName) => {
    const response = await Files.getFileData(fileName);
    return response;
});

export const fetchFilesNames = createAsyncThunk('files/list', async () => {
    const response = await Files.getFilesNames();
    return response;
});

const fileSlice = createSlice({
    name: 'files',
    initialState: {
        files: undefined,
        fileData: undefined,
        filesSelected: undefined,
        filesNames: undefined,
        loadingFilesNames: false,
        loading: false,
        error: null,
    },
    reducers: {
        setResetFileData: (state) => {
            state.filesSelected = undefined;
            state.loading = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchValidsFiles.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchValidsFiles.fulfilled, (state, action) => {
                state.loading = false;
                state.filesSelected = action.payload;
            })
            .addCase(fetchValidsFiles.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchFileData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchFileData.fulfilled, (state, action) => {
                state.loading = false;
                state.filesSelected = action.payload;
            })
            .addCase(fetchFileData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchFilesNames.pending, (state) => {
                state.loadingFilesNames = true;
            })
            .addCase(fetchFilesNames.fulfilled, (state, action) => {
                state.loadingFilesNames = false;
                state.filesNames = action.payload;
            })
            .addCase(fetchFilesNames.rejected, (state, action) => {
                state.loadingFilesNames = false;
                state.error = action.error.message;
            });
    },
});

export const { setResetFileData } = fileSlice.actions;
export default fileSlice.reducer;
