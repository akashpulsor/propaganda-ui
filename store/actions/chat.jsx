import { CHATS_SET } from '../..config/constants';

export const setChats = data => dispatch =>
    dispatch({ data, type: CHATS_SET })