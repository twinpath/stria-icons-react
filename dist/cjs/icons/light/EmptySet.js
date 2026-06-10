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
var EmptySet_exports = {};
__export(EmptySet_exports, {
  default: () => EmptySet_default
});
module.exports = __toCommonJS(EmptySet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EmptySetLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M491.312 20.688C485.062 14.438 474.937 14.438 468.688 20.688L391.225 98.15C354.848 66.959 307.676 48 256 48C141.125 48 48 141.125 48 256C48 307.676 66.959 354.848 98.15 391.225L20.688 468.687C14.438 474.937 14.438 485.062 20.688 491.312C23.812 494.438 27.906 496 32 496S40.188 494.438 43.312 491.312L120.775 413.85C157.152 445.041 204.324 464 256 464C370.875 464 464 370.875 464 256C464 204.324 445.041 157.152 413.85 120.775L491.312 43.313C497.562 37.062 497.562 26.938 491.312 20.688ZM80 256C80 158.953 158.953 80 256 80C298.775 80 338.008 95.369 368.541 120.834L120.834 368.541C95.369 338.008 80 298.775 80 256ZM432 256C432 353.047 353.047 432 256 432C213.225 432 173.992 416.631 143.459 391.166L391.166 143.459C416.631 173.992 432 213.225 432 256Z" })
  }
));
EmptySetLight.displayName = "EmptySetLight";
var EmptySet_default = EmptySetLight;
