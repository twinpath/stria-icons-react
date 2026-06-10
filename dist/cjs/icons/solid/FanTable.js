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
var FanTable_exports = {};
__export(FanTable_exports, {
  default: () => FanTable_default
});
module.exports = __toCommonJS(FanTable_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FanTableSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 192C215.125 192 208 199.125 208 208S215.125 224 224 224S240 216.875 240 208S232.875 192 224 192ZM320 448H256V413.201C355.582 397.807 432 311.959 432 208C432 93.125 338.875 0 224 0S16 93.125 16 208C16 311.959 92.418 397.807 192 413.201V448H128C99.625 448 73 466.5 64.75 492.125C61.5 502.001 69.875 512 80.25 512H367.75C378.125 512 386.5 502.001 383.25 492.125C375 466.5 348.375 448 320 448ZM119.625 334.75C112.625 330.75 105.125 318.001 114.5 306.5L182 224.5C124.875 204.25 112.875 147.25 122.375 111.5C128.75 87.25 144.625 66.625 166.375 54.125C179.375 46.75 190.625 56.5 193.375 63.875L230.5 162.875C258.5 139 297.875 133.625 331.375 149.125C364.75 164.625 386.125 198.125 386 235C386 240.5 383.625 245.75 379.375 249.375S369.5 254.5 364.125 253.625L259.375 236.125C263.625 258.125 259.875 280.875 248.75 300.25C222.625 345.375 164.875 360.875 119.625 334.75Z" })
  }
));
FanTableSolid.displayName = "FanTableSolid";
var FanTable_default = FanTableSolid;
