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
var ShieldSlash_exports = {};
__export(ShieldSlash_exports, {
  default: () => ShieldSlash_default
});
module.exports = __toCommonJS(ShieldSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShieldSlashThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640.001 504.004C640.001 501.647 638.966 499.314 636.982 497.734L12.988 1.73C11.525 0.566 9.771 0 8.025 0C3.803 0 0 3.355 0 7.992C0 10.349 1.035 12.682 3.019 14.262L627.013 510.266C628.497 511.438 630.247 512 631.997 512C636.248 512 640.001 508.582 640.001 504.004ZM307.714 18.453C310.706 17.215 316.822 16 320.062 16C323.245 16 329.443 17.234 332.345 18.441L524.367 98.461C536.294 103.406 543.999 114.996 543.999 127.984C543.999 194.098 530.812 256.367 505.949 311.848L518.923 322.164C543.622 268.719 559.999 204.32 559.999 127.984C559.999 108.574 548.312 91.07 530.499 83.68L338.499 3.672C333.624 1.641 325.343 0 320.062 0C314.749 0 306.499 1.641 301.593 3.672L181.333 53.785L195.64 65.156L307.714 18.453ZM319.952 496C279.838 496 118.089 390.114 98.195 171.641L81.079 158.039C95.344 397.12 272.691 512 319.952 512C356.913 512 422.122 454.375 436.3 440.418L423.73 430.422C380.975 472.113 335.122 496 319.952 496Z " })
  }
));
ShieldSlashThin.displayName = "ShieldSlashThin";
var ShieldSlash_default = ShieldSlashThin;
