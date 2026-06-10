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
var Club_exports = {};
__export(Club_exports, {
  default: () => Club_default
});
module.exports = __toCommonJS(Club_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClubSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 288C512 358.693 454.695 416 384 416C345.551 416 311.461 398.695 288 371.855V426.955C288 439.322 296.418 450.104 308.418 453.104L331.586 458.896C343.582 461.896 352 472.678 352 485.045C352 499.932 339.93 512 325.047 512H186.953C172.07 512 160 499.932 160 485.045C160 472.678 168.418 461.896 180.418 458.896L203.586 453.104C215.582 450.104 224 439.322 224 426.955V371.855C200.539 398.695 166.453 416 128 416C57.309 416 0 358.693 0 288S57.309 160 128 160C129.602 160 131.086 160.412 132.672 160.471C129.93 150.041 128 139.291 128 128C128 57.307 185.309 0 256 0C326.695 0 384 57.307 384 128C384 139.291 382.07 150.041 379.328 160.471C380.914 160.412 382.398 160 384 160C454.695 160 512 217.307 512 288Z" })
  }
));
ClubSolid.displayName = "ClubSolid";
var Club_default = ClubSolid;
