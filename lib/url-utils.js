/*
 * (c) Artur Doruch <arturdoruch@interia.pl>
 */

export default {
    /**
     * Parses query string into object.
     *
     * @param {string} queryString
     * @return {{}}
     */
    parseQueryString(queryString) {
        queryString = queryString.replace(/^\?/, '');

        if (!queryString) {
            return {};
        }

        let queries = queryString.split('&'),
            parameters = {},
            parts,
            nameParts,
            name,
            names,
            value;

        let addParameter = function(parameters, names, value, isArrayValue) {
            let params = parameters,
                totalLevels = names.length,
                name;

            for (let i = 0; i < totalLevels; i++) {
                name = decodeURIComponent(names[i]);

                if (params[name] === undefined) {
                    params[name] = (i + 1 === totalLevels && isArrayValue) ? [] : {};
                }

                if (i + 1 === totalLevels) {
                    if (isArrayValue) {
                        params[name].push(value);
                    } else {
                        params[name] = value;
                    }
                }

                params = params[name];
            }

            return parameters;
        };

        for (let i in queries) {
            parts = queries[i].split('=');
            nameParts = decodeURIComponent(parts[0]).match(/^(\w+)((?:\[\w+\])+)?(\[\])?$/);
            name = nameParts[1];
            value = decodeURIComponent(parts[1]);

            if (nameParts[2] !== undefined) {
                names = nameParts[2].match(/\w+/g);
                names.unshift(name);
                parameters = addParameter(parameters, names, value, nameParts[3] === '[]');
            } else {
                parameters[decodeURIComponent(name)] = value;
            }
        }

        return parameters;
    },

    /**
     * @param {string} url
     * @return {{}}
     */
    parseUrl(url) {
        const anchor = document.createElement('a');
        anchor.href = url;

        return {
            protocol: anchor.protocol,
            hostname: anchor.hostname,
            port: anchor.port,
            pathname: anchor.pathname,
            search: anchor.search.replace(/^\?/, ''),
            hash: anchor.hash,
            origin: anchor.origin
        };
    }
};
