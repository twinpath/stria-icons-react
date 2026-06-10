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
var Wifi_exports = {};
__export(Wifi_exports, {
  default: () => Wifi_default
});
module.exports = __toCommonJS(Wifi_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WifiThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M317.645 351.939C282.301 351.939 253.645 380.609 253.645 415.969C253.645 451.33 282.301 480 317.645 480S381.645 451.33 381.645 415.969C381.645 380.609 352.988 351.939 317.645 351.939ZM317.645 463.992C291.176 463.992 269.645 442.449 269.645 415.969C269.645 389.49 291.176 367.947 317.645 367.947S365.645 389.49 365.645 415.969C365.645 442.449 344.113 463.992 317.645 463.992ZM635.312 163.428C460.188 -11.811 175.125 -11.811 0 163.428C-3.125 166.555 -3.125 171.619 0 174.746S8.188 177.873 11.312 174.746C180.25 5.76 455.062 5.76 624 174.746C625.562 176.309 627.594 177.09 629.656 177.09S633.75 176.309 635.312 174.746C638.438 171.619 638.438 166.555 635.312 163.428ZM317.656 191.863C242.562 191.863 171.969 221.111 118.875 274.246C115.75 277.371 115.75 282.437 118.875 285.562C122 288.689 127.062 288.689 130.187 285.562C180.25 235.461 246.844 207.871 317.656 207.871S455.062 235.461 505.125 285.562C506.687 287.127 508.719 287.908 510.781 287.908S514.875 287.127 516.437 285.562C519.562 282.438 519.562 277.371 516.437 274.246C463.344 221.111 392.75 191.863 317.656 191.863Z" })
  }
));
WifiThin.displayName = "WifiThin";
var Wifi_default = WifiThin;
