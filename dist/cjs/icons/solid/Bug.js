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
var Bug_exports = {};
__export(Bug_exports, {
  default: () => Bug_default
});
module.exports = __toCommonJS(Bug_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BugSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 256H416V205.25L470.625 150.625C483.125 138.125 483.125 117.875 470.625 105.375S437.875 92.875 425.375 105.375L370.75 160H141.25L86.625 105.375C74.125 92.875 53.875 92.875 41.375 105.375S28.875 138.125 41.375 150.625L96 205.25V256H32C14.312 256 0 270.328 0 288S14.312 320 32 320H96V352C96 367.109 99.088 381.396 103.895 394.855L41.375 457.375C28.875 469.875 28.875 490.125 41.375 502.625C47.625 508.875 55.812 512 64 512S80.375 508.875 86.625 502.625L140.75 448.5C163.18 467.867 192.041 480 224 480H240.152V239.924C240.152 231.129 247.281 224 256.076 224S272 231.129 272 239.924V480H288C319.961 480 348.82 467.867 371.25 448.5L425.375 502.625C431.625 508.875 439.812 512 448 512S464.375 508.875 470.625 502.625C483.125 490.125 483.125 469.875 470.625 457.375L408.105 394.855C412.912 381.396 416 367.109 416 352V320H480C497.688 320 512 305.672 512 288S497.688 256 480 256ZM352 96C352 42.98 309.02 0 256 0S160 42.98 160 96V128H352V96Z" })
  }
));
BugSolid.displayName = "BugSolid";
var Bug_default = BugSolid;
