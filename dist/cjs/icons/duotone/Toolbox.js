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
const ToolboxDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 320V368C384 376.875 376.875 384 368 384H336C327.125 384 320 376.875 320 368V320H192V368C192 376.875 184.875 384 176 384H144C135.125 384 128 376.875 128 368V320H0V448C0 465.625 14.375 480 32 480H480C497.625 480 512 465.625 512 448V320H384ZM176 80H336V128H384V80C384 53.5 362.5 32 336 32H176C149.5 32 128 53.5 128 80V128H176V80Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 205.25V320H384V272C384 263.125 376.875 256 368 256H336C327.125 256 320 263.125 320 272V320H192V272C192 263.125 184.875 256 176 256H144C135.125 256 128 263.125 128 272V320H0V205.25C0 196.75 3.375 188.625 9.375 182.625L54.625 137.375C60.625 131.375 68.75 128 77.25 128H434.75C443.25 128 451.375 131.375 457.375 137.375L502.625 182.625C508.625 188.625 512 196.75 512 205.25Z" })
    ]
  }
));
ToolboxDuotone.displayName = "ToolboxDuotone";
var Toolbox_default = ToolboxDuotone;
