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
var SquareC_exports = {};
__export(SquareC_exports, {
  default: () => SquareC_default
});
module.exports = __toCommonJS(SquareC_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareCSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM167.197 312.285C182.125 327.42 201.959 335.771 223.061 335.771S263.996 327.451 278.939 312.285C288.27 302.867 303.494 302.74 312.889 312.16C322.314 321.518 322.377 336.777 313.045 346.26C289.021 370.594 257.057 384 223.061 384C223.061 384 223.061 384 223.045 384C189.049 384 157.1 370.594 133.092 346.26C83.637 296.178 83.637 214.637 133.092 164.523C181.092 115.826 264.98 115.826 313.045 164.523C322.377 173.975 322.314 189.234 312.889 198.623C303.494 207.98 288.301 207.949 278.939 198.467C249.053 168.197 197.051 168.229 167.197 198.467C136.217 229.865 136.217 280.918 167.197 312.285Z" })
  }
));
SquareCSolid.displayName = "SquareCSolid";
var SquareC_default = SquareCSolid;
