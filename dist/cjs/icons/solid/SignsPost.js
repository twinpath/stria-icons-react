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
var SignsPost_exports = {};
__export(SignsPost_exports, {
  default: () => SignsPost_default
});
module.exports = __toCommonJS(SignsPost_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SignsPostSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 496C224 504.875 231.125 512 240 512H272C280.875 512 288 504.875 288 496V384H224V496ZM455.937 224H287.937V192H223.937V224H70.562C62.062 224 53.938 227.375 47.938 233.375L4.688 276.75C-1.563 283 -1.563 293.125 4.688 299.375L47.938 342.625C53.938 348.625 62.062 352 70.562 352H455.937C469.187 352 479.937 341.25 479.937 328V248C479.937 234.75 469.187 224 455.937 224ZM507.312 84.75L464.062 41.375C458.062 35.375 449.937 32 441.438 32H287.938V16C287.938 7.125 280.813 0 271.938 0H239.938C231.062 0 223.938 7.125 223.938 16V32H55.938C42.688 32 31.938 42.75 31.938 56V136C31.938 149.25 42.688 160 55.938 160H441.438C449.937 160 458.062 156.625 464.062 150.625L507.312 107.375C513.562 101 513.562 91 507.312 84.75Z" })
  }
));
SignsPostSolid.displayName = "SignsPostSolid";
var SignsPost_default = SignsPostSolid;
