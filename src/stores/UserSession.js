import { writable } from 'svelte/store';

export const UserSessionStore = writable({ username: null, password: null });
