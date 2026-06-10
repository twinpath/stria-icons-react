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
var Crown_exports = {};
__export(Crown_exports, {
  default: () => Crown_default
});
module.exports = __toCommonJS(Crown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CrownDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 32C265.908 32 248 49.906 248 72S265.908 112 288 112S328 94.094 328 72S310.092 32 288 32ZM40 96C17.908 96 0 113.906 0 136S17.908 176 40 176S80 158.094 80 136S62.092 96 40 96ZM536 96C513.908 96 496 113.906 496 136S513.908 176 536 176S576 158.094 576 136S558.092 96 536 96Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M40 176C40.246 176 40.465 175.914 40.711 175.91L40.701 175.859C40.453 175.863 40.248 176 40 176ZM535.299 175.859L535.289 175.91C535.535 175.914 535.754 176 536 176C535.752 176 535.547 175.863 535.299 175.859ZM504.537 159.57L414.91 231.273C399.002 244 375.408 238.816 366.297 220.594L308.699 105.398C302.57 109.215 295.75 112 288 112S273.43 109.215 267.301 105.398L209.703 220.594C200.592 238.816 176.998 244 161.09 231.273L71.463 159.57C64.303 169.113 53.482 175.664 40.711 175.91L91.223 453.727C93.988 468.938 107.242 480 122.707 480H453.293C468.758 480 482.012 468.938 484.777 453.727L535.289 175.91C522.518 175.664 511.697 169.113 504.537 159.57Z" })
    ]
  }
));
CrownDuotone.displayName = "CrownDuotone";
var Crown_default = CrownDuotone;
