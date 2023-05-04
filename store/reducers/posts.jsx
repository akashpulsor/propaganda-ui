import { CURRENT_USER_POSTS_UPDATE } from '../../config/constants'

const initialState = {
    currentUserPosts: null,
    currentUserFeed:null
}

export const posts = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_USER_POSTS_UPDATE:
            return {
                ...state,
                currentUserPosts: action.currentUserPosts,
            }
    
        default:
            return state;
    }
}