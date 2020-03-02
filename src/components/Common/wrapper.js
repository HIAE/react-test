/**
 * This library was created to emulate some jQuery features
 * used in this template only with Javascript and DOM
 * manipulation functions (IE10+).
 * All methods were designed for an adequate and specific use
 * and don't perform a deep validation on the arguments provided.
 *
 * IMPORTANT:
 * ==========
 * It's suggested NOT to use this library extensively unless you
 * understand what each method does. Instead, use only JS or
 * you might even need jQuery.
 */

(
  function (global, factory) {
    if (typeof exports === 'object') { // CommonJS-like
      module.exports = factory();
    } else if (typeof global.jQuery === 'undefined') {
      // Browser
      global.$ = factory();
    }
  }(this, () => {
    // HELPERS
    function arrayFrom(obj) {
      return ('length' in obj) && (obj !== window) ? [].slice.call(obj) : [obj];
    }

    function filter(ctx, fn) {
      return [].filter.call(ctx, fn);
    }

    function map(ctx, fn) {
      return [].map.call(ctx, fn);
    }

    function matches(item, selector) {
      return (Element.prototype.matches || Element.prototype.msMatchesSelector)
        .call(item, selector);
    }

    // Events handler with simple scoped events support
    const EventHandler = function () {
      this.events = {};
    };
    EventHandler.prototype = {
      // event accepts: 'click' or 'click.scope'
      bind(event, listener, target) {
        const type = event.split('.')[0];
        target.addEventListener(type, listener, false);
        this.events[event] = {
          type,
          listener,
        };
      },
      unbind(event, target) {
        if (event in this.events) {
          target.removeEventListener(this.events[event].type, this.events[event].listener, false);
          delete this.events[event];
        }
      },
    };

    // Object Definition
    const Wrap = function (selector) {
      this.selector = selector;
      return this._setup([]);
    };

    // CONSTRUCTOR
    Wrap.Constructor = function (param, attrs) {
      const el = new Wrap(param);
      return el.init(attrs);
    };

    // Core methods
    Wrap.prototype = {
      constructor: Wrap,
      /**
           * Initialize the object depending on param type
           * [attrs] only to handle $(htmlString, {attributes})
           */
      init(attrs) {
        // empty object
        if (!this.selector) return this;
        // selector === string
        if (typeof this.selector === 'string') {
          // if looks like markup, try to create an element
          if (this.selector[0] === '<') {
            const elem = this._setup([this._create(this.selector)]);
            return attrs ? elem.attr(attrs) : elem;
          } return this._setup(arrayFrom(document.querySelectorAll(this.selector)));
        }
        // selector === DOMElement
        if (this.selector.nodeType) return this._setup([this.selector]);
        if (typeof this.selector === 'function') return this._setup([document]).ready(this.selector);
        // Array like objects (e.g. NodeList/HTMLCollection)
        return this._setup(arrayFrom(this.selector));
      },
      /**
           * Creates a DOM element from a string
           * Strictly supports the form: '<tag>' or '<tag/>'
           */
      _create(str) {
        const nodeName = str.substr(str.indexOf('<') + 1, str.indexOf('>') - 1).replace('/', '');
        return document.createElement(nodeName);
      },
      /** setup properties and array to element set */
      _setup(elements) {
        let i = 0;
        for (; i < elements.length; i++) delete this[i]; // clean up old set
        this.elements = elements;
        this.length = elements.length;
        for (i = 0; i < elements.length; i++) this[i] = elements[i]; // new set
        return this;
      },
      _first(cb, ret) {
        const f = this.elements[0];
        return f ? (cb ? cb.call(this, f) : f) : ret;
      },
      /** Common function for class manipulation  */
      _classes(method, classname) {
        const cls = classname.split(' ');
        if (cls.length > 1) {
          cls.forEach(this._classes.bind(this, method));
        } else {
          if (method === 'contains') {
            const elem = this._first();
            return elem ? elem.classList.contains(classname) : false;
          }
          return (classname === '') ? this : this.each((i, item) => {
            item.classList[method](classname);
          });
        }
      },

      /**
       * Multi purpose function to set or get a (key, value)
       * If no value, works as a getter for the given key
       * key can be an object in the form {key: value, ...}
       */
      _access(key, value, fn) {
        if (typeof key === 'object') {
          for (const k in key) {
            this._access(k, key[k], fn);
          }
        } else if (value === undefined) {
          return this._first(elem => fn(elem, key));
        }
        return this.each((i, item) => {
          fn(item, key, value);
        });
      },
      each(fn, arr) {
        arr = arr || this.elements;
        for (let i = 0; i < arr.length; i++) {
          if (fn.call(arr[i], i, arr[i]) === false) break;
        }
        return this;
      },
    };

    /** Allows to extend with new methods */
    Wrap.extend = function (methods) {
      Object.keys(methods).forEach((m) => {
        Wrap.prototype[m] = methods[m];
      });
    };

    // DOM READY
    Wrap.extend({
      ready(fn) {
        if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
          fn();
        } else {
          document.addEventListener('DOMContentLoaded', fn);
        }
        return this;
      },
    });
    // ACCESS
    Wrap.extend({
      /** Get or set a css value */
      css(key, value) {
        const getStyle = function (e, k) { return e.style[k] || getComputedStyle(e)[k]; };
        return this._access(key, value, (item, k, val) => {
          const unit = (typeof val === 'number') ? 'px' : '';
          return val === undefined ? getStyle(item, k) : (item.style[k] = val + unit);
        });
      },
      /** Get an attribute or set it */
      attr(key, value) {
        return this._access(key, value, (item, k, val) => (
          val === undefined
            ? item.getAttribute(k)
            : item.setAttribute(k, val)
        ));
      },
      /** Get a property or set it */
      prop(key, value) {
        return this._access(key, value, (item, k, val) => (
          val === undefined ? item[k] : (item[k] = val)
        ));
      },
      position() {
        return this._first(elem => ({ left: elem.offsetLeft, top: elem.offsetTop }));
      },
      scrollTop(value) {
        return this._access('scrollTop', value, (item, k, val) => (val === undefined ? item[k] : (item[k] = val)));
      },
      outerHeight(includeMargin) {
        return this._first((elem) => {
          const style = getComputedStyle(elem);
          const margins = includeMargin
            ? (parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10))
            : 0;
          return elem.offsetHeight + margins;
        });
      },
      /**
           * Find the position of the first element in the set
           * relative to its sibling elements.
           */
      index() {
        return this._first(el => arrayFrom(el.parentNode.children).indexOf(el), -1);
      },
    });
    // LOOKUP
    Wrap.extend({
      children(selector) {
        let childs = [];
        this.each((i, item) => {
          childs = childs.concat(map(item.children, item => item));
        });
        return Wrap.Constructor(childs).filter(selector);
      },
      siblings() {
        let sibs = [];
        this.each((i, item) => {
          sibs = sibs.concat(filter(item.parentNode.children, child => child !== item));
        });
        return Wrap.Constructor(sibs);
      },
      /** Return the parent of each element in the current set */
      parent() {
        const par = map(this.elements, item => item.parentNode);
        return Wrap.Constructor(par);
      },
      /** Return ALL parents of each element in the current set */
      parents(selector) {
        const par = [];
        this.each((i, item) => {
          for (let p = item.parentElement; p; p = p.parentElement) par.push(p);
        });
        return Wrap.Constructor(par).filter(selector);
      },
      /**
           * Get the descendants of each element in the set, filtered by a selector
           * Selector can't start with ">" (:scope not supported on IE).
           */
      find(selector) {
        let found = [];
        this.each((i, item) => {
          found = found.concat(map(
            item.querySelectorAll(/* ':scope ' + */ selector),
            fitem => fitem,
          ));
        });
        return Wrap.Constructor(found);
      },
      /** filter the actual set based on given selector */
      filter(selector) {
        if (!selector) return this;
        const res = filter(this.elements, item => matches(item, selector));
        return Wrap.Constructor(res);
      },
      /** Works only with a string selector */
      is(selector) {
        let found = false;
        this.each((i, item) => !(found = matches(item, selector)));
        return found;
      },
    });
    // ELEMENTS
    Wrap.extend({
      /**
           * append current set to given node
           * expects a dom node or set
           * if element is a set, prepends only the first
           */
      appendTo(elem) {
        elem = elem.nodeType ? elem : elem._first();
        return this.each((i, item) => {
          elem.appendChild(item);
        });
      },
      /**
           * Append a domNode to each element in the set
           * if element is a set, append only the first
           */
      append(elem) {
        elem = elem.nodeType ? elem : elem._first();
        return this.each((i, item) => {
          item.appendChild(elem);
        });
      },
      /**
           * Insert the current set of elements after the element
           * that matches the given selector in param
           */
      insertAfter(selector) {
        const target = document.querySelector(selector);
        return this.each((i, item) => {
          target.parentNode.insertBefore(item, target.nextSibling);
        });
      },
      /**
           * Clones all element in the set
           * returns a new set with the cloned elements
           */
      clone() {
        const clones = map(this.elements, item => item.cloneNode(true));
        return Wrap.Constructor(clones);
      },
      /** Remove all node in the set from DOM. */
      remove() {
        this.each((i, item) => {
          delete item.events;
          delete item.data;
          if (item.parentNode) item.parentNode.removeChild(item);
        });
        this._setup([]);
      },
    });
    // DATASETS
    Wrap.extend({
      /**
           * Expected key in camelCase format
           * if value provided save data into element set
           * if not, return data for the first element
           */
      data(key, value) {
        const hasJSON = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;


        const dataAttr = `data-${key.replace(/[A-Z]/g, '-$&').toLowerCase()}`;
        if (value === undefined) {
          return this._first((el) => {
            if (el.data && el.data[key]) return el.data[key];

            const data = el.getAttribute(dataAttr);
            if (data === 'true') return true;
            if (data === 'false') return false;
            if (data === `${+data}`) return +data;
            if (hasJSON.test(data)) return JSON.parse(data);
            return data;
          });
        }
        return this.each((i, item) => {
          item.data = item.data || {};
          item.data[key] = value;
        });
      },
    });
    // EVENTS
    Wrap.extend({
      trigger(type) {
        type = type.split('.')[0]; // ignore namespace
        const event = document.createEvent('HTMLEvents');
        event.initEvent(type, true, false);
        return this.each((i, item) => {
          item.dispatchEvent(event);
        });
      },
      blur() {
        return this.trigger('blur');
      },
      focus() {
        return this.trigger('focus');
      },
      on(event, callback) {
        return this.each((i, item) => {
          if (!item.events) item.events = new EventHandler();
          event.split(' ').forEach((ev) => {
            item.events.bind(ev, callback, item);
          });
        });
      },
      off(event) {
        return this.each((i, item) => {
          if (item.events) {
            item.events.unbind(event, item);
            delete item.events;
          }
        });
      },
    });
    // CLASSES
    Wrap.extend({
      toggleClass(classname) {
        return this._classes('toggle', classname);
      },
      addClass(classname) {
        return this._classes('add', classname);
      },
      removeClass(classname) {
        return this._classes('remove', classname);
      },
      hasClass(classname) {
        return this._classes('contains', classname);
      },
    });

    return Wrap.Constructor;
  })
);
