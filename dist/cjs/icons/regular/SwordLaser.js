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
var SwordLaser_exports = {};
__export(SwordLaser_exports, {
  default: () => SwordLaser_default
});
module.exports = __toCommonJS(SwordLaser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SwordLaserRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176.507 223.508C173.383 220.383 168.384 220.383 165.259 223.508L153.886 234.756C150.761 237.881 150.761 243.005 153.886 246.13L158.385 250.629L16.029 392.985C-5.343 414.357 -5.343 448.852 16.029 470.224L41.776 495.971C63.148 517.343 97.643 517.343 119.015 495.971L261.371 353.615L266.995 359.239C270.12 362.364 275.244 362.364 278.369 359.239L289.617 347.991C292.742 344.866 292.742 339.742 289.617 336.617L176.507 223.508ZM85.02 461.975C82.52 464.6 78.271 464.6 75.771 462.1L50.025 436.229C47.4 433.729 47.4 429.48 50.025 426.98L113.141 363.739L148.261 398.859L85.02 461.975ZM159.635 387.486L124.514 352.365L135.763 341.117L170.883 376.237L159.635 387.486ZM182.257 364.864L147.136 329.743L158.385 318.495L193.505 353.615L182.257 364.864ZM204.879 342.242L169.758 307.121L181.007 295.873L216.127 330.993L204.879 342.242ZM503.213 8.787C491.965 -2.587 473.717 -2.962 461.969 7.912L224.376 226.132L285.868 287.624L504.088 50.031C514.962 38.283 514.587 20.035 503.213 8.787Z" })
  }
));
SwordLaserRegular.displayName = "SwordLaserRegular";
var SwordLaser_default = SwordLaserRegular;
