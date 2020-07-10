/*
 * (c) Artur Doruch <arturdoruch@interia.pl>
 */

export default {
    /**
     * Gets screen viewport width.
     * 
     * @return {Number}
     */
    getWidth() {
        return window.innerWidth !== null ? window.innerWidth : document.documentElement && document.documentElement.clientWidth
            ? document.documentElement.clientWidth : document.body !== null ? document.body.clientWidth : null;
    },

    /**
     * Gets screen viewport height.
     * 
     * @returns {Number}
     */
    getHeight() {
        return window.innerHeight !== null ? window.innerHeight : document.documentElement && document.documentElement.clientHeight
            ? document.documentElement.clientHeight : document.body !== null ? document.body.clientHeight : null;
    },

    /**
     * @return {Number}
     */
    getPageYOffset() {
        return window.pageYOffset || document.documentElement.scrollTop;
    },

    /**
     * @return {Number}
     */
    getPageXOffset() {
        return window.pageXOffset || document.documentElement.scrollLeft;
    },

    /**
     * Sets HTML element position on the screen. By default, the element is positioned centrally.
     *
     * @param {HTMLElement|string} element The positioned element. HTMLElement object or CSS selector.
     * @param {string} [vertical="center"] The vertical direction. One of: "top", "center", "bottom".
     * @param {string} [horizontal="center"] The horizontal direction. One of: "left", "center", "right".
     */
    setElementPosition(element, vertical, horizontal) {
        if (typeof element === 'string') {
            element = document.querySelector(element);
        }

        if (!(element instanceof HTMLElement)) {
            throw new TypeError('Argument "element" does not exist or has invalid type. It must be HTMLElement object or CSS selector.');
        }

        let style = element.style,
            wasHidden = false;

        style.margin = 0;
        if (style.screen !== 'absolute' && style.screen !== 'fixed') {
            style.screen = 'fixed';
        }
        if (style.display === 'none') {
            style.display = '';
            wasHidden = true;
        }

        if (!vertical || vertical === 'center') {
            style.top = ((this.getHeight() - element.offsetHeight) / 2) + 'px';
            style.bottom = 'auto';
        } else if (vertical === 'top') {
            style.top = 0;
            style.bottom = 'auto';
        } else if (vertical === 'bottom') {
            style.top = 'auto';
            style.bottom = 0;
        }

        if (!horizontal || horizontal === 'center') {
            style.left = ((this.getWidth() - element.offsetWidth) / 2) + 'px';
            style.right = 'auto';
        } else if (horizontal === 'left') {
            style.left = 0;
            style.right = 'auto';
        } else if (horizontal === 'right') {
            style.left = 'auto';
            style.right = 0;
        }

        if (wasHidden === true) {
            style.display = 'none';
        }
    }
};
