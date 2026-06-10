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
var ArrowUpToLine_exports = {};
__export(ArrowUpToLine_exports, {
  default: () => ArrowUpToLine_default
});
module.exports = __toCommonJS(ArrowUpToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpToLineSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M86.625 342.625L160 269.25V448C160 465.688 174.312 480 192 480S224 465.688 224 448V269.25L297.375 342.625C303.625 348.875 311.812 352 320 352S336.375 348.875 342.625 342.625C355.125 330.125 355.125 309.875 342.625 297.375L214.625 169.375C202.125 156.875 181.875 156.875 169.375 169.375L41.375 297.375C28.875 309.875 28.875 330.125 41.375 342.625S74.125 355.125 86.625 342.625ZM32 96H352C369.688 96 384 81.688 384 64S369.688 32 352 32H32C14.312 32 0 46.312 0 64S14.312 96 32 96Z" })
  }
));
ArrowUpToLineSolid.displayName = "ArrowUpToLineSolid";
var ArrowUpToLine_default = ArrowUpToLineSolid;
