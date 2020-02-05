export const chunkArray = (options = [], size = 1) => {
    const results = [];

    for (let i = 0; i < options.length; i += size) {
        results.push(options.slice(i, i + size));
    }

    return results;
};