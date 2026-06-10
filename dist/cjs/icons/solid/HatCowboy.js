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
var HatCowboy_exports = {};
__export(HatCowboy_exports, {
  default: () => HatCowboy_default
});
module.exports = __toCommonJS(HatCowboy_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HatCowboySolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M489.96 264.875C480.46 207.5 450.46 32 392.21 32C378.21 32 365.71 37.875 355.21 46C334.46 61.875 305.585 61.875 284.71 46C274.21 38 261.71 32 247.71 32C189.46 32 159.46 207.5 149.96 264.875C188.71 277.5 243.71 288 319.96 288S451.21 277.5 489.96 264.875ZM632.835 227.75C626.71 223.625 618.585 224.25 613.085 229.25C612.085 230.125 511.835 320 319.96 320C129.085 320 27.71 230 26.71 229.125C21.21 224.25 13.085 223.625 7.085 227.75C0.96 231.875 -1.54 239.625 0.96 246.5C1.71 248.5 78.335 448 319.96 448S638.21 248.5 638.96 246.5C641.46 239.625 638.96 231.875 632.835 227.75Z" })
  }
));
HatCowboySolid.displayName = "HatCowboySolid";
var HatCowboy_default = HatCowboySolid;
