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
var MortarPestle_exports = {};
__export(MortarPestle_exports, {
  default: () => MortarPestle_default
});
module.exports = __toCommonJS(MortarPestle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MortarPestleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M487.992 191.998H24C10.75 191.998 0 202.748 0 215.998S10.75 239.998 24 239.998H32C32 319.342 74.029 392.109 141.123 432.188C132.467 449.547 127.998 468.453 127.998 488C127.998 501.25 138.748 512 151.998 512H359.994C373.244 512 383.994 501.25 383.994 488C383.994 468.453 379.525 449.547 370.869 432.188C437.963 392.109 479.992 319.342 479.992 239.998H487.992C501.242 239.998 511.992 229.248 511.992 215.998S501.242 191.998 487.992 191.998ZM326.871 401.016C320.027 404.016 314.996 410.047 313.246 417.312C311.465 424.578 313.184 432.25 317.902 438.062C324.34 446.031 329.121 454.781 332.152 464H179.842C182.873 454.781 187.654 446.031 194.092 438.062C198.811 432.25 200.529 424.578 198.748 417.312C196.998 410.047 191.967 404.016 185.123 401.016C121.248 372.859 79.998 309.654 79.998 239.998H431.994C431.994 309.654 390.744 372.859 326.871 401.016ZM503.555 42.264C513.648 33.67 514.867 18.529 506.273 8.436S482.555 -2.861 472.432 5.732L291.34 159.998H365.348L503.555 42.264Z" })
  }
));
MortarPestleRegular.displayName = "MortarPestleRegular";
var MortarPestle_default = MortarPestleRegular;
