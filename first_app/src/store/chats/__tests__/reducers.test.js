import * as actions from "../actions";
import { chatsReducer } from "../reducer";

    describe('should handle ADD_CHAT', () => {
        it('should return the initial state with a new obj with name and id', () => {
            const payload = {
                name: 'asd',
                id: '123'
            }
            const addChatAction = {
                type: actions.ADD_CHAT,
                payload: payload,
            };
            const expected = [{id: payload.id, name: payload.name}];
            expect(chatsReducer([], addChatAction,)).toEqual(expected);
        });
    });

    describe.skip('should handle DELETE_CHAT', () => {
        it('should return an empty array(state) without an obj with certain id', () => {
            const state = [{id: '123', name: 'asda'}];

            const payload = {
                id: '123'
            }
            const deleteChatAction = {
                type: actions.DELETE_CHAT,
                payload: payload,
            };
            const expected = [];
            expect(chatsReducer(state, deleteChatAction)).toEqual(expected);
        });
    });