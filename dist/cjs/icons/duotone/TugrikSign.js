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
var TugrikSign_exports = {};
__export(TugrikSign_exports, {
  default: () => TugrikSign_default
});
module.exports = __toCommonJS(TugrikSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TugrikSignDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M351.035 184.25C346.754 167.094 329.316 156.656 312.254 160.969L232.004 181.031V246.969L327.754 223.031C344.91 218.75 355.347 201.375 351.035 184.25ZM32.972 359.75C36.597 374.312 49.629 384 63.972 384C66.535 384 69.16 383.688 71.754 383.031L152.004 362.969V297.031L56.254 320.969C39.097 325.25 28.66 342.625 32.972 359.75ZM32.972 263.75C36.597 278.312 49.629 288 63.972 288C66.535 288 69.16 287.688 71.754 287.031L152.004 266.969V201.031L56.254 224.969C39.097 229.25 28.66 246.625 32.972 263.75ZM312.254 256.969L232.004 277.031V342.969L327.754 319.031C344.91 314.75 355.347 297.375 351.035 280.25C346.754 263.094 329.316 252.625 312.254 256.969Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 72C384 94.094 366.094 112 344 112H232V440C232 462.094 214.094 480 192 480S152 462.094 152 440V112H40C17.906 112 0 94.094 0 72S17.906 32 40 32H344C366.094 32 384 49.906 384 72Z" })
    ]
  }
));
TugrikSignDuotone.displayName = "TugrikSignDuotone";
var TugrikSign_default = TugrikSignDuotone;
