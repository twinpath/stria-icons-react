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
var LightbulbSlash_exports = {};
__export(LightbulbSlash_exports, {
  default: () => LightbulbSlash_default
});
module.exports = __toCommonJS(LightbulbSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LightbulbSlashDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M187.324 291.771C203.855 310.615 229.668 350.001 239.543 383.219C239.574 383.469 239.605 383.735 239.637 384H239.762L239.824 454.324C239.824 460.621 241.699 466.777 245.168 472.027L262.262 497.714C267.512 505.589 279.449 511.995 288.918 511.995H350.637C360.074 511.995 372.012 505.589 377.262 497.714L394.355 472.027C397.293 467.589 399.699 459.652 399.699 454.324L399.738 410.164L148 212.858C154.379 242.611 167.961 269.685 187.324 291.771ZM319.262 0.001C246.273 0.18 188.055 42.688 160.742 100.882L213.545 142.269C227.957 97.039 269.729 64.101 319.762 64C328.637 64 335.762 71.125 335.762 80S328.637 96 319.762 96C279.82 96 246.93 125.484 240.996 163.78L434.365 315.341C440.713 306.013 446.959 297.767 452.262 291.748C480.387 259.748 495.762 218.623 495.762 175.999C495.762 78.625 416.637 -0.249 319.262 0.001Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M615.984 512C610.796 512 605.593 510.344 601.187 506.875L9.187 42.88C-1.235 34.724 -3.063 19.63 5.109 9.193C13.296 -1.213 28.343 -3.088 38.812 5.13L630.812 469.125C641.234 477.282 643.062 492.375 634.89 502.813C630.156 508.844 623.109 512 615.984 512Z" })
    ]
  }
));
LightbulbSlashDuotone.displayName = "LightbulbSlashDuotone";
var LightbulbSlash_default = LightbulbSlashDuotone;
