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
var Dog_exports = {};
__export(Dog_exports, {
  default: () => Dog_default
});
module.exports = __toCommonJS(Dog_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DogSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M297.999 224.002L448 277.502V496C448 504.875 440.875 512 432 512H368C359.125 512 352 504.875 352 496V384.001H192V496C192 504.875 184.875 512 176 512H112C103.125 512 96 504.875 96 496V282.127C58.875 268.877 32 233.627 32 192.002C32 174.377 46.375 160.002 64 160.002S96 174.377 96 192.002S110.375 224.002 128 224.002H297.999ZM544 112.003V144.003C544 179.377 515.375 208.002 480 208.002H448V243.627L320 197.877V48.003C320 33.753 337.25 26.628 347.25 36.753L374.625 64.003H428.25C439.125 64.003 452 71.878 456.875 81.753L464 96.003H528C536.875 96.003 544 103.128 544 112.003ZM432 112.003C432 103.128 424.875 96.003 416 96.003S400 103.128 400 112.003S407.125 128.003 416 128.003S432 120.878 432 112.003Z" })
  }
));
DogSolid.displayName = "DogSolid";
var Dog_default = DogSolid;
