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
const CameraWebDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224.125 96H224C153.375 96 96 153.25 96 224S153.375 352 224 352C294.75 352 352 294.75 352 224C352 153.375 294.75 96 224.125 96ZM224 176C197.5 176 176.125 197.5 176 224C176 232.875 168.875 240 160 240C151.25 240 144 232.875 144 224C144.125 179.875 179.875 144 224 144C232.875 144 240 151.125 240 160S232.875 176 224 176Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400.875 438.626L351.75 407.876C409.875 367.376 448 300.251 448 224.001C448 100.251 347.625 0.001 224 0.001C100.25 0.001 0 100.251 0 224.001C0 300.251 38.125 367.376 96.125 407.876L47 438.626C37.625 444.501 32 454.751 32 465.751V480.001C32 497.626 46.375 512.001 64 512.001H384C401.625 512.001 416 497.626 416 480.001V465.751C416 454.751 410.25 444.501 400.875 438.626ZM223.875 384.001C135.5 384.001 63.875 312.376 63.875 224.001S135.5 64.001 223.875 64.001S383.875 135.626 383.875 224.001S312.25 384.001 224 384.001H223.875Z" })
    ]
  }
));
CameraWebDuotone.displayName = "CameraWebDuotone";
var CameraWeb_default = CameraWebDuotone;
