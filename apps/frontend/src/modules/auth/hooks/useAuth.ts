import { useContext } from 'react';
import { AuthStore } from '../store/auth.store';

export const useAuth = () => useContext(AuthStore);