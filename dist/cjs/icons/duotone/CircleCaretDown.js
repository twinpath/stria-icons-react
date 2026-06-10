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
var CircleCaretDown_exports = {};
__export(CircleCaretDown_exports, {
  default: () => CircleCaretDown_default
});
module.exports = __toCommonJS(CircleCaretDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleCaretDownDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM377.594 248.344L273.594 360.344C269.047 365.219 262.672 368 256 368S242.953 365.219 238.406 360.344L134.406 248.344C127.922 241.344 126.188 231.156 130 222.406C133.812 213.656 142.453 208 152 208H360C369.547 208 378.188 213.656 382 222.406C385.812 231.156 384.078 241.344 377.594 248.344Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M377.593 248.344L273.593 360.344C269.046 365.219 262.671 368 255.999 368S242.952 365.219 238.405 360.344L134.405 248.344C127.921 241.344 126.186 231.156 129.999 222.406C133.811 213.656 142.452 208 151.999 208H359.999C369.546 208 378.186 213.656 381.999 222.406C385.811 231.156 384.077 241.344 377.593 248.344Z" })
    ]
  }
));
CircleCaretDownDuotone.displayName = "CircleCaretDownDuotone";
var CircleCaretDown_default = CircleCaretDownDuotone;
