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
var CircleUser_exports = {};
__export(CircleUser_exports, {
  default: () => CircleUser_default
});
module.exports = __toCommonJS(CircleUser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleUserLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C204.502 464 157.414 445.08 121.049 413.969C137.271 377.508 173.777 352 216.193 352H295.807C338.223 352 374.729 377.508 390.951 413.969C354.586 445.08 307.498 464 256 464ZM414.553 390.311C391.348 348.471 347.051 320 295.807 320H216.193C164.953 320 120.658 348.473 97.449 390.312C66.672 354.037 48 307.188 48 256C48 141.309 141.309 48 256 48S464 141.309 464 256C464 307.188 445.33 354.035 414.553 390.311ZM256 128C211.816 128 176 163.816 176 208C176 252.182 211.816 288 256 288S336 252.182 336 208C336 163.816 300.184 128 256 128ZM256 256C229.533 256 208 234.467 208 208S229.533 160 256 160S304 181.533 304 208S282.467 256 256 256Z" })
  }
));
CircleUserLight.displayName = "CircleUserLight";
var CircleUser_default = CircleUserLight;
