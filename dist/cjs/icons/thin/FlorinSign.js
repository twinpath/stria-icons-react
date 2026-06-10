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
var FlorinSign_exports = {};
__export(FlorinSign_exports, {
  default: () => FlorinSign_default
});
module.exports = __toCommonJS(FlorinSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FlorinSignThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 40C384 44.406 380.422 48 376 48H329.328C301.016 48 275.594 64.344 266.094 88.625L203.721 248H344C348.422 248 352 251.594 352 256S348.422 264 344 264H197.459L132.813 429.188C120.922 459.594 89.516 480 54.672 480H8C3.578 480 0 476.406 0 472S3.578 464 8 464H54.672C82.984 464 108.406 447.656 117.906 423.375L180.279 264H40C35.578 264 32 260.406 32 256S35.578 248 40 248H186.541L251.187 82.812C263.078 52.406 294.484 32 329.328 32H376C380.422 32 384 35.594 384 40Z" })
  }
));
FlorinSignThin.displayName = "FlorinSignThin";
var FlorinSign_default = FlorinSignThin;
