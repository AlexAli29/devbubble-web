import { create } from "zustand";

export interface IAuth {
	access_token: string;
}

interface IAuthActions {
	setAuth: (value: IAuth) => void;
	clearAuth: () => void;
}

const authInitialState: IAuth = {
	access_token: "",
};

export const useAuthStore = create<IAuth & IAuthActions>((set) => ({
	...authInitialState,
	setAuth: (value) => set(() => value),
	clearAuth: () => authInitialState,
}));
