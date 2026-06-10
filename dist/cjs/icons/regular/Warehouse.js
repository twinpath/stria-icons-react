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
var Warehouse_exports = {};
__export(Warehouse_exports, {
  default: () => Warehouse_default
});
module.exports = __toCommonJS(Warehouse_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WarehouseRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M597.876 110.125L346.251 5.25C329.501 -1.75 310.501 -1.75 293.751 5.25L42.126 110.125C16.501 120.625 -0.124 145.625 0.001 173.25V488C0.001 501.254 10.747 512 24.001 512C37.257 512 48.001 501.254 48.001 488V173.25C48.001 165 52.876 157.5 60.501 154.375L312.251 49.625C317.251 47.5 322.876 47.5 327.876 49.625L579.501 154.375C587.126 157.625 592.001 165 592.001 173.25V488C592.001 501.254 602.747 512 616.001 512C629.257 512 640.001 501.254 640.001 488V173.25C640.126 145.625 623.501 120.625 597.876 110.125ZM504.001 192H136.001C113.911 192 96.001 209.908 96.001 232V488C96.001 501.254 106.747 512 120.001 512C133.257 512 144.001 501.254 144.001 488V464H496.001V488C496.001 501.254 506.747 512 520.001 512C533.257 512 544.001 501.254 544.001 488V232C544.001 209.908 526.092 192 504.001 192ZM496.001 416H144.001V352H496.001V416ZM496.001 304H144.001V240H496.001V304Z" })
  }
));
WarehouseRegular.displayName = "WarehouseRegular";
var Warehouse_default = WarehouseRegular;
