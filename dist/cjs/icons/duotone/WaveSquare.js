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
var WaveSquare_exports = {};
__export(WaveSquare_exports, {
  default: () => WaveSquare_default
});
module.exports = __toCommonJS(WaveSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WaveSquareDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M476 480.001H324C304.118 480.001 288 463.883 288 444.001V96.001H192V252.001C192 271.883 175.882 288.001 156 288.001H32C14.327 288.001 0 273.674 0 256.001V256.001C0 238.327 14.327 224.001 32 224.001H128V68.001C128 48.118 144.118 32.001 164 32.001H316C335.882 32.001 352 48.118 352 68.001V416.001H448V260.001C448 240.118 464.118 224.001 484 224.001H608C625.673 224.001 640 238.327 640 256.001V256.001C640 273.674 625.673 288.001 608 288.001H512V444.001C512 463.883 495.882 480.001 476 480.001Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
WaveSquareDuotone.displayName = "WaveSquareDuotone";
var WaveSquare_default = WaveSquareDuotone;
