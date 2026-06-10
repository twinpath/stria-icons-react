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
var Marker_exports = {};
__export(Marker_exports, {
  default: () => Marker_default
});
module.exports = __toCommonJS(Marker_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MarkerThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M421.407 0C398.22 0 375.063 8.844 357.406 26.516L324.246 59.684L308.28 43.719C292.624 28.109 267.28 28.141 251.686 43.719L130.34 165.094C127.215 168.219 127.215 173.281 130.34 176.406C131.902 177.969 133.934 178.75 135.996 178.75S140.09 177.969 141.653 176.406L262.998 55.031C272.374 45.672 287.593 45.641 296.968 55.031L312.933 70.996L93.933 290.031C49.182 334.797 7.181 422.203 0.181 485.125L0.15 485.344C-1.444 499.719 9.869 512 23.932 512C24.838 512 25.713 511.953 26.619 511.844C89.62 504.891 177.122 462.859 221.935 418.047L485.409 154.547C542.534 97.375 501.346 0 421.407 0ZM210.621 406.732C168.036 449.316 84.706 489.336 23.932 496C20.883 496 18.93 494.326 18.037 493.33C17.148 492.338 15.709 490.209 16.084 486.895C22.734 427.109 62.733 343.871 105.248 301.344L181.632 224.947L287.016 330.33L210.621 406.732ZM474.094 143.234L298.329 319.018L192.944 213.635L368.725 37.824C382.788 23.75 401.497 16 421.407 16C457.955 16 480.867 39.859 490.122 62.188C499.327 84.4 499.95 117.357 474.094 143.234Z" })
  }
));
MarkerThin.displayName = "MarkerThin";
var Marker_default = MarkerThin;
