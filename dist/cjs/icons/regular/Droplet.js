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
var Droplet_exports = {};
__export(Droplet_exports, {
  default: () => Droplet_default
});
module.exports = __toCommonJS(Droplet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DropletRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M221.25 22.125C217.25 7.5 204.625 0 192 0C179.625 0 167.25 7.25 162.75 22.125C116 179.875 16 222.75 16 333.875C16 432.375 94.75 512 192 512S368 432.375 368 333.875C368 222.125 268.25 180.625 221.25 22.125ZM192 464C121.375 464 64 405.625 64 333.875C64 290.625 84.625 261 116 216.125C140.125 181.5 169 140.25 192 83.625C215.125 140.5 244 181.75 268.25 216.375C299.375 260.875 320 290.375 320 333.875C320 405.625 262.625 464 192 464ZM208 400C163.875 400 128 364.125 128 320C128 311.125 120.875 304 112 304S96 311.125 96 320C96 381.75 146.25 432 208 432C216.875 432 224 424.875 224 416S216.875 400 208 400Z" })
  }
));
DropletRegular.displayName = "DropletRegular";
var Droplet_default = DropletRegular;
