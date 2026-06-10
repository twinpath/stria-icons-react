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
var Toolbox_exports = {};
__export(Toolbox_exports, {
  default: () => Toolbox_default
});
module.exports = __toCommonJS(Toolbox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ToolboxSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M502.625 182.625L457.375 137.375C451.375 131.375 443.25 128 434.75 128H384V80C384 53.5 362.5 32 336 32H176C149.5 32 128 53.5 128 80V128H77.25C68.75 128 60.625 131.375 54.625 137.375L9.375 182.625C3.375 188.625 0 196.75 0 205.25V304H128V272C128 263.125 135.125 256 144 256H176C184.875 256 192 263.125 192 272V304H320V272C320 263.125 327.125 256 336 256H368C376.875 256 384 263.125 384 272V304H512V205.25C512 196.75 508.625 188.625 502.625 182.625ZM336 128H176V80H336V128ZM384 368C384 376.875 376.875 384 368 384H336C327.125 384 320 376.875 320 368V336H192V368C192 376.875 184.875 384 176 384H144C135.125 384 128 376.875 128 368V336H0V448C0 465.625 14.375 480 32 480H480C497.625 480 512 465.625 512 448V336H384V368Z" })
  }
));
ToolboxSolid.displayName = "ToolboxSolid";
var Toolbox_default = ToolboxSolid;
