/* Extract a list of property values.
 *
 * |Name  |Type        |Desc                           |
 * |------|------------|-------------------------------|
 * |obj   |object array|Collection to iterate over     |
 * |key   |string array|Property path                  |
 * |return|array       |New array of specified property|
 *
 * ```javascript
 * var stooges = [
 *     {name: 'moe', age: 40},
 *     {name: 'larry', age: 50},
 *     {name: 'curly', age: 60}
 * ];
 * pluck(stooges, 'name'); // -> ['moe', 'larry', 'curly']
 * ```
 */

_('map property');

function exports(obj, key)
{
    return map(obj, property(key));
}