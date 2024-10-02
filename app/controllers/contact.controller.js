const ContactService = require("../config/services/contact.service");
const ApiError = require("../api-error");
const MongoDB = require("../utils/mongodb.util");

exports.create = async(req, res, next) => {
    if(!req.body?.name) {
        return next(new ApiError(400, "Name can not be empty"));
    }
    try {
        const contactService = new ContactService(MongoDB.client);
        const document = await contactService.create(req.body);
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while creating the contact")
        );
    }
};
exports.findAll= async (req, res, next) => {
    let documents = [];
    
    try {
        const contactService = new ContactService(MongoDB.client);
        const {name} = req.query;
        if (name) {
            documents = await contactService.findByName(name);
        } else {
            documents = await contactService.find({});
        } 
    } catch (error) {
            return next(
                new ApiError(500, "An error occurred while retrieving contacts")
            );
        }

    return res.send(document);
};
exports.findOne = (req, res) => {
    res.send({ message: "findOne handler" });
};
exports.update = (req, res) => {
    res.send({ message: "update handler" });
};
exports.delete = (req, res) => {
    res,send({ message: "delete handler" });
};
exports.deleteAll = (req, res) => {
    res.send({ message: "deleteAll handler" });
};
exports.findALLFavorite = (req, res) => {
    res.send({ message: "findALLFavorite handler" });
};