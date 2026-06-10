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
const ArrowUpToLineDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 96H352C369.688 96 384 81.688 384 64S369.688 32 352 32H32C14.312 32 0 46.312 0 64S14.312 96 32 96Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M41.375 342.625C28.875 330.125 28.875 309.875 41.375 297.375L169.375 169.375C181.875 156.875 202.125 156.875 214.625 169.375L342.625 297.375C355.125 309.875 355.125 330.125 342.625 342.625C336.375 348.875 328.187 352 320 352S303.625 348.875 297.375 342.625L224 269.25V448C224 465.688 209.687 480 192 480S160 465.688 160 448V269.25L86.625 342.625C74.125 355.125 53.875 355.125 41.375 342.625Z" })
    ]
  }
));
ArrowUpToLineDuotone.displayName = "ArrowUpToLineDuotone";
var ArrowUpToLine_default = ArrowUpToLineDuotone;
