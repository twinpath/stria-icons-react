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
var SquarePhoneFlip_exports = {};
__export(SquarePhoneFlip_exports, {
  default: () => SquarePhoneFlip_default
});
module.exports = __toCommonJS(SquarePhoneFlip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquarePhoneFlipSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 96V416C0 451.346 28.652 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32H64C28.652 32 0 60.654 0 96ZM105.453 303.625L159.697 280.375C166.088 277.609 173.596 279.469 177.939 284.859L199.963 311.766C234.588 294.766 262.736 266.625 279.729 232.016L252.814 209.967C247.439 205.576 245.604 198.139 248.322 191.748L271.588 137.467C274.635 130.514 282.174 126.701 289.518 128.404L339.895 140.029C347.02 141.654 352.004 147.92 352.004 155.248C352.004 281.391 249.385 384 123.26 384C115.924 384 109.656 379.016 108.023 371.891L96.398 321.5C94.711 314.203 98.5 306.625 105.453 303.625Z" })
  }
));
SquarePhoneFlipSolid.displayName = "SquarePhoneFlipSolid";
var SquarePhoneFlip_default = SquarePhoneFlipSolid;
