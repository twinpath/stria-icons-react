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
var WaveTriangle_exports = {};
__export(WaveTriangle_exports, {
  default: () => WaveTriangle_default
});
module.exports = __toCommonJS(WaveTriangle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WaveTriangleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M614.417 260.812L496.01 418.688C488.385 428.844 476.729 434.688 464.01 434.688S439.635 428.844 432.01 418.656L195.198 102.938C186.073 90.688 165.948 90.719 156.823 102.906L38.417 260.812C35.76 264.375 30.729 265.031 27.198 262.406C23.667 259.75 22.948 254.75 25.604 251.188L144.01 93.312C159.26 73 192.76 72.969 208.01 93.344L444.823 409.062C453.948 421.312 474.073 421.281 483.198 409.094L601.604 251.188C604.26 247.688 609.323 247 612.823 249.594C616.354 252.25 617.073 257.25 614.417 260.812Z" })
  }
));
WaveTriangleThin.displayName = "WaveTriangleThin";
var WaveTriangle_default = WaveTriangleThin;
