//
// Helper functions to split array in chuncks
// https://stackoverflow.com/a/50110834/1152876
//

/**
 * Splits an Array in chunks
 * @param myArray - the array to be split in chuncks
 * @param chunkSize {Integer} Size of every group (number of chuncks)
 */
export const toChunkArray = (myArray, chunkSize) => {
    const results = myArray.map((e, i) => {
        return i % chunkSize === 0 ? myArray.slice(i, i + chunkSize) : null;
    }).filter(e => { return e; });
    return results;
};


/**
 * Returns an array with arrays of the given size.
 *
 * @param myArray {Array} Array to split
 * @param chunkSize {Integer} Size of every group
 */
export const chunkArray = (myArray, chunk_size) => {
    var results = [];
    
    while (myArray.length) {
        results.push(myArray.splice(0, chunk_size));
    }
    
    return results;
};
