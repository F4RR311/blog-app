import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state:DeepPartial<LoginSchema> = { username: '123' };
        expect(loginReducer(
state as LoginSchema,
loginActions.setUsername('21313'),
        )).toEqual({ username: '21313' });
    });

    test('test set password', () => {
        const state:DeepPartial<LoginSchema> = { password: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('21313'),
        )).toEqual({ password: '21313' });
    });
});
