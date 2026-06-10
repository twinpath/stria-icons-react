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
var GiftCard_exports = {};
__export(GiftCard_exports, {
  default: () => GiftCard_default
});
module.exports = __toCommonJS(GiftCard_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GiftCardSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528 128H469.854C481.818 105.082 484.871 77.453 469.824 46.602C455.385 16.992 424.562 -0.016 391.484 0C349.703 0.016 322.666 21.316 288 68.297C253.334 21.316 226.297 0.016 184.516 0C151.438 -0.016 120.615 16.992 106.176 46.602C91.129 77.453 94.182 105.082 106.146 128H48C21.5 128 0 149.5 0 176V464C0 490.5 21.5 512 48 512H528C554.5 512 576 490.5 576 464V176C576 149.5 554.5 128 528 128ZM390.094 48C412.188 48 430.094 65.906 430.094 88S412.188 128 390.094 128H304C355.5 51.297 370.188 48 390.094 48ZM185.906 48C205.812 48 220.5 51.297 272 128H185.906C163.812 128 145.906 110.094 145.906 88S163.812 48 185.906 48ZM512 448H64V384H512V448ZM512 320H64V192H206.062L183.031 215.031C173.656 224.406 173.656 239.594 183.031 248.969C187.719 253.656 193.844 256 200 256S212.281 253.656 216.969 248.969L273.938 192H302.062L359.031 248.969C363.719 253.656 369.844 256 376 256S388.281 253.656 392.969 248.969C402.344 239.594 402.344 224.406 392.969 215.031L369.938 192H512V320Z" })
  }
));
GiftCardSolid.displayName = "GiftCardSolid";
var GiftCard_default = GiftCardSolid;
