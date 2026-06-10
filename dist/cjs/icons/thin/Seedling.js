var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Seedling_exports = {};
__export(Seedling_exports, {
  default: () => Seedling_default
});
module.exports = __toCommonJS(Seedling_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SeedlingThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M68.438 96H8C3.594 96 0 99.594 0 104C0 223.094 98.5 320 219.562 320H272V472C272 476.406 275.594 480 280 480S288 476.406 288 472V312C288 192.906 189.5 96 68.438 96ZM219.562 304C110.031 304 20.438 218.594 16.156 112H68.438C177.969 112 267.562 197.406 271.844 304H219.562ZM504 32H443.562C362.969 32 289 75.312 250.5 145.062C248.375 148.938 249.781 153.812 253.625 155.938C257.562 158.094 262.344 156.656 264.5 152.813C300.188 88.156 368.812 48 443.562 48H495.844C491.719 147.25 411.719 230.438 310.281 239.125C305.875 239.5 302.625 243.375 303 247.781C303.344 251.938 306.844 255.094 310.969 255.094C311.187 255.094 311.406 255.094 311.656 255.062C424 245.469 512 151 512 40C512 35.594 508.406 32 504 32Z" })
  }
));
SeedlingThin.displayName = "SeedlingThin";
var Seedling_default = SeedlingThin;
