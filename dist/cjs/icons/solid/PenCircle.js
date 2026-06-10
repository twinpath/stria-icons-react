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
var PenCircle_exports = {};
__export(PenCircle_exports, {
  default: () => PenCircle_default
});
module.exports = __toCommonJS(PenCircle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenCircleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16H256C123.452 16 16 123.452 16 256V256C16 388.548 123.452 496 256 496H256C388.548 496 496 388.548 496 256V256C496 123.452 388.548 16 256 16ZM210.771 368.102C188.521 373.342 139.166 383.812 139.166 383.812C138.535 383.939 137.912 384 137.303 384C131.592 384 127.008 378.73 128.186 372.83L144.289 301.221C145.84 294.326 149.316 288.014 154.314 283.016L255.344 181.969L330.016 256.639C289.949 296.705 249.352 337.305 228.414 358.242C223.525 363.131 217.502 366.518 210.771 368.102ZM373.092 213.561L352.639 234.014L277.965 159.34L298.365 138.938C305.656 131.645 315.207 128 324.764 128C334.316 128 343.871 131.646 351.16 138.936L373.041 160.818C387.617 175.398 387.672 198.982 373.092 213.561Z" })
  }
));
PenCircleSolid.displayName = "PenCircleSolid";
var PenCircle_default = PenCircleSolid;
