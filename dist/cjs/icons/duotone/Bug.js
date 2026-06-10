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
const BugDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 96C352 42.98 309.02 0 256 0S160 42.98 160 96V160H352V96Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 288C512 305.672 497.688 320 480 320H416V352C416 367.109 412.912 381.396 408.105 394.855L470.625 457.375C483.125 469.875 483.125 490.125 470.625 502.625C464.375 508.875 456.188 512 448 512S431.625 508.875 425.375 502.625L371.25 448.5C348.82 467.867 319.961 480 288 480H272V239.924C272 231.129 264.871 224 256.076 224S240.152 231.129 240.152 239.924V480H224C192.041 480 163.18 467.867 140.75 448.5L86.625 502.625C80.375 508.875 72.188 512 64 512S47.625 508.875 41.375 502.625C28.875 490.125 28.875 469.875 41.375 457.375L103.895 394.855C99.088 381.396 96 367.109 96 352V320H32C14.312 320 0 305.672 0 288S14.312 256 32 256H96V205.25L41.375 150.625C28.875 138.125 28.875 117.875 41.375 105.375C47.625 99.125 55.812 96 64 96C72.187 96 80.375 99.125 86.625 105.375L141.25 160H370.75L425.375 105.375C431.625 99.125 439.812 96 448 96C456.187 96 464.375 99.125 470.625 105.375C483.125 117.875 483.125 138.125 470.625 150.625L416 205.25V256H480C497.688 256 512 270.328 512 288Z" })
    ]
  }
));
BugDuotone.displayName = "BugDuotone";
var Bug_default = BugDuotone;
