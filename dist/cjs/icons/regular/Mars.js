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
var Mars_exports = {};
__export(Mars_exports, {
  default: () => Mars_default
});
module.exports = __toCommonJS(Mars_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MarsRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M424 32H312C298.75 32 288 42.75 288 56S298.75 80 312 80H366.065L281.78 164.297C250.477 140.568 213.428 128 176 128C130.958 128 85.917 145.182 51.549 179.549C-17.183 248.281 -17.183 359.719 51.549 428.451C85.917 462.818 130.958 480 176 480S266.084 462.818 300.452 428.451C363.37 365.533 367.987 267.209 315.715 198.236L400 113.939V168C400 181.25 410.75 192 424 192S448 181.25 448 168V56C448 42.75 437.25 32 424 32ZM266.51 394.51C242.334 418.686 210.19 432 176 432S109.667 418.686 85.491 394.51C35.584 344.604 35.584 263.396 85.491 213.49C109.667 189.314 141.811 176 176 176S242.333 189.312 266.508 213.488C266.512 213.492 266.512 213.496 266.516 213.5C266.518 213.502 266.518 213.502 266.52 213.504C316.415 263.41 316.413 344.607 266.51 394.51Z" })
  }
));
MarsRegular.displayName = "MarsRegular";
var Mars_default = MarsRegular;
