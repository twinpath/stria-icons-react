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
var HeadSideHeadphones_exports = {};
__export(HeadSideHeadphones_exports, {
  default: () => HeadSideHeadphones_default
});
module.exports = __toCommonJS(HeadSideHeadphones_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeadSideHeadphonesSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M509.256 275C488.256 227.875 460.756 123.25 436.131 88.25C397.13 32.875 333.754 0 266.128 0H256.003V107.25C293.754 125.25 320.004 163.375 320.004 208C320.004 269.875 269.878 320 208.003 320S96.001 269.875 96.001 208C96.001 163.375 122.252 125.25 160.002 107.25V2.875C69.251 18.125 0 96.875 0 192C0 246.5 23.25 298.5 64.001 334.75V512H320.004V448H384.005C419.38 448 448.006 419.375 448.006 384V320H480.006C490.881 320 500.881 314.5 506.756 305.375C512.757 296.375 513.632 284.875 509.256 275ZM128.002 208C128.002 252.125 163.877 288 208.003 288S288.004 252.125 288.004 208S252.128 128 208.003 128S128.002 163.875 128.002 208ZM208.003 176C225.628 176 240.003 190.375 240.003 208S225.628 240 208.003 240S176.002 225.625 176.002 208S190.377 176 208.003 176Z" })
  }
));
HeadSideHeadphonesSolid.displayName = "HeadSideHeadphonesSolid";
var HeadSideHeadphones_default = HeadSideHeadphonesSolid;
