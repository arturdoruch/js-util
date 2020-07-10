/*
 * (c) Artur Doruch <arturdoruch@interia.pl>
 */

/**
 * Checks object type.
 */
export default {
    /**
     * Whether the value is type of "undefined".
     *
     * @param {*} value
     * @returns {boolean}
     */
    isUndefined(value) {
        return typeof value === 'undefined';
    },

    /**
     * Whether the value is type of "boolean".
     *
     * @param {*} value
     * @returns {boolean}
     */
    isBoolean(value) {
        return typeof value === 'boolean';
    },

    /**
     * Whether the value is type of "string".
     *
     * @param {*} value
     * @returns {boolean}
     */
    isString(value) {
        return typeof value === 'string';
    },

    /**
     * Whether the value is type of "integer".
     *
     * @param {*} value
     * @returns {boolean}
     */
    isInteger(value) {
        return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
    },

    /**
     * Whether the value is type of "integer" with positive value.
     *
     * @param {*} value
     * @returns {boolean}
     */
    isPositiveInteger(value) {
        return this.isInteger(value) && value > 0;
    },

    /**
     * Whether the value is type of "number".
     *
     * @param {*} value
     * @returns {boolean}
     */
    isNumber(value) {
        return typeof value === 'number' && !isNaN(value);
    },

    /**
     * Whether the value is type of "array".
     *
     * @param {*} value
     * @returns {boolean}
     */
    isArray(value) {
        return Array.isArray(value);
    },

    /**
     * Whether the value is type of "function".
     *
     * @param {*} value
     * @returns {boolean}
     */
    isFunction(value) {
        return typeof value === 'function';
    },

    /**
     * Whether the value is type of "object".
     *
     * @param {*} value
     * @returns {boolean}
     */
    isObject(value) {
        return 'Object' === Object.prototype.toString.call(value).slice(8, -1);
    },
}