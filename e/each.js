/* Iterates over elements of collection and invokes iteratee for each element.
 *
 * |Name    |Type        |Desc                          |
 * |--------|------------|------------------------------|
 * |obj     |object array|Collection to iterate over    |
 * |iteratee|function    |Function invoked per iteration|
 * |[ctx]   |*           |Function context              |
 *
 * ```javascript
 * each({'a': 1, 'b': 2}, function (val, key) {});
 * ```
 */

_('isArrLike keys');

function exports(obj, iteratee, ctx)
{
    var i, len;

    if (isArrLike(obj))
    {
        for (i = 0, len = obj.length; i < len; i++) iteratee.call(ctx, obj[i], i, obj);
    } else
    {
        var _keys = keys(obj);
        for (i = 0, len = _keys.length; i < len; i++)
        {
            iteratee.call(ctx, obj[_keys[i]], _keys[i], obj);
        }
    }

    return obj;
}