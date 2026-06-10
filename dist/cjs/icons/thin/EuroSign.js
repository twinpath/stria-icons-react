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
var EuroSign_exports = {};
__export(EuroSign_exports, {
  default: () => EuroSign_default
});
module.exports = __toCommonJS(EuroSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EuroSignThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M335.822 465.13C336.744 469.472 333.994 473.721 329.666 474.627C312.822 478.251 295.869 480 279.073 480C218.449 480 159.888 456.976 115.873 414.459C88.184 387.696 68.423 355.314 57.597 319.989H24C19.578 319.989 16 316.397 16 311.992C16 307.587 19.578 303.995 24 303.995H53.464C49.958 288.39 47.999 272.358 47.999 256.01C47.999 239.664 49.958 223.628 53.464 208.026H24C19.578 208.026 16 204.433 16 200.028S19.578 192.031 24 192.031H57.597C68.423 156.707 88.184 124.324 115.873 97.562C172.091 43.267 252.058 20.712 329.666 37.394C333.994 38.3 336.744 42.548 335.822 46.891C334.884 51.17 330.728 53.982 326.322 53.014C253.776 37.581 179.356 58.449 126.998 109.058C102.53 132.71 84.825 161.104 74.499 192.031H303.994C308.416 192.031 311.994 195.624 311.994 200.028S308.416 208.026 303.994 208.026H69.977C66.181 223.591 63.999 239.625 63.999 256.01S66.181 288.429 69.977 303.995H303.994C308.416 303.995 311.994 307.587 311.994 311.992C311.994 316.397 308.416 319.989 303.994 319.989H74.499C84.825 350.917 102.53 379.31 126.998 402.963C179.356 453.54 253.839 474.533 326.322 459.007C330.728 457.976 334.884 460.819 335.822 465.13Z" })
  }
));
EuroSignThin.displayName = "EuroSignThin";
var EuroSign_default = EuroSignThin;
