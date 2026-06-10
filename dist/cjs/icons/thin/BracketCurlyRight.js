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
var BracketCurlyRight_exports = {};
__export(BracketCurlyRight_exports, {
  default: () => BracketCurlyRight_default
});
module.exports = __toCommonJS(BracketCurlyRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BracketCurlyRightThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M231.938 256C197.109 278.703 176 317.203 176 359.547V408C176 438.875 150.875 464 120 464H72C67.578 464 64 467.578 64 472S67.578 480 72 480H120C159.703 480 192 447.703 192 408V359.547C192 318.469 214.828 281.531 251.578 263.156C254.281 261.797 256 259.031 256 256S254.281 250.203 251.578 248.844C214.828 230.469 192 193.531 192 152.453V104C192 64.297 159.703 32 120 32H72C67.578 32 64 35.578 64 40S67.578 48 72 48H120C150.875 48 176 73.125 176 104V152.453C176 194.797 197.109 233.297 231.938 256Z" })
  }
));
BracketCurlyRightThin.displayName = "BracketCurlyRightThin";
var BracketCurlyRight_default = BracketCurlyRightThin;
