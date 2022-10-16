import { writable } from 'svelte/store';
import { incLikes, fetchChits, deleteChit } from '../backend/Api';

// You can use $ChitStore if you just want to subscribe to data
function createChitStore() {
    let count = 3;
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        // set,
        update,
        addNewChit: (newChit) => {
            newChit.id = ++count;
            update((data) => {
                return [...data, newChit];
            });
        },
        deleteChit: async (id) => {
            update((pastChits) => {
                return pastChits.filter((chit) => {
                    return chit.id !== id;
                });
            });
            await deleteChit(id);
        },
        likeChit: (id) => {
            let newCount = 1;
            update((pastChits) => {
                incLikes(id);
                return pastChits.map((chit) => {
                    if (chit.id === id) {
                        chit.likes += 1;
                        newCount = chit.likes;
                    }
                    incLikes(id, newCount);
                    return chit;
                });
            });
        },
        loadChits: async () => {
            let data = await fetchChits();
            set(data);
        },
    };
}

export const ChitStore = createChitStore();
