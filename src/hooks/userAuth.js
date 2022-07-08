import {useSelector} from 'react-redux';

export function useAuth() {
    const {token, isAuth} = useSelector(state => state.user);
    
    return {
        isAuth,
        token
    };
}