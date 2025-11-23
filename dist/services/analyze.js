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
exports.analyzeVoiceService = analyzeVoiceService;
const genai_1 = require("@google/genai");
require("dotenv/config");
const analyze_1 = require("../types/analyze");
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not set');
}
const genAI = new genai_1.GoogleGenAI({ apiKey });
function analyzeVoiceService(req) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!req.file) {
            throw new Error('No file uploaded.');
        }
        const uploadResponse = yield genAI.files.upload({
            file: req.file.path,
            config: { mimeType: req.file.mimetype },
        });
        if (!uploadResponse.uri || !uploadResponse.mimeType) {
            throw new Error('File upload failed, URI or mimeType is missing.');
        }
        const result = yield genAI.models.generateContent({
            model: 'gemini-2.0-flash',
            contents: (0, genai_1.createUserContent)([
                (0, genai_1.createPartFromUri)(uploadResponse.uri, uploadResponse.mimeType),
                'Analyze this audio file and fill in the response JSON accordingly.',
            ]),
            config: {
                responseMimeType: 'application/json',
                responseJsonSchema: analyze_1.analyzedVoiceResponseJsonSchema,
            },
        });
        const text = result.text;
        return JSON.parse(result.text || '');
    });
}
