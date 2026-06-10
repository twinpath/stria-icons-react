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
var Narwhal_exports = {};
__export(Narwhal_exports, {
  default: () => Narwhal_default
});
module.exports = __toCommonJS(Narwhal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const NarwhalLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M562.443 190.074L638.562 22.604C642.219 14.541 638.656 5.07 630.625 1.414C622.625 -2.18 613.125 1.289 609.437 9.354L534.293 174.676C512.752 165.273 489.006 159.984 464 159.984C391.723 159.984 321.826 185.82 266.926 232.832L170.867 315.084C163.9 321.047 155.795 323.729 147.865 323.729C129.455 323.729 112 309.283 112 287.99V255.988L177.75 219.604C186.623 213.729 192 203.73 192 192.98V111.975C192 102.584 184.291 95.98 175.99 95.98C173.021 95.98 169.979 96.824 167.184 98.687L96.018 146.092H95.984L24.877 98.725C22.076 96.855 19.023 96.01 16.049 96.01C7.727 96.01 0 102.629 0 112.045V192.979C0.002 203.73 5.375 213.729 14.252 219.604L80 255.988V351.992C80 440.361 151.635 512 240 512H464C561.201 512 640 433.197 640 335.992C640 275.254 609.236 221.705 562.443 190.074ZM96 228.273C95.832 228.176 95.664 228.08 95.494 227.986L32 192.852V141.918L78.244 172.725C83.498 176.225 89.705 178.092 96.018 178.092S108.502 176.225 113.758 172.725L160.031 141.9L160.084 192.807L96.506 227.986C96.336 228.08 96.168 228.176 96 228.273ZM464 479.998H240C169.42 479.998 112 422.576 112 351.992V345.477C122.412 351.973 134.707 355.729 147.865 355.729C163.816 355.729 179.377 349.928 191.68 339.393L287.738 257.139C336.805 215.123 399.402 191.986 464 191.986C543.402 191.986 608 256.586 608 335.992S543.402 479.998 464 479.998ZM504 271.988C490.746 271.988 480 282.734 480 295.99C480 309.244 490.746 319.99 504 319.99S528 309.244 528 295.99C528 282.734 517.254 271.988 504 271.988Z" })
  }
));
NarwhalLight.displayName = "NarwhalLight";
var Narwhal_default = NarwhalLight;
