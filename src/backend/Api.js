let count = 0;
export async function fetchChits() {
    console.log('[b] Fetching all chits');

    const response = await fetch('http://localhost:3000/chits');
    const data = await response.json();
    console.log('[b] Data: ', data);
    return data;
}

export async function incLikes(id, newCount) {
    console.log('[b] Incrementing likes for ', id, newCount);

    const data = { likes: newCount };
    const settings = {
        method: 'PATCH',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    try {
        const url = `http://localhost:3000/chits/${id}`;
        const response = await fetch(url, settings);
        const data = await response.json();
        return data;
    } catch (e) {
        return e;
    }
}

export async function deleteChit(id) {
    console.log('[b] Deleting Chit ', id);

    const settings = {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };

    try {
        const url = `http://localhost:3000/chits/${id}`;
        const response = await fetch(url, settings);
        const data = await response.json();
        return data;
    } catch (e) {
        return e;
    }
}
