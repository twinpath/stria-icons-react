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
var WindowRestore_exports = {};
__export(WindowRestore_exports, {
  default: () => WindowRestore_default
});
module.exports = __toCommonJS(WindowRestore_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WindowRestoreLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 128H64C28.654 128 0 156.652 0 192V448C0 483.348 28.654 512 64 512H320C355.346 512 384 483.348 384 448V192C384 156.652 355.346 128 320 128ZM352 448C352 465.645 337.645 480 320 480H64C46.355 480 32 465.645 32 448V288H352V448ZM352 256H32V192C32 174.355 46.355 160 64 160H320C337.645 160 352 174.355 352 192V256ZM448 0H192C156.654 0 128 28.652 128 64V96H160V64C160 46.355 174.355 32 192 32H448C465.645 32 480 46.355 480 64V320C480 337.645 465.645 352 448 352H416V384H448C483.346 384 512 355.348 512 320V64C512 28.652 483.346 0 448 0Z" })
  }
));
WindowRestoreLight.displayName = "WindowRestoreLight";
var WindowRestore_default = WindowRestoreLight;
