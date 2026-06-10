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
var HouseLaptop_exports = {};
__export(HouseLaptop_exports, {
  default: () => HouseLaptop_default
});
module.exports = __toCommonJS(HouseLaptop_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HouseLaptopSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M629.334 448.002H592V288.006C592 270.332 579.105 256.006 563.201 256.006H332.801C316.895 256.006 304 270.332 304 288.006V448.002H266.666C260.781 448.002 256 452.783 256 458.667V469.333C256.053 492.801 275.135 511.916 298.604 512H597.396C620.865 511.916 639.947 492.801 640 469.333V458.667C640 452.783 635.219 448.002 629.334 448.002ZM544 448.002H352V304.005H544V448.002ZM271.994 288.006H207.992C199.117 288.006 191.992 280.881 191.992 272.006V208.008C191.992 199.133 199.117 192.008 207.992 192.008H271.992C280.867 192.008 287.992 199.133 287.992 208.008V245.106C299.121 232.239 315 224.007 332.795 224.007H480C479.994 215.259 476.389 206.679 469.699 200.508L415.99 150.931V48.012C415.99 39.174 408.828 32.012 399.99 32.012H367.99C359.156 32.012 351.992 39.174 351.992 48.01V91.858L261.699 8.513C255.572 2.856 247.787 0.013 240 0.013C239.997 0.013 239.995 0.013 239.992 0.013C232.206 0.013 224.42 2.856 218.293 8.513L10.293 200.508C3.598 206.685 0 215.25 0 224.007C0 241.552 14.211 256.006 31.996 256.006H63.994V368.004C63.994 394.403 85.596 416.002 111.994 416.002H271.994V288.006Z " })
  }
));
HouseLaptopSolid.displayName = "HouseLaptopSolid";
var HouseLaptop_default = HouseLaptopSolid;
