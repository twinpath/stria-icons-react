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
var Stethoscope_exports = {};
__export(Stethoscope_exports, {
  default: () => Stethoscope_default
});
module.exports = __toCommonJS(Stethoscope_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StethoscopeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 128C444.654 128 416 156.654 416 192C416 218.844 432.564 241.75 456 251.254V344C456 410.156 402.172 464 336 464C271.717 464 219.514 413.07 216.559 349.518C293.076 337.592 352 271.809 352 192V57.998C352 48.904 346.859 40.592 338.734 36.529L270.734 2.529C258.891 -3.377 244.469 1.404 238.531 13.279C232.609 25.123 237.406 39.529 249.266 45.467L304 72.842V192C304 253.75 253.75 304 192 304S80 253.75 80 192V72.842L134.734 45.467C146.594 39.529 151.391 25.123 145.469 13.279C139.562 1.404 125.156 -3.377 113.266 2.529L45.266 36.529C37.141 40.592 32 48.904 32 57.998V192C32 272.195 91.508 338.178 168.57 349.631C171.617 439.602 245.287 512 336 512C428.641 512 504 436.625 504 344V251.254C527.436 241.75 544 218.844 544 192C544 156.654 515.346 128 480 128ZM480 208C471.178 208 464 200.822 464 192S471.178 176 480 176S496 183.178 496 192S488.822 208 480 208Z" })
  }
));
StethoscopeRegular.displayName = "StethoscopeRegular";
var Stethoscope_default = StethoscopeRegular;
