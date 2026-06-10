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
var Archway_exports = {};
__export(Archway_exports, {
  default: () => Archway_default
});
module.exports = __toCommonJS(Archway_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArchwayLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M560 480H544V32H560C568.801 32 576 24.801 576 16S568.801 0 560 0H16C7.199 0 0 7.199 0 16S7.199 32 16 32H32V480H16C7.199 480 0 487.199 0 496S7.199 512 16 512H176C184.836 512 192 504.836 192 496V323.197C192 270.354 233.324 225.01 286.158 224.018C340 223.008 384 266.387 384 320V496C384 504.836 391.164 512 400 512H560C568.801 512 576 504.801 576 496S568.801 480 560 480ZM512 480H416V320C416 249.375 358.625 192 288 192S160 249.375 160 320V480H64V128H512V480ZM512 96H64V32H512V96Z" })
  }
));
ArchwayLight.displayName = "ArchwayLight";
var Archway_default = ArchwayLight;
