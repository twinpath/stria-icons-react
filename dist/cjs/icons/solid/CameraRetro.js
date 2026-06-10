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
var CameraRetro_exports = {};
__export(CameraRetro_exports, {
  default: () => CameraRetro_default
});
module.exports = __toCommonJS(CameraRetro_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CameraRetroSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 224C211.908 224 176 259.908 176 304C176 348.09 211.908 384 256 384S336 348.09 336 304C336 259.908 300.092 224 256 224ZM464 32H271.107C261.172 32 251.373 34.312 242.486 38.756L192 64H160V48C160 39.162 152.836 32 144 32H80C71.164 32 64 39.162 64 48V64H48C21.49 64 0 85.49 0 112V432C0 458.51 21.49 480 48 480H464C490.51 480 512 458.51 512 432V80C512 53.49 490.51 32 464 32ZM256 416C194.273 416 144 365.727 144 304C144 242.271 194.273 192 256 192S368 242.271 368 304C368 365.727 317.727 416 256 416ZM448 192H369.979C340.932 162.441 300.617 144 256 144S171.068 162.441 142.021 192H64V128H207.109L271.107 96H448V192Z" })
  }
));
CameraRetroSolid.displayName = "CameraRetroSolid";
var CameraRetro_default = CameraRetroSolid;
