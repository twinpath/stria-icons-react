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
var Ear_exports = {};
__export(Ear_exports, {
  default: () => Ear_default
});
module.exports = __toCommonJS(Ear_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EarThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 0C86 0 0 86.001 0 192V368C0 447.5 64.5 512 144 512S288 447.5 288 368V358.125C345.375 324.875 384 263 384 192C384 86.001 298 0 192 0ZM279.979 344.281L272 348.904V368C272 438.58 214.58 496 144 496C73.422 496 16 438.58 16 368V192C16 94.953 94.953 16 192 16S368 94.953 368 192C368 254.467 334.271 312.816 279.979 344.281ZM280.094 99.125C254.391 74.719 220.781 62.281 185.125 64.156C118.344 67.688 64 128.062 64 198.781V256H86.062C100.359 256 112 267.625 112 281.938C112 288.844 109.297 295.375 104.406 300.281L66.344 338.344C63.219 341.469 63.219 346.531 66.344 349.656C67.906 351.219 69.953 352 72 352S76.094 351.219 77.656 349.656L115.719 311.594C123.641 303.656 128 293.125 128 281.938C128 258.812 109.188 240 86.062 240H80V198.781C80 136.438 127.531 83.219 185.969 80.156C216.75 78.25 246.562 89.375 269.078 110.719C291.594 132.094 304 160.969 304 192C304 196.406 307.578 200 312 200S320 196.406 320 192C320 156.531 305.828 123.562 280.094 99.125Z" })
  }
));
EarThin.displayName = "EarThin";
var Ear_default = EarThin;
