let count = 0;
export function fetchChits() {
    console.log('[b] Fetching all chits');

    return [
        {
            id: ++count,
            author: 'Martin',
            handle: '@martin',
            content: 'First Chit',
            likes: 0,
        },
        {
            id: ++count,
            author: 'Martin',
            handle: '@martin',
            content: 'Second Chit',
            likes: 0,
        },
    ];
}

export function incLikes(id) {
    console.log('[b] Incrementing likes for ', id);
}
