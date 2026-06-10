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
var ThumbsUp_exports = {};
__export(ThumbsUp_exports, {
  default: () => ThumbsUp_default
});
module.exports = __toCommonJS(ThumbsUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ThumbsUpDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 224.112C512 197.608 490.516 176.133 464 176.133H317.482C340.25 138.226 352.005 95.257 352.005 80.11C352.005 56.523 333.495 32 302.54 32C239.411 32 276.176 108.148 194.312 173.618L178.016 186.644C166.23 196.06 160.285 209.903 160.215 223.897C160.191 223.921 160 224.112 160 224.112V384.042C160 399.146 167.113 413.368 179.198 422.427L213.336 448.02C241.027 468.779 274.702 480 309.309 480H368C394.516 480 416 458.525 416 432.021C416 428.386 415.52 424.878 414.754 421.475C434 415.228 448 397.37 448 376.045C448 366.897 445.303 358.438 440.861 351.164C463.131 347.002 480 327.547 480 304.077C480 291.577 475.107 280.298 467.275 271.761C492.234 270.051 512 249.495 512 224.112Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 448V224C128 206.328 113.674 192 96 192H32C14.326 192 0 206.328 0 224V448C0 465.674 14.326 480 32 480H96C113.674 480 128 465.674 128 448Z" })
    ]
  }
));
ThumbsUpDuotone.displayName = "ThumbsUpDuotone";
var ThumbsUp_default = ThumbsUpDuotone;
