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
var BellOn_exports = {};
__export(BellOn_exports, {
  default: () => BellOn_default
});
module.exports = __toCommonJS(BellOn_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BellOnDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 384C543.875 400.375 531 416 511.875 416H128.125C109 416 96.125 400.375 96 384C96 375.875 99 368.125 104.625 362.25C124 341.5 160.125 310.25 160.125 208C160.125 130.25 214.5 68.125 288 52.875V32C288 14.375 302.25 0 320 0C337.625 0 352 14.375 352 32V52.875C425.5 68.125 479.875 130.25 479.875 208C479.875 310.25 516 341.5 535.375 362.25C541 368.125 544 375.875 544 384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M88 168H24C10.75 168 0 178.75 0 192S10.75 216 24 216H88C101.25 216 112 205.25 112 192S101.25 168 88 168ZM131.125 55.25L75.625 23.25C68.25 18.75 59 18.625 51.375 22.875C43.875 27.25 39.25 35.25 39.25 43.875C39.375 52.625 44.125 60.625 51.625 64.75L107.125 96.75C114.5 101.25 123.75 101.375 131.375 97.125C138.875 92.75 143.5 84.75 143.5 76.125C143.375 67.375 138.625 59.375 131.125 55.25ZM588.375 64.75C599.625 58 603.25 43.5 596.75 32.25C590.25 20.875 575.75 16.875 564.375 23.25L509 55.25C499.5 60.625 495 71.75 497.75 82.25C500.625 92.75 510.125 100 521 100C525.125 100 529.25 98.875 533 96.75L588.375 64.75ZM320 512C355.375 512 384 483.375 384 448H256C256 483.375 284.625 512 320 512ZM616 168H552C538.75 168 528 178.75 528 192S538.75 216 552 216H616C629.25 216 640 205.25 640 192S629.25 168 616 168Z" })
    ]
  }
));
BellOnDuotone.displayName = "BellOnDuotone";
var BellOn_default = BellOnDuotone;
