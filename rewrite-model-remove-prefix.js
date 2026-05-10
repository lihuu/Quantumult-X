/**
 * @fileoverview Remove "my-" prefix from model field in request body.
 *
 * @script-type script-request-body
 * @example ^https://api\.example\.com/v1/chat url script-request-body rewrite-model-remove-prefix.js
 */

var body = $request.body;
var obj = JSON.parse(body);

if (obj.model && obj.model.startsWith("my-")) {
    obj.model = obj.model.substring(3);
}

$done({body: JSON.stringify(obj)});
