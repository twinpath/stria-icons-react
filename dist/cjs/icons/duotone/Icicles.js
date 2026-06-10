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
var Icicles_exports = {};
__export(Icicles_exports, {
  default: () => Icicles_default
});
module.exports = __toCommonJS(Icicles_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IciclesDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M511.453 37.867L423.941 505.531C422.316 514.156 409.939 514.156 408.314 505.531L390.563 408.789L341.664 142.309L368.916 40.256C374.342 19.938 359.029 0 338 0H480.074C500.078 0 515.205 18.246 511.453 37.867Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M337.972 0C359.001 0 374.314 19.938 368.889 40.256L341.637 142.309L341.529 141.723L300.951 294.664L295.914 313.531C295.906 313.57 295.898 313.703 295.89 313.742L295.771 314.191C293.396 321.816 282.771 321.816 280.394 314.191L259.746 233.516L246.265 180.844L199.76 377.68C197.885 386.055 186.133 386.055 184.258 377.68L140.002 190.465L103.621 314.566C101.246 321.691 90.994 321.691 88.494 314.566L1.357 41.242C-4.768 20.746 10.609 0 31.986 0H337.972Z" })
    ]
  }
));
IciclesDuotone.displayName = "IciclesDuotone";
var Icicles_default = IciclesDuotone;
