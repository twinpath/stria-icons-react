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
var SkullCow_exports = {};
__export(SkullCow_exports, {
  default: () => SkullCow_default
});
module.exports = __toCommonJS(SkullCow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SkullCowDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 128.113C78.625 128.113 66.875 123.363 60.125 113.486C43.375 89.359 56.5 38.979 63 21.602C65.625 14.6 63 6.725 56.75 2.598C50.375 -1.527 42.125 -0.652 36.75 4.598C13 27.852 0 60.23 0 95.859C0 166.492 57.375 224 128 224H160V160C160 148.277 163.373 137.443 168.863 128H128L96 128.113ZM603.25 4.721V4.596C597.875 -0.652 589.5 -1.525 583.25 2.598C576.875 6.721 574.25 14.717 577 21.713C583 37.832 596.625 89.434 579.875 113.549C573.125 123.42 561.375 128.166 544 128.166L512 128H471.137C476.627 137.443 480 148.277 480 160V224H512C582.625 224 640 166.525 640 95.932C640 60.322 627 27.961 603.25 4.721Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 96H224C188.625 96 160 124.625 160 160V288C160 323.375 188.625 352 224 352L250.875 486.25C253.75 501.25 267 512 282.25 512H357.75C373 512 386.125 501.25 389.125 486.25L416 352C451.375 352 480 323.375 480 288V160C480 124.625 451.375 96 416 96ZM256 288C238.375 288 224 273.625 224 256S238.375 224 256 224S288 238.375 288 256S273.625 288 256 288ZM384 288C366.375 288 352 273.625 352 256S366.375 224 384 224S416 238.375 416 256S401.625 288 384 288Z" })
    ]
  }
));
SkullCowDuotone.displayName = "SkullCowDuotone";
var SkullCow_default = SkullCowDuotone;
