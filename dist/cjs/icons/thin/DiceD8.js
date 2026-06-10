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
var DiceD8_exports = {};
__export(DiceD8_exports, {
  default: () => DiceD8_default
});
module.exports = __toCommonJS(DiceD8_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiceD8Thin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 256.035C512 247.397 508.695 238.747 502.086 232.136L279.906 9.908C273.312 3.313 264.593 0 256 0S238.688 3.313 232.094 9.908L9.914 232.136C3.305 238.747 0 247.373 0 256S3.305 273.253 9.914 279.864L232.094 502.092C238.688 508.687 247.313 512 256 512S273.312 508.687 279.906 502.092L502.086 279.864C508.695 273.3 512 264.673 512 256.035ZM248.008 493.86C246.367 493.022 244.75 492.117 243.407 490.775L23.179 270.501L248.008 357.562V493.86ZM248.008 340.373L17.019 250.95C17.831 248.219 19.074 245.604 21.226 243.451L243.407 21.223C244.727 19.904 246.36 18.998 248.008 18.158V340.373ZM268.593 490.777C267.257 492.114 265.64 493.012 264.008 493.85V357.562L488.813 270.512L268.593 490.777ZM264.008 340.373V18.167C265.648 19.007 267.277 19.91 268.593 21.225L490.774 243.451C492.883 245.564 494.157 248.18 494.993 250.95L264.008 340.373Z " })
  }
));
DiceD8Thin.displayName = "DiceD8Thin";
var DiceD8_default = DiceD8Thin;
