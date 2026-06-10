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
var WagonCovered_exports = {};
__export(WagonCovered_exports, {
  default: () => WagonCovered_default
});
module.exports = __toCommonJS(WagonCovered_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WagonCoveredLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M629.614 27.75C617.987 10.375 598.485 0 577.608 0C560.733 0 426.096 32 409.969 32C398.467 21.75 383.467 16 367.965 16H271.957C256.455 16 241.579 21.75 229.954 32C213.827 32 79.44 0 62.313 0C41.561 0 22.184 10.25 10.559 27.5C-1.068 44.75 -3.193 66.625 4.682 85.875L95.942 256V272.062C95.942 280.863 103.077 288 111.879 288S127.819 280.863 127.819 272.062V256H512.102V272.062C512.102 280.863 519.239 288 528.041 288S543.981 280.863 543.981 272.062V256H544.106L635.114 86.375C643.239 67.125 641.114 45.125 629.614 27.75ZM207.952 79.625V224H115.067L33.686 72.25C30.186 62.375 32.061 51.375 38.686 43.25C45.561 34.75 56.438 30.625 67.188 32.375L210.702 62C208.952 67.625 208.077 73.625 207.952 79.625ZM399.967 224H239.954V79.625C239.954 73.875 242.579 67.5 244.704 64C250.205 54.5 260.08 47.75 271.957 47.75H367.965C379.84 47.75 389.717 54.5 395.217 64C397.342 67.5 399.967 73.875 399.967 79.625V224ZM605.987 72.75L524.979 224H431.971V79.625C431.846 73.625 430.971 67.75 429.221 62L571.983 32.5C575.358 31.875 590.485 29.875 601.235 43.25C607.987 51.5 609.737 62.75 605.987 72.75ZM464 288C402.145 288 352 338.145 352 400S402.145 512 464 512S576 461.855 576 400S525.856 288 464 288ZM448 478.381C416.702 472.002 391.998 447.299 385.62 416H448V478.381ZM448 384H385.62C391.998 352.701 416.702 327.998 448 321.619V384ZM480 478.381V416H542.381C536.002 447.299 511.301 472.002 480 478.381ZM480 384V321.619C511.301 327.998 536.002 352.701 542.381 384H480ZM176 288C114.145 288 64 338.145 64 400S114.145 512 176 512S288 461.855 288 400S237.856 288 176 288ZM160 478.381C128.702 472.002 103.998 447.299 97.62 416H160V478.381ZM160 384H97.62C103.998 352.701 128.702 327.998 160 321.619V384ZM192 478.381V416H254.381C248.002 447.299 223.301 472.002 192 478.381ZM192 384V321.619C223.301 327.998 248.002 352.701 254.381 384H192Z" })
  }
));
WagonCoveredLight.displayName = "WagonCoveredLight";
var WagonCovered_default = WagonCoveredLight;
