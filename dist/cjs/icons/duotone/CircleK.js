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
var CircleK_exports = {};
__export(CircleK_exports, {
  default: () => CircleK_default
});
module.exports = __toCommonJS(CircleK_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleKDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM275.734 242.344L347.734 346.344C355.281 357.234 352.562 372.188 341.656 379.734C337.5 382.625 332.734 384 328.016 384C320.406 384 312.922 380.391 308.266 373.656L238.887 273.441L208 303.859V360C208 373.25 197.25 384 184 384S160 373.25 160 360V152C160 138.75 170.75 128 184 128S208 138.75 208 152V236.496L311.156 134.906C320.609 125.609 335.828 125.734 345.094 135.156C354.406 144.609 354.281 159.797 344.844 169.094L273.068 239.779C273.93 240.682 275.002 241.287 275.734 242.344Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M345.094 135.156C335.828 125.734 320.609 125.609 311.156 134.906L208 236.496V152C208 138.75 197.25 128 184 128S160 138.75 160 152V360C160 373.25 170.75 384 184 384S208 373.25 208 360V303.859L238.887 273.441L308.266 373.656C312.922 380.391 320.406 384 328.016 384C332.734 384 337.5 382.625 341.656 379.734C352.562 372.188 355.281 357.234 347.734 346.344L275.734 242.344C275.002 241.287 273.93 240.682 273.068 239.779L344.844 169.094C354.281 159.797 354.406 144.609 345.094 135.156Z" })
    ]
  }
));
CircleKDuotone.displayName = "CircleKDuotone";
var CircleK_default = CircleKDuotone;
