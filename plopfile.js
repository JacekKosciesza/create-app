const path = require('path');

module.exports = function (plop) {
    // controller generator
    plop.setGenerator('web', {
        description: 'Web application',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Web application name'
        }],
        actions: [{
            type: 'addMany',
            destination: '.',
            templateFiles: 'templates/web/public/*'
        },
        {
            type: 'addMany',
            destination: '.',
            templateFiles: 'templates/web/src/*'
        },
        {
            type: 'addMany',
            destination: '.',
            templateFiles: 'templates/web/*'
        },
    ]
    });
};
