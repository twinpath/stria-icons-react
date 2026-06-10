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
var WineBottle_exports = {};
__export(WineBottle_exports, {
  default: () => WineBottle_default
});
module.exports = __toCommonJS(WineBottle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WineBottleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504.969 87.031L424.969 7.031C415.594 -2.344 400.406 -2.344 391.031 7.031C384.613 13.449 382.928 22.531 385.299 30.668L308.156 107.797C259.078 93.375 205.906 106.594 169.047 143.438L24.188 288.312C8.594 303.891 0 324.625 0 346.672C0 368.703 8.594 389.438 24.188 405.031L106.969 487.813C122.547 503.406 143.281 512 165.328 512C187.359 512 208.094 503.406 223.688 487.812L368.563 342.937C405.406 306.094 418.594 252.969 404.188 203.828L481.307 126.697C483.51 127.342 485.725 128 488 128C494.141 128 500.281 125.656 504.969 120.969C514.344 111.594 514.344 96.406 504.969 87.031ZM140.906 453.875L58.125 371.094C51.594 364.562 48 355.891 48 346.672S51.594 328.781 58.125 322.25L78.186 302.186L209.812 433.812L189.75 453.875C176.688 466.938 153.969 466.938 140.906 453.875ZM348.109 192.031L354.422 206.922C369.281 242.031 361.516 282.109 334.625 309L321.813 321.812L190.18 190.18L202.984 177.375C229.906 150.484 270.016 142.766 305.062 157.562L319.953 163.875L416.951 66.889L445.096 95.033L348.109 192.031Z" })
  }
));
WineBottleRegular.displayName = "WineBottleRegular";
var WineBottle_default = WineBottleRegular;
