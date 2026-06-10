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
var Burrito_exports = {};
__export(Burrito_exports, {
  default: () => Burrito_default
});
module.exports = __toCommonJS(Burrito_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BurritoSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M307.243 230.403C278.367 310.538 201.614 368.045 111.611 368.045C72.234 368.045 33.858 356.794 0.732 335.791C-3.018 369.545 7.607 404.674 33.483 430.553L80.985 478.058C126.361 523.314 199.864 523.314 245.24 478.058L461.248 262.282C430.122 237.529 391.621 224.027 351.869 224.027C336.619 224.027 321.743 226.528 307.243 230.403ZM287.742 160.02C287.742 120.265 274.242 81.76 249.366 50.756L33.358 266.533C22.983 276.909 14.732 289.285 8.982 302.912C38.858 324.415 74.734 336.041 111.611 336.041C208.739 336.041 287.742 257.031 287.742 160.02ZM512 123.015C512 90.511 490.749 61.883 459.748 52.256C453.373 31.879 438.622 15.252 419.122 6.501C399.621 -2.25 377.37 -2.125 357.995 6.751C347.869 2.25 336.869 0 325.743 0C303.743 0 283.742 9.376 268.991 24.253C309.993 71.009 327.493 133.766 316.618 195.024C328.243 193.024 339.994 192.023 351.869 192.023C401.746 192.023 449.998 210.026 487.749 242.78C502.625 228.028 512 208.025 512 186.023C512 175.021 509.75 164.02 505.25 153.894C509.75 144.268 512 133.641 512 123.015Z" })
  }
));
BurritoSolid.displayName = "BurritoSolid";
var Burrito_default = BurritoSolid;
