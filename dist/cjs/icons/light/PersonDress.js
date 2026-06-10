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
var PersonDress_exports = {};
__export(PersonDress_exports, {
  default: () => PersonDress_default
});
module.exports = __toCommonJS(PersonDress_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonDressLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M222.308 248.843C218.34 240.921 208.778 237.749 200.841 241.687C192.935 245.64 189.748 255.249 193.685 263.156L246.119 368H73.881L126.315 263.156C130.252 255.249 127.065 245.64 119.159 241.687C111.253 237.781 101.66 240.953 97.692 248.843L33.696 376.843C31.228 381.797 31.478 387.687 34.384 392.406C37.321 397.125 42.477 400 48.008 400H96.004V496C96.004 504.844 103.16 512 112.003 512S128.002 504.844 128.002 496V400H191.998V496C191.998 504.844 199.154 512 207.997 512S223.996 504.844 223.996 496V400H271.992C277.523 400 282.679 397.125 285.616 392.406C288.522 387.687 288.772 381.797 286.304 376.843L222.308 248.843ZM301.99 280.234L240.276 169.156C226.183 143.765 199.372 127.999 170.343 127.999H149.657C120.628 127.999 93.817 143.765 79.724 169.156L18.01 280.234C13.729 287.953 16.51 297.687 24.228 301.984C31.853 306.234 41.665 303.531 46.008 295.765L107.722 184.687C116.159 169.452 132.221 159.999 149.657 159.999H170.343C187.779 159.999 203.841 169.452 212.278 184.687L273.992 295.765C276.929 301.031 282.398 304 287.991 304C290.647 304 293.303 303.359 295.772 301.984C303.49 297.687 306.271 287.953 301.99 280.234ZM160 111.999C190.873 111.999 215.996 86.874 215.996 55.999S190.873 -0.001 160 -0.001S104.004 25.124 104.004 55.999S129.127 111.999 160 111.999ZM160 31.999C173.218 31.999 183.998 42.765 183.998 55.999S173.218 79.999 160 79.999S136.002 69.233 136.002 55.999S146.782 31.999 160 31.999Z" })
  }
));
PersonDressLight.displayName = "PersonDressLight";
var PersonDress_default = PersonDressLight;
