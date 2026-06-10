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
var CircleCaretUp_exports = {};
__export(CircleCaretUp_exports, {
  default: () => CircleCaretUp_default
});
module.exports = __toCommonJS(CircleCaretUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleCaretUpThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480ZM277.666 169.838C272.203 163.588 264.303 160 256 160S239.797 163.588 234.328 169.846L144.734 272.238C137.307 280.666 135.506 292.799 140.178 303.105C144.83 313.369 155.123 320 166.4 320H345.6C356.877 320 367.17 313.369 371.822 303.105C376.494 292.799 374.693 280.666 367.229 272.197L277.666 169.838ZM357.25 296.5C355.176 301.074 350.625 304 345.6 304H166.4C161.375 304 156.824 301.074 154.75 296.5C152.676 291.924 153.449 286.549 156.775 282.775L246.375 180.375C248.801 177.6 252.301 176 256 176S263.199 177.6 265.625 180.375L355.225 282.775C358.551 286.549 359.324 291.924 357.25 296.5Z" })
  }
));
CircleCaretUpThin.displayName = "CircleCaretUpThin";
var CircleCaretUp_default = CircleCaretUpThin;
