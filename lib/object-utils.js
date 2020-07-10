/*
 * (c) Artur Doruch <arturdoruch@interia.pl>
 */

export default {
    /**
     * Filters object with allowed property keys.
     *
     * @param {object} object The object to filter.
     * @param {[]} allowedKeys An array of allowed property keys.
     *
     * @return {{}} The new object with allowed property keys.
     */
    filter(object, allowedKeys) {
        let filtered = {};

        for (let key of allowedKeys) {
            if (object.hasOwnProperty(key)) {
                filtered[key] = object[key];
            }
        }

        return filtered;
    },

    /**
     * Filters object with matches property key regexp.
     *
     * @param {object} object
     * @param {RegExp} keyPattern Object property key as regexp.
     */
    filterByKeyPattern(object, keyPattern) {
        for (const key in object) {
            if (!keyPattern.test(key)) {
                delete object[key];
            }
        }
    },

    /**
     * Checks if an object has property with key regexp pattern.
     *
     * @param {object} object
     * @param {RegExp} keyPattern Object property key as regexp.
     *
     * @returns {boolean}
     */
    hasKeyPattern(object, keyPattern) {
        for (const key in object) {
            if (keyPattern.test(key)) {
                return true;
            }
        }

        return false;
    }
}