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
const ShieldSlashSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M319.952 512C357.216 512 422.841 453.766 437.298 439.43L81.161 160.297C96.423 398.096 272.987 512 319.952 512ZM639.999 487.988C639.999 480.871 636.847 473.828 630.81 469.102L496.489 363.828C533.364 303.531 559.999 225.508 559.999 127.984C559.999 108.574 548.312 91.07 530.499 83.68L338.499 3.672C333.624 1.641 325.343 0 320.062 0C314.749 0 306.499 1.641 301.593 3.672L128.831 75.664L38.814 5.109C34.407 1.672 29.189 0 24.032 0C10.196 0 0 11.292 0 24.004C0 31.122 3.152 38.164 9.189 42.891L601.185 506.883C605.601 510.333 610.823 512 615.998 512C629.845 512 639.999 500.648 639.999 487.988Z " })
  }
));
ShieldSlashSolid.displayName = "ShieldSlashSolid";
var ShieldSlash_default = ShieldSlashSolid;
