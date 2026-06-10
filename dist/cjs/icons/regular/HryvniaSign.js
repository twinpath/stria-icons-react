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
var HryvniaSign_exports = {};
__export(HryvniaSign_exports, {
  default: () => HryvniaSign_default
});
module.exports = __toCommonJS(HryvniaSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HryvniaSignRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 304C384 317.25 373.25 328 360 328H118.135C104.342 339.225 96 355.008 96 372.328C96 405.234 125.078 432 160.828 432H204.391C231.516 432 258.016 421.703 277.078 403.75C286.734 394.672 301.906 395.094 311 404.766C320.094 414.406 319.641 429.609 309.984 438.688C281.703 465.328 244.203 480 204.391 480H160.828C98.609 480 48 431.703 48 372.328C48 356.834 51.744 341.787 58.305 328H24C10.75 328 0 317.25 0 304S10.75 280 24 280H102.746L185.549 232H24C10.75 232 0 221.25 0 208S10.75 184 24 184H265.865C279.658 172.775 288 156.992 288 139.672C288 106.766 258.922 80 223.172 80H179.609C152.484 80 125.984 90.297 106.922 108.25C97.281 117.359 82.109 116.906 73 107.234C63.906 97.594 64.359 82.391 74.016 73.312C102.297 46.672 139.797 32 179.609 32H223.172C285.391 32 336 80.297 336 139.672C336 155.166 332.256 170.213 325.695 184H360C373.25 184 384 194.75 384 208S373.25 232 360 232H281.254L198.451 280H360C373.25 280 384 290.75 384 304Z" })
  }
));
HryvniaSignRegular.displayName = "HryvniaSignRegular";
var HryvniaSign_default = HryvniaSignRegular;
