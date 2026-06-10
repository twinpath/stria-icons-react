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
var ArrowDownLeftAndArrowUpRightToCenter_exports = {};
__export(ArrowDownLeftAndArrowUpRightToCenter_exports, {
  default: () => ArrowDownLeftAndArrowUpRightToCenter_default
});
module.exports = __toCommonJS(ArrowDownLeftAndArrowUpRightToCenter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownLeftAndArrowUpRightToCenterDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M54.625 502.625L176 381.25V432C176 449.688 190.313 464 208 464S240 449.688 240 432V304C240 299.836 239.152 295.688 237.535 291.777C234.295 283.945 228.057 277.703 220.223 274.465C216.313 272.848 212.164 272 208 272H80C62.313 272 48 286.312 48 304S62.313 336 80 336H130.75L9.375 457.375C-3.125 469.875 -3.125 490.125 9.375 502.625S42.125 515.125 54.625 502.625Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M274.463 220.219C277.705 228.059 283.941 234.297 291.783 237.539C295.689 239.152 299.838 240 304 240H432C449.688 240 464 225.688 464 208S449.688 176 432 176H381.25L502.625 54.625C515.125 42.125 515.125 21.875 502.625 9.375C490.132 -3.118 469.882 -3.132 457.375 9.375L336 130.75V80C336 62.313 321.688 48 304 48S272 62.313 272 80V208C272 212.164 272.848 216.313 274.463 220.219Z" })
    ]
  }
));
ArrowDownLeftAndArrowUpRightToCenterDuotone.displayName = "ArrowDownLeftAndArrowUpRightToCenterDuotone";
var ArrowDownLeftAndArrowUpRightToCenter_default = ArrowDownLeftAndArrowUpRightToCenterDuotone;
