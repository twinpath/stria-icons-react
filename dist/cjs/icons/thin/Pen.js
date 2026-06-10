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
var Pen_exports = {};
__export(Pen_exports, {
  default: () => Pen_default
});
module.exports = __toCommonJS(Pen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M497.938 74.159L437.847 14.063C428.473 4.688 416.176 0 403.88 0S379.287 4.688 369.913 14.063L31.038 352.955C28.804 355.189 27.28 358.033 26.663 361.131L0.321 492.853C-1.707 502.966 6.16 512 15.949 512C16.996 512 18.066 511.896 19.148 511.68L150.857 485.335C153.954 484.716 156.798 483.194 159.032 480.962L497.938 142.084C516.687 123.317 516.687 92.91 497.938 74.159ZM147.72 469.645L16.007 495.992L42.35 364.27L309.646 96.957L415.036 202.353L147.72 469.645ZM486.626 130.769L426.348 191.042L320.962 85.646L381.225 25.376C387.271 19.331 395.318 16.001 403.88 16.001S420.489 19.331 426.535 25.376L486.626 85.472C499.106 97.957 499.106 118.278 486.626 130.769Z" })
  }
));
PenThin.displayName = "PenThin";
var Pen_default = PenThin;
