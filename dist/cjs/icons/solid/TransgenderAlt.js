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
var TransgenderAlt_exports = {};
__export(TransgenderAlt_exports, {
  default: () => TransgenderAlt_default
});
module.exports = __toCommonJS(TransgenderAlt_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TransgenderAltSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M498.562 0H404.195C386.24 0 377.248 21.709 389.943 34.406L411.145 55.605L344.139 122.611C318.85 105.867 288.602 96 256 96S193.15 105.867 167.861 122.611L151.594 106.344L157.654 100.281C163.904 94.033 163.904 83.902 157.654 77.654L146.346 66.344C140.096 60.096 129.967 60.096 123.717 66.344L117.656 72.406L100.857 55.605L122.057 34.406C134.752 21.709 125.76 0 107.805 0H13.438C6.016 0 0 6.016 0 13.438V107.805C0 125.76 21.709 134.752 34.406 122.057L55.607 100.855L72.406 117.656L66.346 123.717C60.096 129.965 60.096 140.096 66.346 146.344L77.654 157.654C83.904 163.902 94.033 163.902 100.283 157.654L106.344 151.594L122.611 167.861C105.867 193.15 96 223.398 96 256C96 333.404 150.971 397.947 224 412.775V432.004H208C199.164 432.004 192 439.168 192 448.004V464C192 472.836 199.164 480 208 480H224V496C224 504.836 231.164 512 240 512H272C280.836 512 288 504.836 288 496V480H304C312.836 480 320 472.836 320 464V448.004C320 439.168 312.836 432.004 304 432.004H288V412.775C361.029 397.947 416 333.404 416 256C416 223.398 406.133 193.15 389.389 167.861L456.395 100.855L477.594 122.057C490.291 134.752 512 125.76 512 107.805V13.438C512 6.016 505.984 0 498.562 0ZM256 336C211.889 336 176 300.111 176 256C176 211.887 211.889 176 256 176C300.113 176 336 211.887 336 256C336 300.111 300.113 336 256 336Z" })
  }
));
TransgenderAltSolid.displayName = "TransgenderAltSolid";
var TransgenderAlt_default = TransgenderAltSolid;
