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
var RupeeSign_exports = {};
__export(RupeeSign_exports, {
  default: () => RupeeSign_default
});
module.exports = __toCommonJS(RupeeSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RupeeSignThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M120 32H40C17.938 32 0 49.938 0 72V472C0 476.406 3.594 480 8 480S16 476.406 16 472V304H120C123.365 304 126.523 303.248 129.828 303.006L184.375 474.438C185.469 477.844 188.594 480 192 480C192.812 480 193.625 479.875 194.438 479.625C198.625 478.281 200.969 473.781 199.625 469.562L146.105 301.361C208.639 289.141 256 234.061 256 168C256 93 195 32 120 32ZM120 288H16V72C16 58.781 26.781 48 40 48H120C186.156 48 240 101.844 240 168S186.156 288 120 288ZM362.405 328.312L351.906 324.875C312.159 311.656 282.287 298.093 288.942 254.531C291.13 240.093 297.942 228.687 309.128 220.656C325.595 208.812 350.5 205.124 378.997 210.187C389.215 211.999 401.308 215.718 417.087 221.874C421.087 223.499 425.837 221.468 427.43 217.343C429.055 213.249 427.024 208.593 422.899 206.999C406.151 200.405 393.09 196.437 381.809 194.437C348.906 188.624 319.815 193.28 299.816 207.656C285.193 218.156 275.944 233.531 273.131 252.124C263.913 312.468 313.815 329.062 346.844 340.062L357.468 343.531C400.87 357.593 438.336 369.75 431.055 417.469C428.868 431.906 422.056 443.312 410.869 451.344C394.339 463.156 369.498 466.812 340.938 461.812C325.158 459.125 307.097 451.719 291.161 445.219L282.974 441.875C278.943 440.312 274.256 442.219 272.569 446.344C270.944 450.437 272.913 455.094 277.037 456.75L285.13 460.031C301.816 466.844 320.752 474.594 338.188 477.563C347.406 479.188 356.311 480 364.811 480C386.653 480 405.776 474.688 420.181 464.344C434.805 453.844 444.054 438.469 446.866 419.875C456.178 358.718 406.37 342.562 362.405 328.312Z" })
  }
));
RupeeSignThin.displayName = "RupeeSignThin";
var RupeeSign_default = RupeeSignThin;
