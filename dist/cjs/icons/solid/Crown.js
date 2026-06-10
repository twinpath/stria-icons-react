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
var Crown_exports = {};
__export(Crown_exports, {
  default: () => Crown_default
});
module.exports = __toCommonJS(Crown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CrownSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 136C576 158.092 558.092 176 536 176C535.752 176 535.547 175.863 535.299 175.859L484.777 453.725C482.012 468.939 468.758 480 453.293 480H122.707C107.242 480 93.988 468.939 91.223 453.725L40.701 175.859C40.453 175.863 40.248 176 40 176C17.908 176 0 158.092 0 136S17.908 96 40 96S80 113.908 80 136C80 144.998 76.479 152.889 71.463 159.57L161.09 231.271C176.998 243.998 200.592 238.816 209.703 220.596L267.301 105.398C255.963 98.34 248 86.342 248 72C248 49.908 265.908 32 288 32S328 49.908 328 72C328 86.342 320.037 98.34 308.699 105.398L366.297 220.596C375.408 238.816 399.002 243.998 414.91 231.271L504.537 159.57C499.521 152.889 496 144.998 496 136C496 113.908 513.908 96 536 96S576 113.908 576 136Z" })
  }
));
CrownSolid.displayName = "CrownSolid";
var Crown_default = CrownSolid;
