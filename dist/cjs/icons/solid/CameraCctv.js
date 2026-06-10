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
const CameraCctvSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M517.482 168.635L139.245 2.265C124.371 -3.609 107.496 2.265 99.622 16.14L4.25 183.01C-0.5 191.26 -1.25 201.009 1.999 209.884C5.25 218.759 12.25 225.759 21.124 229.009L177.619 293.882L137.745 400.003H63.998V400.003C63.998 373.495 42.508 352.005 16 352.005H15.999C7.163 352.005 0 359.168 0 368.004V496C0 504.837 7.163 512 15.999 512H16C42.508 512 63.998 490.51 63.998 464.002V464.001H160.051C173.381 464.001 185.313 455.733 189.993 443.252L236.867 318.256L305.365 346.63C314.614 350.005 324.864 349.005 333.239 343.755L522.482 225.384C544.732 211.509 541.732 178.26 517.482 168.635ZM565.856 273.757L530.482 258.258L392.112 344.755L511.608 397.253C520.107 401.003 530.107 397.128 533.857 388.629L574.606 296.007C576.355 291.882 576.48 287.257 574.856 283.132C573.231 278.882 569.98 275.632 565.856 273.757Z" })
  }
));
CameraCctvSolid.displayName = "CameraCctvSolid";
var CameraCctv_default = CameraCctvSolid;
