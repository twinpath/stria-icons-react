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
var ChartUser_exports = {};
__export(ChartUser_exports, {
  default: () => ChartUser_default
});
module.exports = __toCommonJS(ChartUser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartUserDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M592 0H208C181.5 0 160 22.25 160 49.625V96C183.418 96 205.096 102.781 224 113.805V64H576V352H287.313C309.387 368.484 326.848 390.496 338.072 416H592C618.498 416 639.998 393.75 639.998 366.375V49.625C639.998 22.25 618.498 0 592 0ZM311.998 218L366.998 273C376.373 282.375 391.623 282.375 400.998 273L472.998 201L497.248 225.25C508.623 236.625 527.998 228.625 527.998 212.5V124C527.998 117.375 522.623 112 515.998 112H427.498C411.373 112 403.373 131.375 414.748 142.75L438.998 167L383.998 222L328.998 167C319.623 157.625 304.373 157.625 294.998 167L280.248 181.75C284.998 195.125 287.998 209.125 287.998 224C287.998 230.875 286.998 237.375 285.998 244L311.998 218Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 320C213.02 320 256 277.016 256 224C256 170.98 213.02 128 160 128C106.982 128 64 170.98 64 224C64 277.016 106.982 320 160 320ZM192 352H128C57.307 352 0 409.305 0 480C0 497.672 14.326 512 32 512H288C305.674 512 320 497.672 320 480C320 409.305 262.693 352 192 352Z" })
    ]
  }
));
ChartUserDuotone.displayName = "ChartUserDuotone";
var ChartUser_default = ChartUserDuotone;
