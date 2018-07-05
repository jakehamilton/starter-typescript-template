// @ts-check
var questions = require('./questions');
var files = require('./files');

module.exports = function (options) {
    return options.inquirer.prompt(questions).then(function (answers) {
        return Promise.all(
            files.map(function (file) {
                return options.render(file, answers);
            }),
        );
    });
};
