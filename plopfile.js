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
            data.web = data.types.includes('Web');
            data.mobile = data.types.includes('Mobile');
            data.cloud = data.types.includes('Cloud');

            const webActions = [
                {
                    type: 'addMany',
                    destination: '.',
                    templateFiles: 'templates/web/**/*',
                    globOptions: { dot: true }
                },
            ];

            const mobileActions = [];

            const cloudActions = [
                {
                    type: 'addMany',
                    destination: '.',
                    templateFiles: 'templates/cloud/**/*',
                    globOptions: { dot: true }
                }
            ];

            let actions = [
                {
                    type: 'addMany',
                    destination: '.',
                    templateFiles: 'templates/*',
                    globOptions: { dot: true }
                },
                ...data.web? webActions : [],
                ...data.mobile ? mobileActions : [],
                ...data.cloud ? cloudActions : []
            ];

            return actions;
        }
    });
};
