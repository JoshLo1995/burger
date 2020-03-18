const orm = require('../config/orm.js');

const burger = {
    all: (callback) => {
        orm.all("BURGERS", (res) => {
            callback(res);
        });
    },

    create: (cols, vals, callback) => {
        orm.create("BURGERS", cols, vals, (res) => {
            callback(res);
        });
    },

    update: (objColVals, condition, callback) => {
        orm.update("BURGERS", objColVals, condition, (res) => {
            callback(res);
        });
    },

    delete: (condition, callback) => {
        orm.delete("BURGERS", condition, (res) => {
            callback(res);
        });
    }
};

module.exports = burger;
