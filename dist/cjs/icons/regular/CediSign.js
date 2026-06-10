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
var CediSign_exports = {};
__export(CediSign_exports, {
  default: () => CediSign_default
});
module.exports = __toCommonJS(CediSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CediSignRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M310.972 352.188C289.422 373.85 261.751 386.686 231.969 390.365V121.635C261.751 125.314 289.422 138.15 310.972 159.812C320.365 169.219 335.541 169.219 344.934 159.875C354.327 150.531 354.358 135.344 345.012 125.937C314.368 95.176 274.616 77.51 231.969 73.635V24C231.969 10.75 221.216 0 207.963 0S183.957 10.75 183.957 24V75.074C146.917 81.459 112.715 98.711 85.605 125.937C14.134 197.656 14.134 314.344 85.589 386.062C112.711 413.289 146.917 430.541 183.957 436.926V488C183.957 501.25 194.71 512 207.963 512S231.969 501.25 231.969 488V438.365C274.616 434.49 314.368 416.824 345.012 386.063C354.358 376.656 354.327 361.469 344.934 352.125C335.541 342.781 320.365 342.781 310.972 352.188ZM119.613 352.188C66.772 299.156 66.772 212.844 119.629 159.812C137.592 141.754 159.844 129.789 183.957 124.049V387.949C159.844 382.209 137.588 370.246 119.613 352.188Z" })
  }
));
CediSignRegular.displayName = "CediSignRegular";
var CediSign_default = CediSignRegular;
