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
var Ring_exports = {};
__export(Ring_exports, {
  default: () => Ring_default
});
module.exports = __toCommonJS(Ring_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RingRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 64C110 64 0 125.875 0 208V306.125C0 384.5 114.625 448 256 448S512 384.5 512 306.125V208C512 125.875 402 64 256 64ZM256 112C366.5 112 456 147.875 456 192C456 201.125 452 209.75 445 217.875C398.25 192.25 331 176 256 176S113.75 192.25 67 217.875C60 209.75 56 201.125 56 192C56 147.875 145.5 112 256 112ZM397.75 248.5C361.5 263 311.375 272 256 272S150.5 263 114.25 248.5C150 234.25 198.375 224 256 224S362 234.25 397.75 248.5ZM464 306.125C464 344.375 383 400 256 400S48 344.375 48 306.125V266.375C94.375 298.75 170.125 320 256 320S417.625 298.75 464 266.375V306.125Z" })
  }
));
RingRegular.displayName = "RingRegular";
var Ring_default = RingRegular;
