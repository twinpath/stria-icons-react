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
var TextSize_exports = {};
__export(TextSize_exports, {
  default: () => TextSize_default
});
module.exports = __toCommonJS(TextSize_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TextSizeDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 72V120C384 142.094 366.094 160 344 160S304 142.094 304 120V112H231.357C231.449 113.107 232 114.057 232 115.188V416H256C273.672 416 288 430.312 288 448S273.672 480 256 480H128C110.328 480 96 465.688 96 448S110.328 416 128 416H152V115.188C152 114.057 152.551 113.107 152.643 112H80V120C80 142.094 62.094 160 40 160S0 142.094 0 120V72C0 49.906 17.906 32 40 32H344C366.094 32 384 49.906 384 72Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 256V288C640 305.688 625.672 320 608 320S576 305.688 576 288H512V416H528C545.672 416 560 430.312 560 448S545.672 480 528 480H432C414.328 480 400 465.688 400 448S414.328 416 432 416H448V288H384C384 305.688 369.672 320 352 320S320 305.688 320 288V256C320 238.312 334.328 224 352 224H608C625.672 224 640 238.312 640 256Z" })
    ]
  }
));
TextSizeDuotone.displayName = "TextSizeDuotone";
var TextSize_default = TextSizeDuotone;
