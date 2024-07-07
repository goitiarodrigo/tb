import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import Files from '../../services/files.service';

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
        filesNames: undefined,
        loadingValidsFiles: false,
        loadingFileData: false,
        loading: false,
        error: null,
    },
    reducers: {
        setResetFileData: (state) => {
            state.fileData = undefined;
            state.loadingFileData = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchValidsFiles.pending, (state) => {
                state.loadingValidsFiles = true;
            })
            .addCase(fetchValidsFiles.fulfilled, (state, action) => {
                state.loadingValidsFiles = false;
                state.files = action.payload;
            })
            .addCase(fetchValidsFiles.rejected, (state, action) => {
                state.loadingValidsFiles = false;
                state.error = action.error.message;
            })
            .addCase(fetchFileData.pending, (state) => {
                state.loadingFileData = true;
            })
            .addCase(fetchFileData.fulfilled, (state, action) => {
                state.loadingFileData = false;
                state.fileData = action.payload;
            })
            .addCase(fetchFileData.rejected, (state, action) => {
                state.loadingFileData = false;
                state.error = action.error.message;
            })
            .addCase(fetchFilesNames.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchFilesNames.fulfilled, (state, action) => {
                state.loading = false;
                state.filesNames = action.payload;
            })
            .addCase(fetchFilesNames.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setResetFileData } = fileSlice.actions;
export default fileSlice.reducer;
