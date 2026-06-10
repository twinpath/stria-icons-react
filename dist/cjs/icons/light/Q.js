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
var Q_exports = {};
__export(Q_exports, {
  default: () => Q_default
});
module.exports = __toCommonJS(Q_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const QLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M382.689 413.902C423.018 373.371 447.997 317.551 447.997 256C447.997 132.5 347.513 32 223.998 32S0 132.5 0 256S100.484 480 223.998 480C274.469 480 320.937 463.016 358.433 434.742L419.856 506.406C423.013 510.094 427.497 512 431.997 512C435.684 512 439.387 510.719 442.403 508.156C449.122 502.406 449.903 492.281 444.137 485.594L382.689 413.902ZM223.998 448C118.124 448 32 361.875 32 256S118.124 64 223.998 64S415.997 150.125 415.997 256C415.997 307.852 395.255 354.883 361.74 389.461L252.139 261.594C246.404 254.906 236.295 254.188 229.592 259.844C222.873 265.594 222.092 275.719 227.858 282.406L337.597 410.438C305.742 433.93 266.531 448 223.998 448Z" })
  }
));
QLight.displayName = "QLight";
var Q_default = QLight;
