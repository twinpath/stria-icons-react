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
var CirclePhone_exports = {};
__export(CirclePhone_exports, {
  default: () => CirclePhone_default
});
module.exports = __toCommonJS(CirclePhone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CirclePhoneDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM383.604 321.502L371.979 371.893C370.346 379.018 364.078 384.002 356.742 384.002C230.617 384.002 127.998 281.393 127.998 155.25C127.998 147.922 132.982 141.656 140.107 140.031L190.484 128.406C197.828 126.703 205.367 130.516 208.414 137.469L231.68 191.75C234.398 198.141 232.562 205.578 227.187 209.969L200.273 232.018C217.266 266.627 245.414 294.768 280.039 311.768L302.062 284.861C306.406 279.471 313.914 277.611 320.305 280.377L374.549 303.627C381.502 306.627 385.291 314.205 383.604 321.502Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M383.605 321.502L371.98 371.893C370.348 379.018 364.08 384.002 356.744 384.002C230.619 384.002 128 281.393 128 155.25C128 147.922 132.984 141.656 140.109 140.031L190.486 128.406C197.83 126.703 205.369 130.516 208.416 137.469L231.682 191.75C234.4 198.141 232.564 205.578 227.189 209.969L200.275 232.018C217.268 266.627 245.416 294.768 280.041 311.768L302.064 284.861C306.408 279.471 313.916 277.611 320.307 280.377L374.551 303.627C381.504 306.627 385.293 314.205 383.605 321.502Z" })
    ]
  }
));
CirclePhoneDuotone.displayName = "CirclePhoneDuotone";
var CirclePhone_default = CirclePhoneDuotone;
