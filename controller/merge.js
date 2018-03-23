/*
* @Author: askMeWhy
* @Date:   2018-03-19 16:35:27
* @Last Modified by:   bigWave
* @Last Modified time: 2018-03-19 16:35:55
*/
const merge = (...arg) => {
	if (arg.length == 0) {
		throw Error(`merge error=>请传入需要合并的对象`);
	}
	let target = arg[0] || {},
		depath = false,
		length = arg.length,
		i = 1;

	if (Object.prototype.toString.call(target) == '[object Boolean]') {
		depath = target;
		target = arg[i];
		i++
	}

	if (typeof target !== "object") {
		target = {};
	}

	if (i == 2 && length <= 1) {
		throw Error(`merge error=>请传入需要合并的对象`);
	}

	for (; i < length; i++) {
		let source = arg[i] || {};
		if (source != null) {
			for (let key in source) {
				let src = target[key],
					copy = source[key];
				if (target === copy) {
					continue;
				}
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					if (depath && copy && (isObject(copy) || Array.isArray(copy))) {
						let clone;
						if (Array.isArray(copy)) {
							clone = src && Array.isArray(src) ? src : [];
						} else {
							clone = src && isObject(src) ? src : {};
						}
						target[key] = merge(depath, clone, copy);
					} else if (copy !== void 0) {
						target[key] = copy;
					}
				}
			}
		}
	}
	return target;
}
module.exports = { merge };