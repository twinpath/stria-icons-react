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
var Bolt_exports = {};
__export(Bolt_exports, {
  default: () => Bolt_default
});
module.exports = __toCommonJS(Bolt_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoltRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M381.96 244.759C377.272 232.276 365.336 224.01 351.992 224.01H240.523L317.4 44.626C323.306 30.892 318.9 14.908 306.807 6.127C294.745 -2.654 278.183 -1.951 266.934 7.94L10.946 231.932C0.915 240.713 -2.647 254.79 2.04 267.259C6.728 279.743 18.664 288.008 32.008 288.008H143.477L66.6 467.392C60.694 481.126 65.1 497.11 77.193 505.891C82.818 509.984 89.411 512 96.005 512C103.535 512 111.066 509.344 117.066 504.078L373.054 280.086C383.085 271.305 386.647 257.228 381.96 244.759ZM203.124 148.794L170.907 224.01H117.16L203.124 148.794ZM180.876 363.224L213.093 288.008H266.84L180.876 363.224Z" })
  }
));
BoltRegular.displayName = "BoltRegular";
var Bolt_default = BoltRegular;
