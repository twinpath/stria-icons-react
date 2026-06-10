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
var Books_exports = {};
__export(Books_exports, {
  default: () => Books_default
});
module.exports = __toCommonJS(Books_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BooksSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160.002 384.001H288V128.002H160.002V384.001ZM96.002 0.003H32C14.375 0.003 0 14.378 0 32.003V96.003H128.002V32.003C128.002 14.378 113.627 0.003 96.002 0.003ZM160.002 480C160.002 497.625 174.377 512 192.004 512H256.004C273.623 512 287.988 497.641 288 480.02V416.001H160.002V480ZM0 480C0 497.625 14.375 512 32 512H96.002C113.627 512 128.002 497.625 128.002 480V416.001H0V480ZM0 384.001H128.002V128.002H0V384.001ZM419.869 116.155L296.318 149.198L362.531 395.848L486.08 362.806L419.869 116.155ZM510.914 455.317L494.357 393.634L370.807 426.68L387.359 488.344C391.918 505.32 409.512 515.461 426.525 510.91L488.301 494.391C505.309 489.84 515.461 472.297 510.914 455.317ZM395.035 23.644C390.467 6.667 372.887 -3.458 355.879 1.089L294.104 17.612C291.031 18.433 288.484 20.097 285.906 21.683C281.559 9.159 269.975 0.003 256.004 0.003H192.004C174.377 0.003 160.002 14.378 160.002 32.003V96.003H282.039L288.043 118.37L411.592 85.323L395.035 23.644Z" })
  }
));
BooksSolid.displayName = "BooksSolid";
var Books_default = BooksSolid;
