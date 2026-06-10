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
var LampFloor_exports = {};
__export(LampFloor_exports, {
  default: () => LampFloor_default
});
module.exports = __toCommonJS(LampFloor_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LampFloorThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M381.395 179.375L312.762 19.375C307.762 7.625 296.26 0 283.385 0H100.616C87.741 0 76.239 7.625 71.239 19.375L2.606 179.375C-1.644 189.25 -0.644 200.625 5.231 209.625C11.233 218.625 21.233 224 31.985 224H184V496H72C67.594 496 64 499.594 64 504S67.594 512 72 512H312C316.407 512 320 508.406 320 504S316.407 496 312 496H200V224H352.016C362.768 224 372.768 218.625 378.77 209.625C384.645 200.625 385.645 189.25 381.395 179.375ZM365.459 200.746C362.43 205.289 357.405 208 352.016 208H31.985C26.596 208 21.571 205.289 18.629 200.879C15.662 196.336 15.168 190.66 17.311 185.684L85.961 25.641C88.453 19.785 94.205 16 100.616 16H283.385C289.795 16 295.547 19.785 298.057 25.684L366.698 185.699C368.832 190.66 368.338 196.336 365.459 200.746Z" })
  }
));
LampFloorThin.displayName = "LampFloorThin";
var LampFloor_default = LampFloorThin;
