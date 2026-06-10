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
var ArrowRightArrowLeft_exports = {};
__export(ArrowRightArrowLeft_exports, {
  default: () => ArrowRightArrowLeft_default
});
module.exports = __toCommonJS(ArrowRightArrowLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowRightArrowLeftLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 160H457.375L356.688 260.688C350.438 266.938 350.438 277.063 356.688 283.312S373.063 289.562 379.312 283.312L507.312 155.312C510.438 152.188 512 148.094 512 144S510.438 135.812 507.312 132.688L379.312 4.688C373.062 -1.562 362.937 -1.562 356.688 4.688S350.438 21.063 356.688 27.312L457.375 128H16C7.156 128 0 135.156 0 144S7.156 160 16 160ZM496 352H54.625L155.312 251.312C161.562 245.062 161.562 234.937 155.312 228.688S138.937 222.438 132.688 228.688L4.688 356.688C1.562 359.812 0 363.906 0 368S1.562 376.188 4.688 379.312L132.688 507.312C138.938 513.562 149.063 513.562 155.312 507.312S161.562 490.937 155.312 484.688L54.625 384H496C504.844 384 512 376.844 512 368S504.844 352 496 352Z" })
  }
));
ArrowRightArrowLeftLight.displayName = "ArrowRightArrowLeftLight";
var ArrowRightArrowLeft_default = ArrowRightArrowLeftLight;
