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
var Seal_exports = {};
__export(Seal_exports, {
  default: () => Seal_default
});
module.exports = __toCommonJS(Seal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SealLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M493.235 222.059L447.647 176.471V112C447.647 85.49 426.157 64 399.647 64H335.177L289.589 18.412C280.216 9.039 267.933 4.354 255.647 4.354C243.364 4.354 231.079 9.039 221.706 18.412L176.118 64H111.647C85.138 64 63.647 85.49 63.647 112V176.471L18.06 222.059C-0.687 240.803 -0.687 271.195 18.06 289.941L63.647 335.529V400C63.647 426.51 85.138 448 111.647 448H176.118L221.706 493.588C231.079 502.959 243.364 507.646 255.647 507.646C267.933 507.646 280.216 502.959 289.589 493.588L335.177 448H399.647C426.157 448 447.647 426.51 447.647 400V335.529L493.235 289.941C511.981 271.195 511.981 240.803 493.235 222.059ZM470.608 267.314L415.647 322.275V400C415.647 408.822 408.47 416 399.647 416H321.923L266.962 470.959C262.884 475.037 258.122 475.646 255.647 475.646S248.411 475.037 244.333 470.959L189.372 416H111.647C102.825 416 95.647 408.822 95.647 400V322.275L40.687 267.314C36.608 263.236 35.999 258.475 35.999 256S36.608 248.764 40.687 244.688L95.647 189.727V112C95.647 103.178 102.825 96 111.647 96H189.372L244.333 41.041C248.411 36.961 253.173 36.354 255.647 36.354S262.884 36.961 266.962 41.041L321.923 96H399.647C408.47 96 415.647 103.178 415.647 112V189.727L425.021 199.1L470.61 244.688C474.687 248.764 475.296 253.525 475.296 256S474.687 263.236 470.608 267.314Z" })
  }
));
SealLight.displayName = "SealLight";
var Seal_default = SealLight;
