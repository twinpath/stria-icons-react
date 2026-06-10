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
const SquareCDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM167.197 312.285C182.125 327.42 201.959 335.771 223.061 335.771S263.996 327.451 278.939 312.285C288.27 302.867 303.494 302.74 312.889 312.16C322.314 321.518 322.377 336.777 313.045 346.26C289.021 370.594 257.057 384 223.061 384C223.061 384 223.061 384 223.045 384C189.049 384 157.1 370.594 133.092 346.26C83.637 296.178 83.637 214.637 133.092 164.523C181.092 115.826 264.98 115.826 313.045 164.523C322.377 173.975 322.314 189.234 312.889 198.623C303.494 207.98 288.301 207.949 278.939 198.467C249.053 168.197 197.051 168.229 167.197 198.467C136.217 229.865 136.217 280.918 167.197 312.285Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M278.939 198.467C288.3 207.949 303.494 207.98 312.888 198.623C322.314 189.234 322.376 173.975 313.044 164.523C289.244 140.41 256.66 128.237 223.999 128.004C190.701 127.766 157.323 139.94 133.091 164.523C108.214 189.731 95.851 222.892 96.001 256C96.15 288.71 108.513 321.37 133.091 346.26C157.099 370.594 189.048 384 223.044 384C223.06 384 223.06 384 223.06 384C257.056 384 289.021 370.594 313.044 346.26C322.376 336.777 322.314 321.518 312.888 312.16C303.494 302.74 288.269 302.867 278.939 312.285C263.996 327.451 244.162 335.771 223.06 335.771S182.125 327.42 167.197 312.285C136.216 280.918 136.216 229.865 167.197 198.467C197.05 168.229 249.052 168.197 278.939 198.467Z" })
    ]
  }
));
SquareCDuotone.displayName = "SquareCDuotone";
var SquareC_default = SquareCDuotone;
