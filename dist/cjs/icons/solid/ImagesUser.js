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
var ImagesUser_exports = {};
__export(ImagesUser_exports, {
  default: () => ImagesUser_default
});
module.exports = __toCommonJS(ImagesUser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ImagesUserSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528 32H144C117.49 32 96 53.492 96 80V336C96 362.508 117.49 384 144 384H528C554.51 384 576 362.508 576 336V80C576 53.492 554.51 32 528 32ZM336.014 96C371.359 96 400.014 124.656 400.014 160S371.359 224 336.014 224S272.014 195.344 272.014 160S300.668 96 336.014 96ZM432.014 320H240.014C231.178 320 224.014 312.836 224.014 304C224.014 277.492 245.504 256 272.014 256H400.014C426.523 256 448.014 277.492 448.014 304C448.014 312.836 440.85 320 432.014 320ZM48 400V96C21.49 96 0 117.492 0 144V416C0 451.344 28.654 480 64 480H432C458.51 480 480 458.508 480 432H80C62.326 432 48 417.672 48 400Z" })
  }
));
ImagesUserSolid.displayName = "ImagesUserSolid";
var ImagesUser_default = ImagesUserSolid;
