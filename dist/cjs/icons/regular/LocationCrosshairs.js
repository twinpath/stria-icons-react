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
var LocationCrosshairs_exports = {};
__export(LocationCrosshairs_exports, {
  default: () => LocationCrosshairs_default
});
module.exports = __toCommonJS(LocationCrosshairs_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LocationCrosshairsRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 168C207.375 168 168 207.375 168 256S207.375 344 256 344S344 304.625 344 256S304.625 168 256 168ZM256 296C234 296 216 278.001 216 256C216 234.001 234 216 256 216C278 216 296 234.001 296 256C296 278.001 278 296 256 296ZM488 232H446.375C435.5 145.25 366.75 76.5 280 65.625V24C280 10.745 269.255 0 256 0H256C242.745 0 232 10.745 232 24V65.625C145.25 76.5 76.5 145.25 65.625 232H24C10.745 232 0 242.745 0 256V256C0 269.255 10.745 280 24 280H65.625C76.5 366.75 145.25 435.5 232 446.375V488C232 501.255 242.745 512 256 512H256C269.255 512 280 501.255 280 488V446.375C366.75 435.5 435.5 366.75 446.375 280H488C501.255 280 512 269.255 512 256V256C512 242.745 501.255 232 488 232ZM256 400C176.625 400 112 335.375 112 256S176.625 112 256 112S400 176.625 400 256S335.375 400 256 400Z" })
  }
));
LocationCrosshairsRegular.displayName = "LocationCrosshairsRegular";
var LocationCrosshairs_default = LocationCrosshairsRegular;
