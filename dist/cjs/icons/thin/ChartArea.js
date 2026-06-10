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
var ChartArea_exports = {};
__export(ChartArea_exports, {
  default: () => ChartArea_default
});
module.exports = __toCommonJS(ChartArea_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartAreaThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M72.014 416H472.014C476.42 416 480.014 412.422 480.014 408V288C480.014 286.234 479.42 284.516 478.357 283.125L386.045 163.125C382.982 159.187 376.42 159.187 373.357 163.125L302.232 255.609L201.295 130.969C198.232 127.219 191.92 127.219 188.857 130.969L65.795 282.969C64.639 284.391 64.014 286.172 64.014 288V408C64.014 412.422 67.607 416 72.014 416ZM80.014 290.828L195.076 148.719L296.17 273.547C297.701 275.422 299.982 276.516 302.389 276.516C304.607 276.25 307.201 275.344 308.732 273.391L379.701 181.125L464.014 290.719V400H80.014V290.828ZM504 464H72C41.125 464 16 438.875 16 408V40C16 35.594 12.406 32 8 32S0 35.594 0 40V408C0 447.688 32.312 480 72 480H504C508.406 480 512 476.406 512 472S508.406 464 504 464Z" })
  }
));
ChartAreaThin.displayName = "ChartAreaThin";
var ChartArea_default = ChartAreaThin;
