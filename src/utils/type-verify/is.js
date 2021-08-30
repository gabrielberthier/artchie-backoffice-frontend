export function isObject(A) {
  return (typeof A === "object" || typeof A === "function") && A !== null;
}

/**
 * Determine whether the given `promise` is a Promise.
 *
 * @param {*} promise
 *
 * @returns {Boolean}
 */
export function isPromise(promise) {
  return !!promise && typeof promise.then === "function";
}

export function isFunction(mightBeFunction) {
  if (mightBeFunction instanceof Function) {
    return true;
  }
  return (
    mightBeFunction && {}.toString.call(mightBeFunction) === "[object Function]"
  );
}

export function isDate(mightBeDate) {
  return (
    Object.prototype.toString.call(mightBeDate) === "[object Date]" &&
    !isNaN(mightBeDate)
  );
}
