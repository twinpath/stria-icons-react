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
var EuroSign_exports = {};
__export(EuroSign_exports, {
  default: () => EuroSign_default
});
module.exports = __toCommonJS(EuroSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EuroSignLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M335.626 455.572C337.516 464.225 332.063 472.753 323.422 474.627C306.954 478.251 290.36 480 273.922 480C214.641 480 157.391 456.978 114.344 414.432C87.279 387.674 67.965 355.308 57.383 319.999H32C23.156 319.999 16 312.846 16 304.006C16 295.165 23.156 288.012 32 288.012H50.549C49.033 277.487 48 266.846 48 256.024C48 245.202 49.033 234.562 50.549 224.037H32C23.156 224.037 16 216.883 16 208.043C16 199.203 23.156 192.049 32 192.049H57.383C67.965 156.74 87.279 124.374 114.344 97.617C169.313 43.263 247.485 20.678 323.422 37.421C332.063 39.296 337.516 47.824 335.626 56.477C333.719 65.098 325.172 70.44 316.579 68.659C251.204 54.415 184.063 73.657 136.844 120.358C116.045 140.936 100.764 165.425 91.25 192.049H272C280.844 192.049 288 199.203 288 208.043C288 216.883 280.844 224.037 272 224.037H82.871C81.098 234.523 80 245.181 80 256.024C80 266.868 81.098 277.526 82.871 288.012H272C280.844 288.012 288 295.165 288 304.006C288 312.846 280.844 319.999 272 319.999H91.25C100.764 346.624 116.045 371.112 136.844 391.69C184.063 438.36 251.219 457.634 316.579 443.389C325.204 441.546 333.719 446.95 335.626 455.572Z" })
  }
));
EuroSignLight.displayName = "EuroSignLight";
var EuroSign_default = EuroSignLight;
