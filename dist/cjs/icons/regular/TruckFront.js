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
var TruckFront_exports = {};
__export(TruckFront_exports, {
  default: () => TruckFront_default
});
module.exports = __toCommonJS(TruckFront_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TruckFrontRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M112 320C94.328 320 80 334.326 80 352C80 369.672 94.328 384 112 384S144 369.672 144 352C144 334.326 129.672 320 112 320ZM400 320C382.328 320 368 334.326 368 352C368 369.672 382.328 384 400 384S432 369.672 432 352C432 334.326 417.672 320 400 320ZM424 0H88C39.469 0 0 39.469 0 88V400C0 423.629 12.951 444.037 32 455.123V512C32 529.672 46.326 544 64 544S96 529.672 96 512V464H416V512C416 529.672 430.326 544 448 544S480 529.672 480 512V455.123C499.049 444.037 512 423.629 512 400V88C512 39.469 472.531 0 424 0ZM464 352V400C464 408.822 456.822 416 448 416H64C55.178 416 48 408.822 48 400V352V336C48 309.533 69.533 288 96 288H416C442.467 288 464 309.533 464 336V352ZM105.844 240L134.188 169.141C140.297 153.875 154.875 144 171.328 144H340.672C357.125 144 371.703 153.875 377.812 169.141L406.156 240H105.844ZM464 253.432C463.635 253.219 463.309 252.949 462.939 252.74L422.375 151.328C408.938 117.719 376.859 96 340.672 96H171.328C135.141 96 103.062 117.719 89.625 151.328L49.061 252.74C48.691 252.949 48.365 253.219 48 253.432V88C48 65.938 65.938 48 88 48H424C446.062 48 464 65.938 464 88V253.432Z" })
  }
));
TruckFrontRegular.displayName = "TruckFrontRegular";
var TruckFront_default = TruckFrontRegular;
