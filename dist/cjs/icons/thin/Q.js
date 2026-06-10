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
var Q_exports = {};
__export(Q_exports, {
  default: () => Q_default
});
module.exports = __toCommonJS(Q_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const QThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M377.033 419.117C420.596 378.227 448 320.312 448 256C448 132.5 347.516 32 224 32S0 132.5 0 256S100.484 480 224 480C277.443 480 326.529 461.129 365.076 429.773L433.953 509.25C435.531 511.062 437.766 512 440 512C441.859 512 443.719 511.344 445.234 510.031C448.578 507.156 448.938 502.094 446.047 498.75L377.033 419.117ZM224 464C109.312 464 16 370.688 16 256S109.312 48 224 48S432 141.312 432 256C432 315.5 406.752 369.094 366.568 407.043L238.047 258.75C235.172 255.438 230.109 255.062 226.766 257.969C223.422 260.844 223.062 265.906 225.953 269.25L354.586 417.672C318.854 446.59 273.439 464 224 464Z" })
  }
));
QThin.displayName = "QThin";
var Q_default = QThin;
