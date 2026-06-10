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
var Badge_exports = {};
__export(Badge_exports, {
  default: () => Badge_default
});
module.exports = __toCommonJS(Badge_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BadgeSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M454.875 338.375C469.625 370.75 463.75 410.25 437 437C410.375 463.625 371 469.75 338.375 454.875C325.875 488.25 293.75 512 256 512S186.125 488.25 173.625 454.875C141.125 469.75 101.625 463.625 75 437C48.25 410.375 42.375 370.75 57.125 338.375C23.75 325.875 0 293.75 0 256S23.75 186.125 57.125 173.625C42.375 141.25 48.25 101.75 75 75C101.625 48.25 141.25 42.375 173.625 57.125C186.125 23.75 218.25 0 256 0S325.875 23.75 338.375 57.125C370.75 42.375 410.25 48.25 437 75C463.75 101.75 469.625 141.25 454.875 173.625C488.25 186.125 512 218.25 512 256S488.25 325.875 454.875 338.375Z" })
  }
));
BadgeSolid.displayName = "BadgeSolid";
var Badge_default = BadgeSolid;
