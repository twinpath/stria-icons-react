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
var ArrowTrendUp_exports = {};
__export(ArrowTrendUp_exports, {
  default: () => ArrowTrendUp_default
});
module.exports = __toCommonJS(ArrowTrendUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowTrendUpDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 205.25L342.625 374.625C336.375 380.875 328.188 384 320 384S303.625 380.875 297.375 374.625L192 269.25L54.625 406.625C48.375 412.875 40.188 416 32 416C13.721 416 0 401.053 0 384C0 375.812 3.125 367.625 9.375 361.375L169.375 201.375C175.625 195.125 183.812 192 192 192S208.375 195.125 214.625 201.375L320 306.75L466.75 160H512V205.25Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 320C526.312 320 512 305.672 512 288V160H384C366.312 160 352 145.672 352 128S366.312 96 384 96H544C561.688 96 576 110.328 576 128V288C576 305.672 561.688 320 544 320Z" })
    ]
  }
));
ArrowTrendUpDuotone.displayName = "ArrowTrendUpDuotone";
var ArrowTrendUp_default = ArrowTrendUpDuotone;
