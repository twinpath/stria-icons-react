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
var AirFreshener_exports = {};
__export(AirFreshener_exports, {
  default: () => AirFreshener_default
});
module.exports = __toCommonJS(AirFreshener_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AirFreshenerDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M304 384H80C53.49 384 32 405.49 32 432V464C32 490.51 53.49 512 80 512H304C330.51 512 352 490.51 352 464V432C352 405.49 330.51 384 304 384ZM304 464H80V432H304V464Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M377.174 306.141L305.887 224H342.172C364.196 224 376.077 198.48 361.743 181.963L211.539 8.891C201.252 -2.965 182.684 -2.963 172.397 8.895L22.254 181.967C7.924 198.484 19.805 224 41.827 224H78.084L6.823 306.145C-8.81 324.164 4.151 352 28.174 352H160.006V384H224.006V352H355.825C379.85 352 392.811 324.16 377.174 306.141ZM192.006 104C178.752 104 168.006 93.254 168.006 80S178.752 56 192.006 56S216.006 66.746 216.006 80S205.26 104 192.006 104Z" })
    ]
  }
));
AirFreshenerDuotone.displayName = "AirFreshenerDuotone";
var AirFreshener_default = AirFreshenerDuotone;
