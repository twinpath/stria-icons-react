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
var BoxesStacked_exports = {};
__export(BoxesStacked_exports, {
  default: () => BoxesStacked_default
});
module.exports = __toCommonJS(BoxesStacked_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoxesStackedSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 288H160V384L128 362.75L96 384V288H32C14.398 288 0 302.4 0 320V480C0 497.6 14.398 512 32 512H224C241.602 512 256 497.6 256 480V320C256 302.4 241.602 288 224 288ZM192 224H384C401.602 224 416 209.6 416 192V32C416 14.4 401.602 0 384 0H320V96L288 74.75L256 96V0H192C174.398 0 160 14.4 160 32V192C160 209.6 174.398 224 192 224ZM544 288H480V384L448 362.75L416 384V288H352C334.398 288 320 302.4 320 320V480C320 497.6 334.398 512 352 512H544C561.602 512 576 497.6 576 480V320C576 302.4 561.602 288 544 288Z" })
  }
));
BoxesStackedSolid.displayName = "BoxesStackedSolid";
var BoxesStacked_default = BoxesStackedSolid;
