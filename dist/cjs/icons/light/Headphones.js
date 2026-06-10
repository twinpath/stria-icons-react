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
var Headphones_exports = {};
__export(Headphones_exports, {
  default: () => Headphones_default
});
module.exports = __toCommonJS(Headphones_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeadphonesLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M243.025 32.322C105.537 39.152 0 157.799 0 295.455V415.875C0 451.25 28.625 480 64 480H96C113.625 480 128 465.625 128 448V288C128 270.375 113.625 256 96 256H64C53.207 256 43.199 258.93 34.283 263.654C48.479 156.842 134.807 69.719 244.684 64.281C365.178 58.316 466.424 148.199 478.732 264.207C469.576 259.141 459.207 256 448 256H416C398.375 256 384 270.375 384 288V448C384 465.625 398.375 480 416 480H448C483.375 480 512 451.25 512 415.875V288C512 142.574 390.016 25.021 243.025 32.322ZM64 288H96V448H64C46.375 448 32 433.5 32 415.875V320.125C32 302.5 46.375 288 64 288ZM480 415.875C480 433.5 465.625 448 448 448H416V288H448C465.625 288 480 302.5 480 320.125V415.875Z" })
  }
));
HeadphonesLight.displayName = "HeadphonesLight";
var Headphones_default = HeadphonesLight;
