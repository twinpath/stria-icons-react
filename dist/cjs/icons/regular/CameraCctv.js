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
var CameraCctv_exports = {};
__export(CameraCctv_exports, {
  default: () => CameraCctv_default
});
module.exports = __toCommonJS(CameraCctv_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CameraCctvRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M517.482 168.635L139.246 2.266C135.367 0.732 131.348 0 127.393 0C116.178 0 105.441 5.883 99.621 16.141L4.25 183.01C-0.5 191.26 -1.25 201.01 2 209.883C5.25 218.758 12.25 225.758 21.125 229.008L185.395 296.984L143.375 408H48V376C48 362.744 37.254 352 24 352S0 362.744 0 376V488C0 501.254 10.746 512 24 512S48 501.254 48 488V456H160C170 456 179 449.75 182.5 440.5L229.699 315.318L305.365 346.629C308.953 347.938 312.691 348.59 316.412 348.59C322.283 348.59 328.111 346.969 333.238 343.754L522.482 225.383C544.732 211.508 541.732 178.26 517.482 168.635ZM314.881 298.621L54.939 191.053L134.148 52.461L471.32 200.768L314.881 298.621ZM574.855 283.131C573.23 278.881 569.98 275.631 565.855 273.756L530.482 258.258L392.111 344.754L511.607 397.254C520.107 401.002 530.107 397.129 533.857 388.629L574.605 296.006C576.355 291.881 576.48 287.256 574.855 283.131Z" })
  }
));
CameraCctvRegular.displayName = "CameraCctvRegular";
var CameraCctv_default = CameraCctvRegular;
