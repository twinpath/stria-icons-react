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
var Route_exports = {};
__export(Route_exports, {
  default: () => Route_default
});
module.exports = __toCommonJS(Route_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RouteSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 320H320C302.375 320 288 305.625 288 288S302.375 256 320 256H416C416 256 512 149 512 96S469 0 416 0S320 43 320 96C320 121.5 342.25 159.375 365.25 192H320C267.125 192 224 235.125 224 288S267.125 384 320 384H416C433.625 384 448 398.375 448 416S433.625 448 416 448H185.5C169.5 472.75 151.75 495.75 138.25 512H416C468.875 512 512 468.875 512 416S468.875 320 416 320ZM416 64C433.75 64 448 78.25 448 96S433.75 128 416 128S384 113.75 384 96S398.25 64 416 64ZM96 256C43 256 0 299 0 352S96 512 96 512S192 405 192 352S149 256 96 256ZM96 384C78.25 384 64 369.75 64 352S78.25 320 96 320S128 334.25 128 352S113.75 384 96 384Z" })
  }
));
RouteSolid.displayName = "RouteSolid";
var Route_default = RouteSolid;
