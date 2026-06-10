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
var WatchFitness_exports = {};
__export(WatchFitness_exports, {
  default: () => WatchFitness_default
});
module.exports = __toCommonJS(WatchFitness_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WatchFitnessDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 80H64C28.625 80 0 108.625 0 144V368C0 403.375 28.625 432 64 432H320C355.375 432 384 403.375 384 368V144C384 108.625 355.375 80 320 80ZM286.625 262.25L201.875 347.875C199.25 350.5 195.75 352 192 352S184.75 350.5 182.125 347.875L97.375 262.25C72.875 237.375 74.25 196.125 101.75 173.125C125.75 153.125 161.375 156.75 183.375 179L192 187.625L200.625 179C222.625 156.75 258.25 153.125 282.25 173.125C309.75 196.125 311.125 237.375 286.625 262.25Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M286.625 262.251L201.875 347.876C199.25 350.501 195.75 352.001 192 352.001S184.75 350.501 182.125 347.876L97.375 262.251C72.875 237.376 74.25 196.126 101.75 173.126C125.75 153.126 161.375 156.751 183.375 179.001L192 187.626L200.625 179.001C222.625 156.751 258.25 153.126 282.25 173.126C309.75 196.126 311.125 237.376 286.625 262.251ZM320 32.001C320 14.376 305.625 0.001 288 0.001H96C78.375 0.001 64 14.376 64 32.001V80.001H320V32.001ZM64 480.001C64 497.626 78.375 512.001 96 512.001H288C305.625 512.001 320 497.626 320 480.001V432.001H64V480.001Z" })
    ]
  }
));
WatchFitnessDuotone.displayName = "WatchFitnessDuotone";
var WatchFitness_default = WatchFitnessDuotone;
