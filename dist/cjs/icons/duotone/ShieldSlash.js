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
const ShieldSlashDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M319.791 512C357.054 512 422.68 453.766 437.137 439.43L81 160.297C96.262 398.096 272.825 512 319.791 512ZM530.338 83.68L338.338 3.672C333.463 1.641 325.182 0 319.9 0C314.588 0 306.338 1.641 301.432 3.672L128.67 75.664L496.328 363.828C533.203 303.531 559.838 225.508 559.838 127.984C559.838 108.574 548.15 91.07 530.338 83.68Z ", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M639.999 487.988C639.999 500.646 629.838 512 615.998 512C610.823 512 605.601 510.333 601.185 506.883L9.189 42.891C3.152 38.164 0 31.122 0 24.004C0 11.21 10.283 0 24.032 0C29.189 0 34.407 1.672 38.814 5.109L630.81 469.102C636.847 473.828 639.999 480.871 639.999 487.988Z " })
    ]
  }
));
ShieldSlashDuotone.displayName = "ShieldSlashDuotone";
var ShieldSlash_default = ShieldSlashDuotone;
