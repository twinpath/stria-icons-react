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
var Crutch_exports = {};
__export(Crutch_exports, {
  default: () => Crutch_default
});
module.exports = __toCommonJS(Crutch_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CrutchRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M328.5 255.868L249.375 176.743L320.75 105.368L286.875 71.493L165.75 192.493C154 204.118 145.875 218.868 142.25 234.868L113.875 357.368L7.031 464.087C-2.344 473.462 -2.344 488.649 7.031 498.024C11.719 502.712 17.844 505.056 24 505.056S36.281 502.712 40.969 498.024L147.875 391.243L270.375 362.993C286.375 359.368 301.125 351.118 312.75 339.493L433.999 218.493L400 184.493L328.5 255.868ZM278.75 305.618C273.5 310.868 266.875 314.618 259.5 316.243L167.75 337.493L189 245.743C190.625 238.368 194.375 231.743 199.75 226.493L215.5 210.618L294.625 289.868L278.75 305.618ZM504.969 210.024C500.281 214.712 494.156 217.056 488 217.056S475.719 214.712 471.031 210.024L347.563 86.587C347.523 86.548 347.514 86.493 347.475 86.454L295.031 34.024C285.656 24.649 285.656 9.462 295.031 0.087S319.594 -9.288 328.969 0.087L452.438 123.524C452.477 123.563 452.486 123.618 452.525 123.657L504.969 176.087C514.344 185.462 514.344 200.649 504.969 210.024Z" })
  }
));
CrutchRegular.displayName = "CrutchRegular";
var Crutch_default = CrutchRegular;
