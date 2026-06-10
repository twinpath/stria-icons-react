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
var LampFloor_exports = {};
__export(LampFloor_exports, {
  default: () => LampFloor_default
});
module.exports = __toCommonJS(LampFloor_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LampFloorDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224.006 448H160V224H224.006V448Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256.006 448H127.994C99.616 448 72.988 466.5 64.737 492.125C61.487 502 69.863 512 80.239 512H303.761C314.137 512 322.513 502 319.263 492.125C311.012 466.5 284.384 448 256.006 448ZM381.394 179.375L312.762 19.375C307.762 7.625 296.26 0 283.384 0H100.616C87.74 0 76.238 7.625 71.238 19.375L2.606 179.375C-1.644 189.25 -0.644 200.625 5.231 209.625C11.232 218.625 21.233 224 31.984 224H352.016C362.767 224 372.768 218.625 378.769 209.625C384.644 200.625 385.644 189.25 381.394 179.375Z" })
    ]
  }
));
LampFloorDuotone.displayName = "LampFloorDuotone";
var LampFloor_default = LampFloorDuotone;
