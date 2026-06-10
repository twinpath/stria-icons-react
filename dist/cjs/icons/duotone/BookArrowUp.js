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
var BookArrowUp_exports = {};
__export(BookArrowUp_exports, {
  default: () => BookArrowUp_default
});
module.exports = __toCommonJS(BookArrowUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookArrowUpDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 416C64 433.672 78.328 448 96 448H216V384H96C78.328 384 64 398.326 64 416ZM264 384V448H416V384H264Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M424 448H264V512H424C437.254 512 448 501.254 448 488V472C448 458.742 437.254 448 424 448ZM416 0H96C42.98 0 0 42.98 0 96V416C0 469.02 42.98 512 96 512H216V448H96C78.328 448 64 433.672 64 416S78.328 384 96 384H216V209.938L176.969 248.969C167.594 258.344 152.406 258.344 143.031 248.969S133.656 224.406 143.031 215.031L223.031 135.031C232.406 125.656 247.594 125.656 256.969 135.031L336.969 215.031C346.344 224.406 346.344 239.594 336.969 248.969C332.281 253.656 326.156 256 320 256S307.719 253.656 303.031 248.969L264 209.938V384H424C437.254 384 448 373.254 448 360V32C448 14.328 433.672 0 416 0Z" })
    ]
  }
));
BookArrowUpDuotone.displayName = "BookArrowUpDuotone";
var BookArrowUp_default = BookArrowUpDuotone;
