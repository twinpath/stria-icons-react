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
const WindowRestoreRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 128H64C28.654 128 0 156.652 0 192V448C0 483.348 28.654 512 64 512H320C355.346 512 384 483.348 384 448V192C384 156.652 355.346 128 320 128ZM336 448C336 456.824 328.822 464 320 464H64C55.178 464 48 456.824 48 448V256H336V448ZM448 0H192C156.654 0 128 28.652 128 64V96H176V64C176 55.176 183.178 48 192 48H448C456.822 48 464 55.176 464 64V320C464 328.824 456.822 336 448 336H416V384H448C483.348 384 512 355.348 512 320V64C512 28.652 483.348 0 448 0Z" })
  }
));
WindowRestoreRegular.displayName = "WindowRestoreRegular";
var WindowRestore_default = WindowRestoreRegular;
