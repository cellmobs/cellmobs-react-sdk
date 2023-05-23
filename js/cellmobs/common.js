/**
 * Common Utility Functions
 */
import parse from 'html-react-parser';
import { CDN_BASE_URL } from './constants';
import jwtDecode from 'jwt-decode';
import { use } from 'react';

export const parsePageSection = (page, key, defaultData) => {
    return page.sections && key in page.sections && 'data' in page.sections[key] ?
        parse(page.sections[key].data)
        : (defaultData ? parse(defaultData) : parse(''))
}

const renditionType = {
    MASTER: 'masterPath',
	LARGE: 'largePath',
	MEDIUM: 'path',
	SMALL: 'smallPath',
	THUMBNAIL: 'thumbnailPath',
	LARGE_THUMBNAIL: 'thumbnailPathLarge'
}

export const getPrimaryContent = (page, defaultData, rendition) => {
    return page.primaryContent ?
        `${CDN_BASE_URL}${page.primaryContent[rendition in renditionType ? renditionType[rendition] : 'path']}`
        : (defaultData ? defaultData : '')
}

export const ObjectId = (m = Math, d = Date, h = 16, s = s => m.floor(s).toString(h)) =>
    s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h))

export const queryString = (params) => 
    Object.keys(params).length > 0 ? '?' + Object.keys(params).map(key => key + '=' + params[key]).join('&') : ''

export const mapTags = (tags) => {
    return tags.reduce((total, current) => {
        total[current.tag] = current
        return total
    }, {})
}

export const formatDate = (epoch) => {
    if (!epoch) return ''
    return new Date(epoch).toLocaleDateString()
}

export const extractPageTags = (page, params, tagMap) => {
    const parentTag = (obj) => {
        if (!obj.tagStrings || obj.tagStrings.length == 0) {
            return {}
        }
        for (let tagString of obj.tagStrings) {
            if (tagString in tagMap && !tagMap[tagString].parentTag) {
                return tagMap[tagString]
            }
        }
        return {}
    }

    const childTag = (obj, parent) => {
        if (!obj.tagStrings || obj.tagStrings.length == 0) {
            return {}
        }
        for (let tagString of obj.tagStrings) {
            if (tagString in tagMap && tagMap[tagString].parentTag == parent) {
                return tagMap[tagString]
            }
        }
        return {}
    }

    const parent = params.parent ? tagMap[params.parent] : parentTag(page)
    const child = childTag(page, parent.tag)
    const path = child ? `/${parent.tag}/${child.tag}${page.path}` : '#'

    return {parent, child, path}
}


export function isError(obj){
    if (!obj) return true
    return Object.prototype.toString.call(obj) === "[object Error]";
}

export const getField = (obj, key) => {
    return key.split('.').reduce((prev, curr) => prev ? prev[curr] : undefined, obj)
}

export const formatStorage = (num) =>{
    if (num >= 1e12){
        num = (num / 1e12).toFixed(1) + "TB"
    } else if (num >= 1e9){
        num = (num / 1e9).toFixed(1) + "GB"
    } else if (num >= 1e6){
      num = (num / 1e6).toFixed(1) + "MB"
    } else if (num >= 1e3){
      num = (num / 1e3).toFixed(0) + "KB"
    }
    return num;
}


export const formatValue = (value, type) => {
    if (type == 'Date') {
        return value ? new Date(value).toLocaleDateString() : ''
    }
    else if (['Double', 'Float', 'BigDecimal'].includes(type)) {
        return round(value, 2)
    }
    else if (type == 'Boolean') {
        return value ? 'Yes' : 'No'
    }
    return value
}

export const formatDefaultValue = (value, type) => {
    if (type == 'Date') {
        return value ? new Date(value).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
    }
    return value
}

export const setField = (obj, field, value) => {
    var schema = obj
    var pList = field.key.split('.')
    var len = pList.length
    for (var i = 0; i < len-1; i++) {
        var elem = pList[i]
        if (!schema[elem]) {
            schema[elem] = {}
        }
        schema = schema[elem]
    }
    schema[pList[len-1]] = mapValue(value, field.simpleType);
    return obj
}

export const mapValue = (value, type) => {
    if (type == null || type == "String") {
        return value;
    }
    else if (type == "Boolean") {
        return parseBoolean(value);
    }
    else if (type == "Integer") {
        return parseInt(value);
    }
    else if (type == "Double") {
        return parseDouble(value);
    }
    else if (type == "Float") {
        return parseFloat(value);
    }
    else if (type == "Long") {
        return parseInt(value)
    }
    else if (type == "Date") {
        return new Date(`${value}T00:00:00`).getTime()
    }
    else if (type == "BigDecimal") {
        return parseDouble(value);
    }
    return value
}

export const round = (value, n) => {
    let pow = Math.pow(10, n)
    return Math.round(value * pow) / pow
}

export const jwtIsValid = (jwt) => {
    if (!jwt) return false
    // should also verify the identity id in the token
    var { exp } = jwtDecode(jwt)
    var now = new Date()
    if (exp < Math.floor(now.getTime()/1000)) {
        return false
    }
    return true
}

export function numberWithCommas(x) {
    if (x == null) return null
    const value = typeof x == 'string' ? x : x.toString()
    return x.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }); 
}

export function currencyWithCommas(x) {
    if (x == null) return null
    const value = typeof x == 'string' ? x : x.toString()
    return x.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'USD',
      }); 
}

export function hasAdminRole(){

    let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    if(user){
        return user.role == 'ROLE_ADMIN' || user.role == 'ROLE_SYSADMIN'
    }
    return false
}