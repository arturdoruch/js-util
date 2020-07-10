/*
 * (c) Artur Doruch <arturdoruch@interia.pl>
 */

export default {
    /**
     * Repeats the string.
     *
     * @param {string} string
     * @param {int} multiplier
     * @returns {string}
     */
    repeat(string, multiplier) {
        let result = '',
            i = 0;

        while (i++ < multiplier) {
            result += string;
        }

        return result;
    },

    /**
     * Converts a string with underscores or dashes into camel case notation.
     * E.g. foo_bar -> fooBar, foo-bar -> fooBar
     *
     * @param {string} string
     * @param {boolean} [capitaliseFirstChar = false] Capitalise the first char in string.
     * @returns {string}
     */
    camelize(string, capitaliseFirstChar) {
        if (capitaliseFirstChar === true) {
            string = string.replace(/^([a-z])/, function (match, char) {
                return char.toUpperCase();
            })
        }

        return string.replace(/[\-_]([a-z\d])/g, function(match) {
            return match[1].toUpperCase();
        });
    },

    /*
     * @todo Improve
     *
     * @param {string} string
     * @returns {string}
     */
    /*humanize(string) {
        string = string.replace(/([A-Z])/g, function(match) {
            return match[0] = ' ' + match[0].toLowerCase();
        });

        return string.charAt(0).toUpperCase() + string.slice(1);
    },*/

    /**
     * Copies given string into system clipboard.
     *
     * @param {string} string
     */
    copyToClipboard(string) {
        const input = document.createElement('input');

        input.setAttribute('value', string);
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
    }
};
