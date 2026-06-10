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
var Monument_exports = {};
__export(Monument_exports, {
  default: () => Monument_default
});
module.exports = __toCommonJS(Monument_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MonumentRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M360 464H333.999L289.125 100.75C288.375 93.375 285.125 86.5 279.875 81.25L203.25 4.75C200.375 1.625 196.25 0 192 0C187.875 0 183.75 1.5 180.75 4.75L104.125 81.25C98.875 86.5 95.625 93.375 94.875 100.75L49.999 464H24C10.745 464 0 474.745 0 488V488C0 501.255 10.745 512 24 512H360C373.255 512 384 501.255 384 488V488C384 474.745 373.255 464 360 464ZM98.375 464L141.875 111.375L192 61.25L242.125 111.375L285.625 464H98.375ZM216 272H168C154.8 272 144 282.8 144 296V296C144 309.2 154.8 320 168 320H216C229.2 320 240 309.2 240 296V296C240 282.8 229.2 272 216 272Z" })
  }
));
MonumentRegular.displayName = "MonumentRegular";
var Monument_default = MonumentRegular;
