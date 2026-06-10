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
var GarageOpen_exports = {};
__export(GarageOpen_exports, {
  default: () => GarageOpen_default
});
module.exports = __toCommonJS(GarageOpen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GarageOpenDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M610.5 117L338.375 3.625C332.5 1.5 326.25 0.25 320 0C313.625 0.25 307.375 1.375 301.5 3.625L29.5 117C11.625 124.5 0 141.875 0 161.25V496C0 504.875 7.125 512 16 512H80C88.875 512 96 504.875 96 496V224C96 206.375 110.625 192 128.625 192H511.375C529.375 192 544 206.375 544 224V496C544 504.875 551.125 512 560 512H624C632.875 512 640 504.875 640 496V161.25C640 141.875 628.375 124.5 610.5 117Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 288H511.5L512 224H128V288ZM468.606 349.27L458.852 320H408.25L418.918 352H221.078L231.742 320H181.148L171.395 349.27C155.402 355.387 144 370.766 144 388.91V485.816C144 500.277 155.723 512 170.184 512H183.273C197.73 512 209.453 500.277 209.453 485.816V464H430.547V485.816C430.547 500.277 442.27 512 456.727 512H469.816C484.277 512 496 500.277 496 485.816V388.91C496 370.766 484.598 355.387 468.606 349.27ZM216 432C202.746 432 192 421.254 192 408C192 394.742 202.746 384 216 384S240 394.742 240 408C240 421.254 229.254 432 216 432ZM424 432C410.746 432 400 421.254 400 408C400 394.742 410.746 384 424 384S448 394.742 448 408C448 421.254 437.254 432 424 432Z" })
    ]
  }
));
GarageOpenDuotone.displayName = "GarageOpenDuotone";
var GarageOpen_default = GarageOpenDuotone;
