class EventEmitter {
    events = new Map();

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
	subscribe(eventName, callback) {
        if (!this.events.has(eventName)) this.events.set(eventName, [])
        
        const listeners = this.events.get(eventName);
        listeners.push(callback)

		return {
			unsubscribe: () => {
				const idx = listeners.indexOf(callback);
                listeners.splice(idx, 1)
			}
		};
	}
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
	emit(eventName, args = []) {
        const listeners = this.events.get(eventName);
        
        if (!listeners) return [];
        
        return listeners.map(listener => listener(...args))
	}
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */