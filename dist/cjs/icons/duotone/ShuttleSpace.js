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
var ShuttleSpace_exports = {};
__export(ShuttleSpace_exports, {
  default: () => ShuttleSpace_default
});
module.exports = __toCommonJS(ShuttleSpace_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShuttleSpaceDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 432C32 458.51 53.49 480 80 480H96V384H32V432ZM160 160H416C288 128 192 32 128 32V128C145.674 128 160 142.326 160 160ZM32 80V128H96V32H80C53.49 32 32 53.49 32 80ZM128 384V480C192 480 288 384 416 352H160C160 369.672 145.674 384 128 384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576.834 192.332C533 171.832 474.334 160 416 160H160C160 142.326 145.674 128 128 128H32C14.328 128 0 142.326 0 160V224C0 241.672 0 352 0 352C0 369.672 14.328 384 32 384H128C145.674 384 160 369.672 160 352H416C474.334 352 533 340.166 576.834 319.666C616.334 301.166 640 277.332 640 256C640 234.666 616.334 210.832 576.834 192.332ZM481.969 306.072C476.492 306.072 471.953 301.535 471.953 296.059V215.941C471.953 210.465 476.492 205.926 481.969 205.926C521.871 205.926 522.027 306.072 481.969 306.072Z" })
    ]
  }
));
ShuttleSpaceDuotone.displayName = "ShuttleSpaceDuotone";
var ShuttleSpace_default = ShuttleSpaceDuotone;
