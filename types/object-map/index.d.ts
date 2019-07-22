// Type definitions for object-map 1.0
// Project: https://github.com/xixixao/object-map
// Definitions by: Wolfgang Faust <https://github.com/wolfgang42>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function objectMap<TInputObject, TOutputValue, TThis>(
	target: TInputObject,
	callback: (this: TThis, currentValue: TInputObject[keyof TInputObject], key: keyof TInputObject, object: TInputObject) => TOutputValue,
	thisArg?: TThis
): {[k in keyof TInputObject]: TOutputValue};

export = objectMap;
