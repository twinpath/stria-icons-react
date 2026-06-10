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
var Share_exports = {};
__export(Share_exports, {
  default: () => Share_default
});
module.exports = __toCommonJS(Share_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShareRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M152 184.019H423.494L296.312 74.183C286.281 65.527 285.188 50.372 293.844 40.341C302.531 30.279 317.688 29.154 327.688 37.873L503.688 189.863C508.969 194.425 512 201.049 512 208.018C512 214.986 508.969 221.611 503.688 226.173L327.688 378.163C323.156 382.1 317.562 384.006 312 384.006C305.281 384.006 298.594 381.194 293.844 375.694C285.188 365.664 286.281 350.508 296.312 341.853L423.494 232.016H152C94.656 232.016 48 278.669 48 336.009V456.002C48 469.251 37.25 480 24 480S0 469.251 0 456.002V336.009C0 252.202 68.188 184.019 152 184.019Z" })
  }
));
ShareRegular.displayName = "ShareRegular";
var Share_default = ShareRegular;
