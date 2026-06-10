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
var Terminal_exports = {};
__export(Terminal_exports, {
  default: () => Terminal_default
});
module.exports = __toCommonJS(Terminal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TerminalLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M560 448.001H239.998C231.162 448.001 223.998 455.165 223.998 464.001C223.998 472.836 231.162 480 239.998 480H560C568.836 480 576 472.836 576 464.001C576 455.165 568.836 448.001 560 448.001ZM255.998 256.01C255.998 251.572 254.139 247.323 250.889 244.291L26.888 36.301C20.404 30.238 10.278 30.645 4.278 37.144C-1.737 43.613 -1.362 53.737 5.107 59.737L216.483 256.01L5.107 452.282C-1.362 458.282 -1.737 468.407 4.278 474.875C7.419 478.281 11.7 480 15.997 480C19.904 480 23.81 478.594 26.888 475.719L250.889 267.728C254.139 264.697 255.998 260.447 255.998 256.01Z" })
  }
));
TerminalLight.displayName = "TerminalLight";
var Terminal_default = TerminalLight;
