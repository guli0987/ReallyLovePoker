var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var User = (function () {
    function User(name, sex) {
        this.seat = -1;
        this.name = name;
        this.sex = sex;
    }
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getSex = function () {
        return this.sex;
    };
    User.prototype.getSeat = function () {
        return this.seat;
    };
    User.prototype.setSeat = function (seat) {
        this.seat = seat;
    };
    User.prototype.setId = function (id) {
        this.id = id;
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.setSex = function (sex) {
        this.sex = sex;
    };
    return User;
}());
__reflect(User.prototype, "User");
