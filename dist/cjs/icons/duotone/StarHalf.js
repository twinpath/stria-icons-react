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
var StarHalf_exports = {};
__export(StarHalf_exports, {
  default: () => StarHalf_default
});
module.exports = __toCommonJS(StarHalf_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarHalfDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 0.01C288.023 0.01 288.049 0 288.072 0C299.467 0 310.858 5.898 316.74 17.805L382.172 150.195L528.532 171.49C554.798 175.287 565.318 207.58 546.282 226.078L440.372 329.066L465.417 474.551C468.981 495.344 452.401 512 433.809 512C428.878 512 423.803 510.828 418.926 508.25L288 439.555V0.01Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 439.555L157.074 508.25C152.197 510.828 147.122 512 142.191 512C123.599 512 107.019 495.344 110.583 474.551L135.628 329.066L29.718 226.078C10.682 207.58 21.202 175.287 47.468 171.49L193.828 150.195L259.26 17.805C265.142 5.898 276.533 0 287.928 0C287.951 0 287.977 0.01 288 0.01V439.555Z" })
    ]
  }
));
StarHalfDuotone.displayName = "StarHalfDuotone";
var StarHalf_default = StarHalfDuotone;
