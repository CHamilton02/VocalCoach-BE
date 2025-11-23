"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzedVoiceResponseJsonSchema = void 0;
const zod_to_json_schema_1 = require("zod-to-json-schema");
const analyze_1 = require("./analyze");
exports.analyzedVoiceResponseJsonSchema = (0, zod_to_json_schema_1.zodToJsonSchema)(analyze_1.analyzedVoiceResponseSchema);
