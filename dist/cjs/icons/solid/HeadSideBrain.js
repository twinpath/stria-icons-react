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
var HeadSideBrain_exports = {};
__export(HeadSideBrain_exports, {
  default: () => HeadSideBrain_default
});
module.exports = __toCommonJS(HeadSideBrain_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeadSideBrainSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160.002 179V176C160.002 177 159.752 177.875 159.752 178.875C159.752 178.875 159.877 178.875 160.002 179ZM509.256 275C488.256 227.875 460.756 123.25 436.131 88.25C397.13 32.875 333.754 0 266.128 0H192.002C86.001 0 0 86 0 192C0 246.5 23.25 298.5 64.001 334.875V512H320.004V448H384.005C419.38 448 448.006 419.375 448.006 384V320H480.006C490.881 320 500.881 314.5 506.756 305.375C512.757 296.375 513.632 284.875 509.256 275ZM336.004 208H285.004C287.004 213.125 288.004 218.5 288.004 224C288.004 250.5 266.503 272 240.003 272C234.503 272 229.128 271 224.003 269V320H160.002V269C154.877 271 149.502 272 144.002 272C117.501 272 96.001 250.5 96.001 224C96.001 223 96.251 222.125 96.251 221.125C74.126 213.5 60.751 191 64.626 167.875C68.626 144.875 88.626 128 112.001 128C112.001 101.5 133.502 80 160.002 80C168.252 80 176.377 82.25 183.502 86.375C192.252 72.5 207.503 64 224.003 64C240.503 64 255.753 72.5 264.503 86.375C276.754 79.25 291.504 78 304.879 83C318.129 88 328.504 98.625 333.004 112H336.004C362.505 112 384.005 133.5 384.005 160S362.505 208 336.004 208Z" })
  }
));
HeadSideBrainSolid.displayName = "HeadSideBrainSolid";
var HeadSideBrain_default = HeadSideBrainSolid;
