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
var TextWidth_exports = {};
__export(TextWidth_exports, {
  default: () => TextWidth_default
});
module.exports = __toCommonJS(TextWidth_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TextWidthDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 72V120C448 142.094 430.094 160 408 160S368 142.094 368 120V112H263.357C263.449 113.107 264 114.057 264 115.188V224H272C289.672 224 304 238.312 304 256S289.672 288 272 288H176C158.328 288 144 273.688 144 256S158.328 224 176 224H184V115.188C184 114.057 184.551 113.107 184.643 112H80V120C80 142.094 62.094 160 40 160S0 142.094 0 120V72C0 49.906 17.906 32 40 32H408C430.094 32 448 49.906 448 72Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M363.188 292.747C353.937 283.373 335.938 288.373 335.938 303.997V351.997H111.938V303.997C111.938 289.748 94.688 282.623 84.688 292.747L4.688 372.747C-1.563 378.997 -1.563 388.997 4.688 395.247L84.688 475.246C93.937 484.621 111.938 479.621 111.938 463.996V415.997H335.938V463.996C335.938 478.246 353.188 485.371 363.188 475.246L443.188 395.247C449.438 388.997 449.438 378.997 443.188 372.747L363.188 292.747Z" })
    ]
  }
));
TextWidthDuotone.displayName = "TextWidthDuotone";
var TextWidth_default = TextWidthDuotone;
