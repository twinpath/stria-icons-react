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
var Whistle_exports = {};
__export(Whistle_exports, {
  default: () => Whistle_default
});
module.exports = __toCommonJS(Whistle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WhistleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M627.658 326.75L491.474 220.828L448.001 248L416.001 224L438.275 179.453L339.657 102.75L339.532 102.91C307.364 78.594 267.434 64 224.001 64C117.961 64 32 149.961 32 256S117.961 448 224.001 448C287.653 448 343.903 416.898 378.837 369.199L529.689 444.625C534.252 446.906 539.127 448 544.002 448C552.283 448 560.47 444.781 566.627 438.625L630.627 374.625C637.127 368.125 640.502 359.187 639.939 350C639.377 340.844 634.908 332.375 627.658 326.75ZM224.001 320C188.655 320 160 291.344 160 256C160 220.652 188.655 192 224.001 192S288.001 220.652 288.001 256C288.001 291.344 259.346 320 224.001 320Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 64C28.654 64 0 92.652 0 128C0 156.461 18.705 180.305 44.397 188.617C44.395 188.621 44.395 188.625 44.393 188.629C50.553 172.219 58.856 156.906 69.028 142.984C67.424 143.523 65.783 144 64 144C55.178 144 48 136.824 48 128S55.178 112 64 112S80 119.176 80 128C80 128.594 79.725 129.094 79.662 129.668C91.119 116.59 104.246 105.041 118.834 95.465C107.676 76.703 87.412 64 64 64ZM224.001 192C188.655 192 160 220.652 160 256C160 291.344 188.655 320 224.001 320S288.001 291.344 288.001 256C288.001 220.652 259.346 192 224.001 192Z" })
    ]
  }
));
WhistleDuotone.displayName = "WhistleDuotone";
var Whistle_default = WhistleDuotone;
