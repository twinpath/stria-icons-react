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
var CircleChevronLeft_exports = {};
__export(CircleChevronLeft_exports, {
  default: () => CircleChevronLeft_default
});
module.exports = __toCommonJS(CircleChevronLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleChevronLeftDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.42 16 16 123.418 16 256C16 388.578 123.42 496 256 496S496 388.578 496 256C496 123.418 388.58 16 256 16ZM310.625 345.375C323.125 357.875 323.125 378.125 310.625 390.625S277.875 403.125 265.375 390.625L153.375 278.625C147.125 272.375 144 264.188 144 256S147.125 239.625 153.375 233.375L265.375 121.375C277.875 108.875 298.125 108.875 310.625 121.375S323.125 154.125 310.625 166.625L221.25 256L310.625 345.375Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M310.625 345.375C323.125 357.875 323.125 378.125 310.625 390.625S277.875 403.125 265.375 390.625L153.375 278.625C147.125 272.375 144 264.188 144 256S147.125 239.625 153.375 233.375L265.375 121.375C277.875 108.875 298.125 108.875 310.625 121.375S323.125 154.125 310.625 166.625L221.25 256L310.625 345.375Z" })
    ]
  }
));
CircleChevronLeftDuotone.displayName = "CircleChevronLeftDuotone";
var CircleChevronLeft_default = CircleChevronLeftDuotone;
