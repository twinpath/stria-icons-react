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
var Recycle_exports = {};
__export(Recycle_exports, {
  default: () => Recycle_default
});
module.exports = __toCommonJS(Recycle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RecycleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M180.183 243.103C184.978 263.941 162.185 280.174 144.059 268.829L119.753 253.615L68.859 335.041C55.532 356.362 70.86 384.019 96.003 384.019H128.062C145.702 384.019 160.002 398.318 160.002 415.958V416.09C160.002 433.731 145.7 448.032 128.059 448.032H96.161C20.799 448.032 -25.181 365.178 14.692 301.228L65.504 219.733L41.126 204.474C23.011 193.136 27.63 165.559 48.451 160.742L139.877 139.591C148.502 137.715 157.127 142.967 159.127 151.593L180.183 243.103ZM283.123 78.953L324.372 145.092L300.101 160.209C281.938 171.522 286.534 199.149 307.381 203.972L398.783 225.118C407.404 227.113 416.009 221.734 417.993 213.11L439.031 121.684C443.82 100.871 421.08 84.638 402.952 95.93L378.62 111.085L337.411 45.134C299.831 -15.01 212.254 -15.044 174.626 45.07L167.194 56.944C157.904 71.787 162.438 91.545 177.27 100.852L177.465 100.974C192.381 110.333 212.059 105.817 221.402 90.892L228.875 78.953C241.624 58.573 270.873 59.324 283.123 78.953ZM497.322 301.253L480.349 274.014C471.013 259.03 451.295 254.456 436.315 263.8L436.315 263.8C421.376 273.118 416.796 292.953 426.138 307.878L443.124 335.017C456.471 356.34 441.142 384.019 415.986 384.019H319.997V355.324C319.997 333.941 294.144 323.234 279.026 338.356L212.616 404.782C206.395 411.005 206.399 421.185 212.625 427.403L279.045 493.735C294.166 508.836 319.997 498.126 319.997 476.756V448.032H415.837C491.185 448.032 537.168 365.204 497.322 301.253Z" })
  }
));
RecycleSolid.displayName = "RecycleSolid";
var Recycle_default = RecycleSolid;
