const path = require('path');

module.exports = function (plop) {
    // controller generator
    plop.setGenerator('app', {
        description: 'Web|Mobile|Cloud application',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Application name'
        },
        {
            type: 'checkbox',
            name: 'types',
            message: 'Application type(s)',
            choices: ['Web', 'Mobile', 'Cloud']
        }],
        actions: (data) => {
            const webActions = [
                {
                    type: 'addMany',
                    destination: '.',
                    templateFiles: 'templates/web/**/*'
                },
            ];

            const mobileActions = [];

            const cloudActions = [
                {
                    type: 'addMany',
                    destination: '.',
                    templateFiles: 'templates/cloud/**/*'
                }
            ];

            let actions = [
                ...data.types.includes('Web') ? webActions : [],
                ...data.types.includes('Mobile') ? mobileActions : [],
                ...data.types.includes('Cloud') ? cloudActions : []
            ];

            return actions;
        }
    });
};
