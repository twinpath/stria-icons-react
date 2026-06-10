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
var FaceSmileBeam_exports = {};
__export(FaceSmileBeam_exports, {
  default: () => FaceSmileBeam_default
});
module.exports = __toCommonJS(FaceSmileBeam_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceSmileBeamDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.42 16 16 123.42 16 256S123.42 496 256 496C388.582 496 496 388.58 496 256S388.582 16 256 16ZM120.012 223.375C123.281 181.25 152.223 152 175.957 152C199.812 152 228.754 181.25 232.023 223.375C232.75 232 221.246 235.25 217.129 227.875L207.562 210.875C199.934 197.25 188.43 189.25 176.078 189.25C163.848 189.25 152.344 197.25 144.594 210.875L135.148 227.875C130.789 235.25 119.285 231.875 120.012 223.375ZM370.797 346.25C342.34 380.375 300.441 400 256 400S169.66 380.375 141.203 346.25C127.641 329.875 152.223 309.5 165.785 325.75C188.188 352.625 221.004 367.875 256 367.875S323.812 352.5 346.215 325.75C359.777 309.5 384.359 330 370.797 346.25ZM376.973 227.875L367.527 210.875C359.777 197.25 348.273 189.25 336.043 189.25C323.691 189.25 312.188 197.25 304.559 210.875L294.992 227.875C290.875 235.25 279.371 231.875 280.098 223.375C283.367 181.25 312.309 152 336.043 152C359.898 152 388.84 181.25 392.109 223.375C392.715 232 381.09 235.25 376.973 227.875Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M120.033 223.375C123.302 181.25 152.244 152 175.978 152C199.834 152 228.775 181.25 232.045 223.375C232.771 232 221.267 235.25 217.15 227.875L207.584 210.875C199.955 197.25 188.451 189.25 176.099 189.25C163.869 189.25 152.365 197.25 144.615 210.875L135.17 227.875C130.81 235.25 119.306 231.875 120.033 223.375ZM376.994 227.875L367.549 210.875C359.799 197.25 348.295 189.25 336.064 189.25C323.713 189.25 312.209 197.25 304.58 210.875L295.013 227.875C290.896 235.25 279.392 231.875 280.119 223.375C283.388 181.25 312.33 152 336.064 152C359.92 152 388.861 181.25 392.131 223.375C392.736 232 381.111 235.25 376.994 227.875Z" })
    ]
  }
));
FaceSmileBeamDuotone.displayName = "FaceSmileBeamDuotone";
var FaceSmileBeam_default = FaceSmileBeamDuotone;
