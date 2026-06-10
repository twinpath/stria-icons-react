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
var Racquet_exports = {};
__export(Racquet_exports, {
  default: () => Racquet_default
});
module.exports = __toCommonJS(Racquet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RacquetLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M615.492 59.637C560.617 -17.853 433.244 -19.228 332.746 52.013C275.497 92.508 238.248 148.002 226.248 202.62C215.498 250.739 191.623 294.234 160.124 331.729C142.249 321.73 127.874 331.979 126.249 333.229L13.626 411.969C-0.749 422.093 -4.374 441.966 5.751 456.464L35.251 498.334C45.126 512.457 64.875 516.581 79.75 506.208L192.248 427.342C201.748 420.718 205.998 409.72 205.248 398.971C241.247 385.223 279.122 377.223 317.621 377.223C349.246 377.223 429.87 399.096 529.118 328.854C630.866 256.738 669.741 136.128 615.492 59.637ZM61.25 479.961L31.876 438.216L144.499 359.351L173.874 401.221L61.25 479.961ZM191.248 370.349L181.623 356.476C200.248 334.729 216.373 311.607 228.998 286.86C239.998 319.981 258.122 336.729 273.372 348.352C245.747 352.227 218.248 359.851 191.248 370.349ZM510.493 302.733C424.87 363.35 316.496 365.225 272.247 302.733C228.248 240.74 263.747 140.003 351.246 78.01C435.869 18.018 544.743 14.893 589.492 78.01C631.491 137.378 600.617 239.115 510.493 302.733Z" })
  }
));
RacquetLight.displayName = "RacquetLight";
var Racquet_default = RacquetLight;
