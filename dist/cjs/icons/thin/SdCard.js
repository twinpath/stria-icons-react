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
var SdCard_exports = {};
__export(SdCard_exports, {
  default: () => SdCard_default
});
module.exports = __toCommonJS(SdCard_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SdCardThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 0H128L0 128V448C0 483.25 28.75 512 64 512H320C355.25 512 384 483.25 384 448V64C384 28.75 355.25 0 320 0ZM368 448C368 474.467 346.467 496 320 496H64C37.533 496 16 474.467 16 448V134.627L134.627 16H320C346.467 16 368 37.533 368 64V448ZM168 64C163.594 64 160 67.594 160 72V152C160 156.406 163.594 160 168 160S176 156.406 176 152V72C176 67.594 172.406 64 168 64ZM232 64C227.594 64 224 67.594 224 72V152C224 156.406 227.594 160 232 160S240 156.406 240 152V72C240 67.594 236.406 64 232 64ZM296 64C291.594 64 288 67.594 288 72V152C288 156.406 291.594 160 296 160S304 156.406 304 152V72C304 67.594 300.406 64 296 64Z" })
  }
));
SdCardThin.displayName = "SdCardThin";
var SdCard_default = SdCardThin;
