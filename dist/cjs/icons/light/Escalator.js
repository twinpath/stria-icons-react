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
var Escalator_exports = {};
__export(Escalator_exports, {
  default: () => Escalator_default
});
module.exports = __toCommonJS(Escalator_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EscalatorLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240 112C270.947 111.883 296 86.863 296 56C296 25.133 270.947 0.115 240 0C209.055 0.115 184 25.133 184 56C184 86.863 209.055 111.883 240 112ZM240 32C253.246 32.113 264 42.855 264 56C264 69.184 253.18 79.949 240.121 80C226.82 79.949 216 69.184 216 56C216 42.855 226.756 32.113 240 32ZM186.475 288.006L186.551 287.939C190.016 284.908 192.002 280.529 192.002 275.926V225.916C192.002 200.281 211.273 177.752 236.855 176.102C251.826 175.135 265.375 181.123 274.752 191.107C280.477 197.203 290.166 197.285 296.459 191.777C303.24 185.846 303.877 175.379 297.672 168.85C281.666 152.004 258.494 142.092 232.918 144.307C191.199 147.918 160.002 184.49 160.002 226.365V275.992C160.002 289.705 176.154 297.035 186.475 288.006ZM560 128H448C428.625 128 409.906 135.031 395.312 147.797L161.938 352H80C35.812 352 0 387.812 0 432S35.812 512 80 512H192C211.375 512 230.094 504.969 244.688 492.203L478.062 288H560C604.188 288 640 252.188 640 208S604.188 128 560 128ZM560 256H466.039L456.99 263.918L223.619 468.117C214.859 475.779 203.631 480 192 480H80C53.533 480 32 458.467 32 432S53.533 384 80 384H173.961L183.01 376.082L416.381 171.883C425.143 164.219 436.371 160 448 160H560C586.467 160 608 181.533 608 208S586.467 256 560 256Z" })
  }
));
EscalatorLight.displayName = "EscalatorLight";
var Escalator_default = EscalatorLight;
