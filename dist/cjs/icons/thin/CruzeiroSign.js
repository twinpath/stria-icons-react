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
var CruzeiroSign_exports = {};
__export(CruzeiroSign_exports, {
  default: () => CruzeiroSign_default
});
module.exports = __toCommonJS(CruzeiroSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CruzeiroSignThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M382.307 418.357C385.025 421.822 384.4 426.848 380.932 429.562C337.682 463.332 285.559 480 233.59 480C173.717 480 114.061 457.871 68.529 414.316C24.344 372.041 0 315.814 0 256C0 196.184 24.344 139.959 68.529 97.684C153.592 16.316 287.84 9.746 380.932 82.438C384.4 85.152 385.025 90.178 382.307 93.641C379.525 97.137 374.525 97.762 371.057 95.016C284.215 27.178 158.904 33.326 79.592 109.23C38.594 148.463 16 200.586 16 256S38.594 363.537 79.592 402.768C107.273 429.248 140.701 446.691 175.998 456.01V263.99C175.998 259.574 179.592 256 183.998 256S191.998 259.574 191.998 263.99V283.275C205.203 266.787 225.268 256 247.996 256C277.465 256 303.684 273.635 314.746 300.943C316.402 305.031 314.434 309.682 310.34 311.352C306.277 312.959 301.559 311.01 299.934 306.936C291.309 285.697 270.934 271.98 247.996 271.98C217.121 271.98 191.998 297.074 191.998 327.91V459.615C253.418 471.107 319.088 457.582 371.057 416.984C374.525 414.223 379.525 414.832 382.307 418.357Z" })
  }
));
CruzeiroSignThin.displayName = "CruzeiroSignThin";
var CruzeiroSign_default = CruzeiroSignThin;
