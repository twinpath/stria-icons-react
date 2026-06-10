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
var Mercury_exports = {};
__export(Mercury_exports, {
  default: () => Mercury_default
});
module.exports = __toCommonJS(Mercury_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MercuryRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 223.994C368 157.88 331.498 100.347 277.592 70.266C290.451 62.059 302.6 52.153 313.594 40.303C322.594 30.584 322.031 15.396 312.312 6.396C302.656 -2.604 287.406 -2.042 278.406 7.677C230.156 59.678 153.844 59.678 105.594 7.677C96.594 -2.042 81.344 -2.604 71.688 6.396C61.969 15.396 61.406 30.584 70.406 40.303C81.4 52.153 93.549 62.059 106.408 70.266C52.502 100.347 16 157.88 16 223.994C16 313.035 82.182 386.441 168 398.173V423.998H136C122.75 423.998 112 434.748 112 447.999C112 461.249 122.75 471.999 136 471.999H168V488C168 501.25 178.75 512 192 512S216 501.25 216 488V471.999H248C261.25 471.999 272 461.249 272 447.999C272 434.748 261.25 423.998 248 423.998H216V398.173C301.818 386.441 368 313.035 368 223.994ZM64 223.994C64 153.413 121.42 95.992 192 95.992S320 153.413 320 223.994S262.58 351.997 192 351.997S64 294.576 64 223.994Z" })
  }
));
MercuryRegular.displayName = "MercuryRegular";
var Mercury_default = MercuryRegular;
