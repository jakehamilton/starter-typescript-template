// @ts-check
module.exports = [
    {
        type: 'input',
        name: 'package.name',
        message: 'Module Name',
    },
    {
        type: 'input',
        name: 'package.library',
        message: 'Exported Library Name',
        default: 'Library',
    },
    {
        type: 'input',
        name: 'package.description',
        message: 'Module Description',
    },
    {
        type: 'input',
        name: 'package.license',
        message: 'License',
        default: 'MIT',
    },
    {
        type: 'input',
        name: 'package.repository',
        message: 'Git Repository URL',
        default: 'none',
    },
    {
        type: 'input',
        name: 'author.name',
        message: 'Author Name',
    },
    {
        type: 'input',
        name: 'author.email',
        message: 'Author Email',
    },
];
