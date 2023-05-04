

import { useMutation, useQuery, useQueryClient } from 'react-query'
import { changeFollowState, getIsFollowing } from '../services/UserService'
import { keys } from './queryKeys'
import {  useSelector } from 'react-redux';


/**
 * Mutate the state of the follow cache system
 * over a pair of users.
 * In order to do this action optimistically we mutate
 * the data as soon as the request is made, not waiting for the
 * firestore response.
 * 
 * @param {Object} options to be passed along to useQuery
 * @returns 
 */
export const useFollowingMutation = (options = {}) => {
    const queryClient = useQueryClient()
    return useMutation(changeFollowState, {
        ...options,
        onMutate: variables => {
            queryClient.setQueryData(
                keys.userFollowing(currentUserObj.id, variables.otherUserId),
                !variables.isFollowing)
        }
    })
}