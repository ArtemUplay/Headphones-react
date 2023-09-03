import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { store } from 'src/redux/store';

export type RootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
