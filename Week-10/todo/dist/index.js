"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secret = "mysecret";
app.use(express.json());
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, firstname, lastname, password } = req.body;
    const hashedPassword = yield bcrypt.hash(password, 12);
    const response = yield prisma.user.create({
        data: {
            username: username,
            firstname: firstname,
            lastname: lastname,
            password: hashedPassword
        }
    });
    const token = jwt.sign({ id: response.id }, secret);
    res.status(200).json({
        msg: "User created successfully",
        token: token
    });
}));
app.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield prisma.user.findFirst({
        where: { username: username }
    });
    yield bcrypt.compare(password, user === null || user === void 0 ? void 0 : user.password, (err, result) => {
        if (err) {
            res.json({
                msg: err
            });
            return;
        }
    });
    const token = jwt.sign({ id: user === null || user === void 0 ? void 0 : user.id }, secret);
    res.status(200).json({
        msg: "Signedin successfully",
        token: token
    });
}));
app.listen("8000", () => {
    console.log("Server running at port 8000");
});
