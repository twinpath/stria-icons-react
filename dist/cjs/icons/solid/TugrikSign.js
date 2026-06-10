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
const TugrikSignSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M232 112V181.031L312.25 160.969C329.312 156.625 346.75 167.094 351.031 184.25C355.344 201.375 344.906 218.75 327.75 223.031L232 246.969V277.031L312.25 256.969C329.312 252.625 346.75 263.094 351.031 280.25C355.344 297.375 344.906 314.75 327.75 319.031L232 342.969V440C232 462.094 214.094 480 192 480S152 462.094 152 440V362.969L71.75 383.031C69.156 383.688 66.531 384 63.969 384C49.625 384 36.594 374.312 32.969 359.75C28.656 342.625 39.094 325.25 56.25 320.969L152 297.031V266.969L71.75 287.031C69.156 287.688 66.531 288 63.969 288C49.625 288 36.594 278.312 32.969 263.75C28.656 246.625 39.094 229.25 56.25 224.969L152 201.031V112H40C17.906 112 0 94.094 0 72S17.906 32 40 32H344C366.094 32 384 49.906 384 72S366.094 112 344 112H232Z" })
  }
));
TugrikSignSolid.displayName = "TugrikSignSolid";
var TugrikSign_default = TugrikSignSolid;
