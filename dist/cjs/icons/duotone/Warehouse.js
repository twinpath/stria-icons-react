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
const WarehouseDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M511.75 352H128V416H511.5L511.75 352ZM128 512H512V448H128.125L128 512ZM512 256H128V320H511.834L512 256Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 161.25V496C640 504.875 632.875 512 624 512H560C551.125 512 544 504.875 544 496V256C544 238.375 529.375 224 511.375 224H128C110 224 95.375 238.375 95.375 256L96 496C96 504.875 88.875 512 80 512H16C7.125 512 0 504.875 0 496V161.25C0 141.875 11.625 124.5 29.5 117L301.5 3.625C307.375 1.375 313.625 0.25 320 0C326.25 0.25 332.5 1.5 338.375 3.625L610.5 117C628.375 124.5 640 141.875 640 161.25Z" })
    ]
  }
));
WarehouseDuotone.displayName = "WarehouseDuotone";
var Warehouse_default = WarehouseDuotone;
