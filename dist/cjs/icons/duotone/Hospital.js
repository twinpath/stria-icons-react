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
var Hospital_exports = {};
__export(Hospital_exports, {
  default: () => Hospital_default
});
module.exports = __toCommonJS(Hospital_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HospitalDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 0.029H48C21.49 0.029 0 21.519 0 48.029V480.029C0 497.702 14.327 512.029 32 512.029H144V432.029C144 405.519 165.49 384.029 192 384.029S240 405.519 240 432.029V512.029H352C369.673 512.029 384 497.702 384 480.029V48.029C384 21.519 362.51 0.029 336 0.029ZM128 304.029C128 312.865 120.836 320.029 112 320.029H80C71.164 320.029 64 312.865 64 304.029V272.029C64 263.191 71.164 256.029 80 256.029H112C120.836 256.029 128 263.191 128 272.029V304.029ZM224 304.029C224 312.865 216.836 320.029 208 320.029H176C167.164 320.029 160 312.865 160 304.029V272.029C160 263.191 167.164 256.029 176 256.029H208C216.836 256.029 224 263.191 224 272.029V304.029ZM247.68 153.631H217.602V183.709C217.602 188.302 213.875 192.029 209.281 192.029H174.719C170.125 192.029 166.398 188.302 166.398 183.709V153.631H136.32C131.727 153.631 128 149.904 128 145.31V110.748C128 106.154 131.727 102.427 136.32 102.427H166.398V72.349C166.398 67.756 170.125 64.029 174.719 64.029H209.281C213.875 64.029 217.602 67.756 217.602 72.349V102.427H247.68C252.273 102.427 256 106.154 256 110.748V145.31C256 149.904 252.273 153.631 247.68 153.631ZM320 304.029C320 312.865 312.836 320.029 304 320.029H272C263.164 320.029 256 312.865 256 304.029V272.029C256 263.191 263.164 256.029 272 256.029H304C312.836 256.029 320 263.191 320 272.029V304.029Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M247.68 153.631H217.602V183.709C217.602 188.302 213.875 192.029 209.281 192.029H174.719C170.125 192.029 166.398 188.302 166.398 183.709V153.631H136.32C131.727 153.631 128 149.904 128 145.31V110.748C128 106.154 131.727 102.427 136.32 102.427H166.398V72.349C166.398 67.756 170.125 64.029 174.719 64.029H209.281C213.875 64.029 217.602 67.756 217.602 72.349V102.427H247.68C252.273 102.427 256 106.154 256 110.748V145.31C256 149.904 252.273 153.631 247.68 153.631Z" })
    ]
  }
));
HospitalDuotone.displayName = "HospitalDuotone";
var Hospital_default = HospitalDuotone;
