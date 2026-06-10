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
var AnglesLeft_exports = {};
__export(AnglesLeft_exports, {
  default: () => AnglesLeft_default
});
module.exports = __toCommonJS(AnglesLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AnglesLeftThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M189.787 402.467L51.078 255.998L189.783 109.533C192.815 106.377 192.721 101.315 189.533 98.221C186.346 95.159 181.268 95.284 178.221 98.471L34.219 250.467C32.734 252.03 32 253.998 32 255.998S32.734 259.967 34.219 261.529L178.225 413.529C181.272 416.717 186.35 416.842 189.537 413.779C192.725 410.748 192.818 405.686 189.787 402.467ZM226.225 250.467C224.74 252.03 224.006 253.998 224.006 255.998S224.74 259.967 226.225 261.529L370.229 413.529C373.276 416.717 378.354 416.842 381.541 413.779C384.729 410.748 384.822 405.686 381.791 402.467L243.084 255.998L381.789 109.533C384.82 106.377 384.727 101.315 381.539 98.221C378.352 95.159 373.274 95.284 370.227 98.471L226.225 250.467Z" })
  }
));
AnglesLeftThin.displayName = "AnglesLeftThin";
var AnglesLeft_default = AnglesLeftThin;
