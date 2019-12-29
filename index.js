module.exports = module.exports.default = function (options) {
    options = options || {};
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    length = !options.hasOwnProperty('length') ? 16 : options.length;
    if (options.hasOwnProperty('uppercase') && options.uppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (options.hasOwnProperty('numbers') && options.numbers) characters += '0123456789';
    if (options.hasOwnProperty('symbols') && options.symbols) characters += '!@#$%^&*()+_-=}{[]|:;"/?.><,`~';

    var password = '';
    for (var i = 0; i < length; i++) {
        password += random(characters);
    }
    return password;
};

var random = function (group) {
    return group.charAt(Math.floor(Math.random() * group.length))
};