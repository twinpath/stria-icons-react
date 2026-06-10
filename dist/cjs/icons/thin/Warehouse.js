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
const WarehouseThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M614.375 112.645L322.875 0.516C321 -0.172 319 -0.172 317.125 0.516L25.625 112.645C10.312 118.551 0 133.551 0 149.957V504C0 508.406 3.594 512 8 512S16 508.406 16 504V149.957C16 140.113 22.188 131.113 31.375 127.582L320 16.547L608.625 127.582C617.812 131.113 624 140.113 624 149.957V504C624 508.406 627.594 512 632 512S640 508.406 640 504V149.957C640 133.551 629.688 118.551 614.375 112.645ZM520 191.99H120C106.781 191.99 96 202.771 96 215.99V504C96 508.406 99.594 512 104 512S112 508.406 112 504V432H528V504C528 508.406 531.594 512 536 512S544 508.406 544 504V215.99C544 202.771 533.219 191.99 520 191.99ZM528 416H112V319.994H528V416ZM528 303.994H112V215.99C112 211.584 115.594 207.99 120 207.99H520C524.406 207.99 528 211.584 528 215.99V303.994Z" })
  }
));
WarehouseThin.displayName = "WarehouseThin";
var Warehouse_default = WarehouseThin;
