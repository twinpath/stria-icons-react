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
var UmbrellaBeach_exports = {};
__export(UmbrellaBeach_exports, {
  default: () => UmbrellaBeach_default
});
module.exports = __toCommonJS(UmbrellaBeach_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UmbrellaBeachLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M560.006 480H294.7L359.066 293.375C362.035 285.063 357.691 275.906 349.379 272.938C341.097 270 331.941 274.281 328.941 282.625L260.735 480H16C7.156 480 0 487.156 0 496S7.156 512 16 512H560.006C568.85 512 576.006 504.844 576.006 496S568.85 480 560.006 480ZM445.03 17.73C442.538 16.895 440.137 15.904 437.51 15.291C423.618 10.848 409.387 6.992 394.512 4.461C376.899 1.461 359.357 0 342.092 0C238.001 0 143.443 53.025 96.911 141.25C94.677 145.541 96.702 150.871 101.388 152.529L623.889 333.936C624.899 334.258 625.837 334.398 626.7 334.398C631.522 334.398 634.05 329.988 634.456 328.062C662.837 197.342 579.621 64.586 445.03 17.73ZM139.998 132.061C183.957 69.723 258.952 32 342.092 32C348.4 32 354.754 32.375 361.103 32.812C320.613 58.336 280.603 107.096 250.268 170.346L139.998 132.061ZM470.724 246.25L281.003 179.438C319.878 100.875 376.566 45.094 418.786 44.656C422.251 44.812 425.428 45.4 428.569 46.051C432.362 47.283 436.208 48.389 439.928 49.777C447.397 53.295 453.856 58.508 459.224 65.812C488.13 105.219 482.474 190.875 470.724 246.25ZM500.9 257.361C511.195 211.529 519.228 137.488 501.773 82.529C527.601 100.682 550.223 122.951 567.809 148.977C597.875 193.473 611.493 244.146 607.235 294.279L500.9 257.361Z" })
  }
));
UmbrellaBeachLight.displayName = "UmbrellaBeachLight";
var UmbrellaBeach_default = UmbrellaBeachLight;
