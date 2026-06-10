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
var NotEqual_exports = {};
__export(NotEqual_exports, {
  default: () => NotEqual_default
});
module.exports = __toCommonJS(NotEqual_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const NotEqualThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 343.998C448 348.42 444.406 351.998 440 351.998H166.219L78.531 476.609C77 478.812 74.5 480 72 480C70.406 480 68.781 479.531 67.406 478.547C63.781 476 62.906 471.015 65.469 467.39L146.67 351.998H8C3.594 351.998 0 348.42 0 343.998C0 339.576 3.594 335.998 8 335.998H157.93L270.521 175.995H8C3.594 175.995 0 172.417 0 167.995S3.594 159.995 8 159.995H281.781L369.469 35.383C371.969 31.774 377.063 30.93 380.594 33.446C384.219 35.993 385.094 40.977 382.531 44.602L301.33 159.995H440C444.406 159.995 448 163.573 448 167.995S444.406 175.995 440 175.995H290.07L177.479 335.998H440C444.406 335.998 448 339.576 448 343.998Z" })
  }
));
NotEqualThin.displayName = "NotEqualThin";
var NotEqual_default = NotEqualThin;
