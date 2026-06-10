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
var Camera_exports = {};
__export(Camera_exports, {
  default: () => Camera_default
});
module.exports = __toCommonJS(Camera_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CameraThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 96H376L363.625 63.125C356.625 44.375 338.75 32 318.75 32H193.25C173.25 32 155.25 44.375 148.25 63.125L136 96H48C21.5 96 0 117.5 0 144V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V144C512 117.5 490.5 96 464 96ZM496 432C496 449.645 481.645 464 464 464H48C30.355 464 16 449.645 16 432V144C16 126.355 30.355 112 48 112H147.113L163.238 68.721C167.867 56.326 179.926 48 193.25 48H318.75C332 48 344.008 56.326 348.652 68.762L364.926 112H464C481.645 112 496 126.355 496 144V432ZM256 176C194.242 176 144 226.242 144 288C144 349.756 194.242 400 256 400S368 349.756 368 288C368 226.242 317.758 176 256 176ZM256 384C203 384 160 341 160 288S203 192 256 192S352 235 352 288S309 384 256 384Z" })
  }
));
CameraThin.displayName = "CameraThin";
var Camera_default = CameraThin;
