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
var Crow_exports = {};
__export(Crow_exports, {
  default: () => Crow_default
});
module.exports = __toCommonJS(Crow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CrowRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 32H519.125C501.5 12.5 476.375 0 448 0C395 0 352 43 352 96V126.125L12.125 393.625C4.5 399.25 0 408.25 0 417.75C0 435.25 14.375 448 30.25 448C34.75 448 39.25 447 43.75 444.75L165.25 384H261.75H263.387L305.537 496.4C309.146 506.025 318.287 511.963 328.006 511.963C330.803 511.963 333.662 511.463 336.428 510.432C348.85 505.775 355.131 491.932 350.475 479.525L314.652 384H352C353.875 384 355.75 383.75 357.625 383.75L359.199 383.502L401.537 496.4C405.146 506.025 414.287 511.963 424.006 511.963C426.803 511.963 429.662 511.463 432.428 510.432C444.85 505.775 451.131 491.932 446.475 479.525L407.486 375.555C486.445 351.689 544 278.688 544 192V112L640 96C640 60.625 597 32 544 32ZM496 192C496 271.375 431.375 336 352 336H274.25L319.625 323C367.625 309.375 408 275.875 430.25 231.125C434.25 223.25 431 213.625 423.125 209.75C415.25 205.75 405.625 209 401.625 216.875C383.375 253.5 350.25 281 310.75 292.25L165.875 333.625L381.625 163.875L400 149.5V96C400 69.5 421.5 48 448 48S496 69.5 496 96V192ZM448 72C434.75 72 424 82.75 424 96S434.75 120 448 120S472 109.25 472 96S461.25 72 448 72Z" })
  }
));
CrowRegular.displayName = "CrowRegular";
var Crow_default = CrowRegular;
