import { writable } from 'svelte/store';
import { incLikes, fetchChits } from '../backend/Api';
// export const ChitStore = writable([
//     { id: 1, author: 'Martin', handle: '@martin', content: 'First Chit' },
//     { id: 2, author: 'SA', handle: '@saassan', content: 'ASdasdsasda' },
// ]);

function createChitStore() {
    let count = 3;
    const { subscribe, set, update } = writable(fetchChits());

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
        deleteChit: (id) => {
            update((pastChits) => {
                return pastChits.filter((chit) => {
                    return chit.id !== id;
                });
            });
        },
        likeChit: (id) => {
            update((pastChits) => {
                incLikes(id);
                return pastChits.map((chit) => {
                    if (chit.id === id) {
                        chit.likes += 1;
                    }
                    return chit;
                });
            });
        },
    };
}

export const ChitStore = createChitStore();
