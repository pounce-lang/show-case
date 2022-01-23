let lastId = 0;

const nextId = (prefix='id') => {
    lastId++;
    return `${prefix}${lastId}`;
}

export default nextId;