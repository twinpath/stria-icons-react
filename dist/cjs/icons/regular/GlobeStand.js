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
var GlobeStand_exports = {};
__export(GlobeStand_exports, {
  default: () => GlobeStand_default
});
module.exports = __toCommonJS(GlobeStand_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GlobeStandRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208.002 352C296.368 352 368.002 280.365 368.002 192S296.368 32 208.002 32S48.002 103.635 48.002 192S119.637 352 208.002 352ZM208.002 80C269.76 80 320.002 130.242 320.002 192S269.76 304 208.002 304C146.247 304 96.002 253.758 96.002 192S146.247 80 208.002 80ZM360.002 464H248.002V428.387C361.329 409.256 448.002 310.688 448.002 192C448.002 140.094 431.346 90.094 400.69 48.906L408.565 41.375C413.51 36.656 415.997 30.334 415.997 24.001C415.997 9.07 403.554 0.005 391.945 0.005C385.989 0.005 380.043 2.203 375.44 6.625L351.44 29.531C346.494 34.248 343.994 40.577 343.994 46.919C343.994 69.806 400.002 97.78 400.002 192C400.002 297.875 313.877 384 208.002 384C112.306 384 87.339 327.989 62.882 327.989C56.635 327.989 50.402 330.423 45.69 335.281L6.784 375.281C2.259 379.944 0 385.977 0 392.006C0 401.193 7.159 416.014 23.994 416.014C30.252 416.014 36.508 413.576 41.221 408.719L64.721 384.562C103.829 413.686 150.938 429.717 200.002 431.357V464H88.002C74.748 464 64.002 474.746 64.002 488S74.748 512 88.002 512H360.002C373.258 512 384.002 501.254 384.002 488S373.258 464 360.002 464Z " })
  }
));
GlobeStandRegular.displayName = "GlobeStandRegular";
var GlobeStand_default = GlobeStandRegular;
