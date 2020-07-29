import { CustomComponent } from '../types/project';
import { FormItemType } from '../constant';

export function isUndefined(param: any): param is undefined {
    return typeof param === 'undefined' && Object.prototype.toString.call(param).includes('Undefined');
}

export function isTotalWord(param: string): boolean {
    return /^[a-zA-Z]+$/g.test(param);
}

export function isFunction(param: any): param is Function {
    return typeof param === 'function';
}

export function isObject(param: any): param is Object {
    return Object.prototype.toString.call(param) === '[object Object]';
}

export function isCustomCompTree(param: any): param is CustomComponent {
    return param.type === FormItemType.CUSTOM;
}

export function isString(param: any): param is string {
    return typeof param === 'string';
}

export function isEmptyArray(params: any) {
    return Array.isArray(params) && params.length === 0;
}
