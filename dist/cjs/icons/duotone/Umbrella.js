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
var Umbrella_exports = {};
__export(Umbrella_exports, {
  default: () => Umbrella_default
});
module.exports = __toCommonJS(Umbrella_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UmbrellaDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.264 264.02V431.984C320.264 476.086 284.356 512 240.26 512C206.446 512 176.069 490.59 164.848 458.678C158.942 442.08 167.66 423.764 184.35 417.889C201.069 411.98 219.258 420.67 225.164 437.393C227.071 442.768 232.446 448.082 240.26 448.082C249.072 448.082 256.26 440.893 256.26 432.078V263.279C265.69 258.777 276.209 256.047 288.262 256.047C300.235 256.047 310.692 259.398 320.264 264.02Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M575.701 280.864C547.107 144.526 437.318 62.606 320 49.915V32.006C320 14.315 305.688 0.001 287.998 0.001S255.996 14.315 255.996 32.006V49.915C138.303 62.606 29.482 144.526 0.295 280.864C-1.926 290.96 8.795 302.149 18.982 292.241C70.986 237.231 126.676 239.856 177.586 329.249C182.898 338.751 192.492 337.874 197.305 329.249C217.494 293.866 242.184 256.047 287.998 256.047C346.502 256.047 376.191 324.872 378.691 329.249C383.504 337.874 393.098 338.751 398.41 329.249C449.414 239.731 505.51 237.856 557.014 292.241C567.326 302.243 577.922 290.96 575.701 280.864Z" })
    ]
  }
));
UmbrellaDuotone.displayName = "UmbrellaDuotone";
var Umbrella_default = UmbrellaDuotone;
