import { createSlice } from '@reduxjs/toolkit'

export const groupSlice = createSlice({
    name: 'group',
    initialState: {
        isLoading: false,
        groups: [],
        activeGroup: null,
        isError: false,
        errorMessage: null,
    },
    reducers: {
        fetchGroupRequest: (state) => {
            state.isLoadingGroups = true
        },
        fetchGroupSuccess: (state, { payload }) => {
            state.isLoadingGroups = false
            state.groups = payload
        },
        fetchGroupFailure: (state, { payload }) => {
            state.isLoading = false
            state.isError = true
            state.errorMessage = payload
        },
    },
})

export const { fetchGroupRequest, fetchGroupSuccess, fetchGroupFailure } =
    groupSlice.actions
