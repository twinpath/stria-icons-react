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
var CameraWeb_exports = {};
__export(CameraWeb_exports, {
  default: () => CameraWeb_default
});
module.exports = __toCommonJS(CameraWeb_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CameraWebSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400.875 438.625L351.75 407.875C409.875 367.375 448 300.25 448 224C448 100.25 347.625 0 224 0C100.25 0 0 100.25 0 224C0 300.25 38.125 367.375 96.125 407.875L47 438.625C37.625 444.5 32 454.75 32 465.75V480C32 497.625 46.375 512 64 512H384C401.625 512 416 497.625 416 480V465.75C416 454.75 410.25 444.5 400.875 438.625ZM223.875 384C135.5 384 63.875 312.375 63.875 224S135.5 64 223.875 64S383.875 135.625 383.875 224S312.25 384 224 384H223.875ZM223.875 96C153.25 96 95.875 153.25 95.875 224S153.25 352 223.875 352C294.625 352 351.875 294.75 351.875 224C351.875 153.375 294.625 96 224 96H223.875ZM223.875 176C197.375 176 176 197.5 175.875 224C175.875 232.875 168.75 240 159.875 240C151.125 240 143.875 232.875 143.875 224C144 179.875 179.75 144 223.875 144C232.75 144 239.875 151.125 239.875 160S232.75 176 223.875 176Z" })
  }
));
CameraWebSolid.displayName = "CameraWebSolid";
var CameraWeb_default = CameraWebSolid;
