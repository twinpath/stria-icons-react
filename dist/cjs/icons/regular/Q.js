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
const QRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M393.066 402.484C427.184 363.164 448 312.016 448 256C448 132.5 347.516 32 224 32S0 132.5 0 256S100.484 480 224 480C268.447 480 309.807 466.828 344.68 444.41L391.422 500.5C397.75 508.094 406.844 512 416.016 512C423.234 512 430.5 509.562 436.484 504.594C450.062 493.281 451.891 473.094 440.578 459.5L393.066 402.484ZM224 416C135.781 416 64 344.219 64 256S135.781 96 224 96S384 167.781 384 256C384 292.211 371.449 325.27 351.09 352.113L280.578 267.5C269.25 253.906 249.078 252.125 235.516 263.406C221.938 274.719 220.109 294.906 231.422 308.5L302.938 394.32C279.545 407.727 252.84 416 224 416Z" })
  }
));
QRegular.displayName = "QRegular";
var Q_default = QRegular;
