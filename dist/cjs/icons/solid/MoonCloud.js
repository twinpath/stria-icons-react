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
var MoonCloud_exports = {};
__export(MoonCloud_exports, {
  default: () => MoonCloud_default
});
module.exports = __toCommonJS(MoonCloud_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MoonCloudSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 320C320 284.75 291.25 256 256 256C244 256 232.875 259.5 223.25 265.25C219.75 224.25 185.875 192 144 192C105.25 192 72.875 219.625 65.625 256.25C65.125 256.25 64.625 256 64 256C28.75 256 0 284.75 0 320S28.75 384 64 384H256C291.25 384 320 355.25 320 320ZM627.502 380.113C518.838 400.812 419.033 317.496 419.033 207.793C419.033 144.602 452.857 86.496 507.846 55.187C516.322 50.375 514.189 37.523 504.564 35.746C493.354 33.668 475.006 32 463.631 32C352.191 32 259.938 113.467 242.756 220.18C243.535 221.689 244.486 223.084 245.199 224.635C248.785 224.213 252.391 224 256 224C308.936 224 352 267.064 352 320C352 357.939 329.697 390.504 297.676 406.082C338.648 451.365 397.695 480 463.631 480C532.729 480 595.811 448.555 637.619 397.066C643.799 389.438 637.072 378.309 627.502 380.113Z" })
  }
));
MoonCloudSolid.displayName = "MoonCloudSolid";
var MoonCloud_default = MoonCloudSolid;
