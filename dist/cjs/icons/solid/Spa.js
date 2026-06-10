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
var Spa_exports = {};
__export(Spa_exports, {
  default: () => Spa_default
});
module.exports = __toCommonJS(Spa_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SpaSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M568.25 191.999C539.25 192.124 433.25 198.124 354.375 274.999C321.25 304.624 301 338.249 288 369.874C275 338.249 254.75 304.624 221.625 274.999C142.75 198.124 36.75 192.124 7.75 191.999C3.375 191.999 0 195.374 0 199.874C0.25 227.749 7.125 325.999 88.75 399.124C172.75 480.999 256 479.999 288 479.999S403.25 480.999 487.25 399.124C568.875 325.999 575.75 227.749 576 199.874C576 195.374 572.625 191.999 568.25 191.999ZM288 302.624C300.75 283.749 315.625 266.874 332.125 252.124C351.125 233.499 371.625 218.749 392.375 206.874C375.875 136.374 340.625 73.874 295.625 34.624C291.5 31.124 284.625 31.124 280.5 34.624C235.5 73.874 200.25 136.249 183.75 206.749C204.125 218.499 224.25 232.874 243 251.124C260 266.374 275.125 283.749 288 302.624Z" })
  }
));
SpaSolid.displayName = "SpaSolid";
var Spa_default = SpaSolid;
