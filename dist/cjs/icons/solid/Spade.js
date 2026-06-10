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
var Spade_exports = {};
__export(Spade_exports, {
  default: () => Spade_default
});
module.exports = __toCommonJS(Spade_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SpadeSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 293.5C512 361.031 457.031 416 389.5 416H378.5C342.521 416 310.436 400.111 288 375.318V426.955C288 439.322 296.418 450.104 308.418 453.104L331.586 458.896C343.582 461.896 352 472.678 352 485.045C352 499.932 339.93 512 325.047 512H186.953C172.07 512 160 499.932 160 485.045C160 472.678 168.418 461.896 180.418 458.896L203.586 453.104C215.582 450.104 224 439.322 224 426.955V375.318C201.564 400.111 169.479 416 133.5 416H122.5C54.969 416 0 361.031 0 293.5C0 260.781 12.75 230 35.875 206.875L233.375 9.375C245.875 -3.125 266.125 -3.125 278.625 9.375L476.125 206.875C499.25 230 512 260.781 512 293.5Z" })
  }
));
SpadeSolid.displayName = "SpadeSolid";
var Spade_default = SpadeSolid;
