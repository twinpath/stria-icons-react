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
var DiceD12_exports = {};
__export(DiceD12_exports, {
  default: () => DiceD12_default
});
module.exports = __toCommonJS(DiceD12_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiceD12Regular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M508.625 185.25L452.75 73.5C449.625 67.375 444.625 62.375 438.5 59.25L326.75 3.375C322.375 1.125 317.375 0 312.5 0H199.5C194.625 0 189.625 1.125 185.25 3.375L73.5 59.25C67.375 62.375 62.375 67.375 59.25 73.5L3.375 185.25C1.125 189.625 0 194.625 0 199.5V312.5C0 317.375 1.125 322.25 3.375 326.75L59.25 438.5C62.375 444.625 67.375 449.625 73.5 452.75L185.25 508.625C189.625 510.875 194.625 512 199.5 512H312.5C317.375 512 322.25 510.875 326.75 508.625L438.5 452.75C444.625 449.625 449.625 444.625 452.75 438.5L508.625 326.75C510.875 322.25 512 317.375 512 312.5V199.5C512 194.625 510.875 189.75 508.625 185.25ZM455 185.375L376.875 289.625L280 241.125V147.625L420.75 119.5L419.75 114.875L455 185.375ZM300.5 464H211.5L158.5 331.625L256 282.875L353.5 331.625L300.5 464ZM203.375 48H308.625L373 80.125L256 103.5L139 80.125L203.375 48ZM92.25 114.875L91.25 119.5L232 147.625V241.125L135.125 289.625L57 185.375L92.25 114.875ZM48 308.625V253.375L106.875 331.875L148.875 436.75L99.75 412.25L48 308.625ZM412.25 412.25L363.125 436.75L405.125 331.875L464 253.375V308.625L412.25 412.25Z " })
  }
));
DiceD12Regular.displayName = "DiceD12Regular";
var DiceD12_default = DiceD12Regular;
