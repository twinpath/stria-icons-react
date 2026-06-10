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
var Home_exports = {};
__export(Home_exports, {
  default: () => Home_default
});
module.exports = __toCommonJS(Home_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HomeSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 256C575.999 273.602 561.736 288 544 288H511.994V480C511.994 497.672 497.666 512 479.994 512H384.004C366.33 512 352.004 497.672 352.004 480V367.994C352.004 359.158 344.842 351.994 336.006 351.994H240.012C231.176 351.994 224.012 359.158 224.012 367.994V480C224.012 497.672 209.686 512 192.012 512H96.023C78.35 512 64.023 497.672 64.023 480V288H32C14.222 288 0.001 273.557 0 256C0 246.948 3.842 238.104 10.922 231.906L266.922 7.922C273.885 1.824 281.857 0 288 0C295.523 0 303.047 2.641 309.078 7.922L565.078 231.906C572.158 238.104 576 246.948 576 256Z " })
  }
));
HomeSolid.displayName = "HomeSolid";
var Home_default = HomeSolid;
