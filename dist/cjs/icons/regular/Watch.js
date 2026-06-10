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
var Watch_exports = {};
__export(Watch_exports, {
  default: () => Watch_default
});
module.exports = __toCommonJS(Watch_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WatchRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M216 236.75V176C216 162.75 205.25 152 192 152S168 162.75 168 176V248C168 255.125 171.156 261.875 176.625 266.438L224.625 306.438C229.125 310.188 234.562 312 240 312C246.875 312 253.688 309.062 258.438 303.375C266.938 293.188 265.562 278.063 255.375 269.563L216 236.75ZM320 113.18V48C320 21.602 298.4 0 272 0H112C85.6 0 64 21.602 64 48V113.18C24.805 148.328 0 199.207 0 256S24.805 363.668 64 398.82V464C64 490.398 85.6 512 112 512H272C298.4 512 320 490.398 320 464V398.82C359.195 363.672 384 312.797 384 256S359.195 148.328 320 113.18ZM192 400C112.598 400 48 335.402 48 256S112.598 112 192 112S336 176.598 336 256S271.402 400 192 400Z" })
  }
));
WatchRegular.displayName = "WatchRegular";
var Watch_default = WatchRegular;
