module.exports = {
    schema: true,
    attributes: {
        /*username: {
            type: 'string',
            required: true,
            unique: true,
            alphanumericdashed: true
        },*/
        password: {
            type: 'string'
        },
        email: {
            type: 'email',
            required: true,
            unique: true
        },
        firstName: {
            type: 'string',
            defaultsTo: ''
        },
        lastName: {
            type: 'string',
            defaultsTo: ''
        },
        photo: {
            type: 'string',
            defaultsTo: '',
            url: true
        },
        socialProfiles: {
            type: 'object',
            defaultsTo: {}
        },

        toJSON: function () {
            var obj = this.toObject();
            delete obj.password;
            delete obj.socialProfiles;
            return obj;
        }
    },
    beforeUpdate: function (values, next) {
        CipherService.hashPassword(values);
        next();
    },
    beforeCreate: function (values, next) {
        CipherService.hashPassword(values);
        next();
    }
};
