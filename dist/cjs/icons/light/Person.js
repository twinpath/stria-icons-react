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
var Person_exports = {};
__export(Person_exports, {
  default: () => Person_default
});
module.exports = __toCommonJS(Person_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M301.991 280.234L240.276 169.156C226.184 143.766 199.373 128 170.344 128H149.657C120.628 128 93.817 143.766 79.725 169.156L18.01 280.234C13.729 287.953 16.51 297.688 24.228 301.984C31.884 306.234 41.665 303.531 46.008 295.766L107.723 184.688C116.16 169.453 132.221 160 149.657 160H170.344C187.78 160 203.841 169.453 212.278 184.688L273.993 295.766C276.93 301.031 282.399 304 287.992 304C290.648 304 293.304 303.359 295.773 301.984C303.491 297.688 306.272 287.953 301.991 280.234ZM160 112C190.873 112 215.997 86.875 215.997 56S190.873 0 160 0S104.004 25.125 104.004 56S129.128 112 160 112ZM160 32C173.218 32 183.999 42.766 183.999 56S173.218 80 160 80S136.002 69.234 136.002 56S146.783 32 160 32ZM207.997 240C199.154 240 191.998 247.156 191.998 256V336H128.003V256C128.003 247.156 120.847 240 112.004 240S96.005 247.156 96.005 256V496C96.005 504.844 103.161 512 112.004 512S128.003 504.844 128.003 496V368H191.998V496C191.998 504.844 199.154 512 207.997 512S223.996 504.844 223.996 496V256C223.996 247.156 216.84 240 207.997 240Z" })
  }
));
PersonLight.displayName = "PersonLight";
var Person_default = PersonLight;
