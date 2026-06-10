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
var SunDust_exports = {};
__export(SunDust_exports, {
  default: () => SunDust_default
});
module.exports = __toCommonJS(SunDust_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SunDustDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 256.002C160 282.512 170.744 306.512 188.117 323.883L323.881 188.119C306.51 170.746 282.51 160.002 256 160.002C202.98 160.002 160 202.982 160 256.002ZM370.728 12.564C368.754 1.633 356.135 -3.592 347.008 2.74L256 65.891L164.99 2.738C155.865 -3.594 143.246 1.631 141.269 12.562L121.57 121.572L12.562 141.27C1.633 143.246 -3.596 155.865 2.736 164.988L65.89 256.002L2.738 347.012C-3.594 356.137 1.633 368.754 12.562 370.729L121.57 390.428V390.43L165.49 346.51C142.328 323.348 128 291.348 128 256.002C128 185.309 185.306 128.002 256 128.002C291.346 128.002 323.346 142.33 346.508 165.492L390.429 121.57L370.728 12.564Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M319.969 448C302.219 448 287.969 462.25 287.969 480S302.219 512 319.969 512S351.969 497.75 351.969 480S337.719 448 319.969 448ZM239.969 368C222.219 368 207.969 382.25 207.969 400S222.219 432 239.969 432S271.969 417.75 271.969 400S257.719 368 239.969 368ZM160 448C142.25 448 128 462.25 128 480S142.25 512 160 512S192 497.75 192 480S177.75 448 160 448ZM479.969 192C497.719 192 511.969 177.75 511.969 160S497.719 128 479.969 128S447.969 142.25 447.969 160S462.219 192 479.969 192ZM319.969 288C302.219 288 287.969 302.25 287.969 320S302.219 352 319.969 352S351.969 337.75 351.969 320S337.719 288 319.969 288ZM479.969 288C462.219 288 447.969 302.25 447.969 320S462.219 352 479.969 352S511.969 337.75 511.969 320S497.719 288 479.969 288ZM479.969 448C462.219 448 447.969 462.25 447.969 480S462.219 512 479.969 512S511.969 497.75 511.969 480S497.719 448 479.969 448ZM399.969 368C382.219 368 367.969 382.25 367.969 400S382.219 432 399.969 432S431.969 417.75 431.969 400S417.719 368 399.969 368ZM399.969 208C382.219 208 367.969 222.25 367.969 240S382.219 272 399.969 272S431.969 257.75 431.969 240S417.719 208 399.969 208Z" })
    ]
  }
));
SunDustDuotone.displayName = "SunDustDuotone";
var SunDust_default = SunDustDuotone;
