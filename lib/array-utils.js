/*
 * (c) Artur Doruch <arturdoruch@interia.pl>
 */

export default {
    /**
     * Removes value from an array.
     *
     * @param {Array} array
     * @param {*} value The value to remove.
     *
     * @return {*}
     */
    removeValue(array, value) {
        const index = array.indexOf(value);
        if (index > -1) {
            array.splice(index, 1);
        }

        return array;
    }
}