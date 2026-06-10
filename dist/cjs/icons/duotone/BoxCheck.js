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
var BoxCheck_exports = {};
__export(BoxCheck_exports, {
  default: () => BoxCheck_default
});
module.exports = __toCommonJS(BoxCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoxCheckDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M447.25 158.75L390.875 53.875C386.5 40.75 374.375 32 360.5 32H239.625V160H446.375C446.75 159.5 446.875 159.25 447.25 158.75ZM207.625 160V32H86.75C72.875 32 60.75 40.75 56.375 53.875L0 158.75C0.375 159.25 0.5 159.5 0.875 160H207.625Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240 160V32H208V160H0V432C0 458.51 21.49 480 48 480H400C426.51 480 448 458.51 448 432V160H240ZM312.969 280.969L216.969 376.969C212.281 381.656 206.141 384 200 384S187.719 381.656 183.031 376.969L135.031 328.969C125.656 319.594 125.656 304.406 135.031 295.031S159.594 285.656 168.969 295.031L200 326.062L279.031 247.031C288.406 237.656 303.594 237.656 312.969 247.031S322.344 271.594 312.969 280.969Z" })
    ]
  }
));
BoxCheckDuotone.displayName = "BoxCheckDuotone";
var BoxCheck_default = BoxCheckDuotone;
