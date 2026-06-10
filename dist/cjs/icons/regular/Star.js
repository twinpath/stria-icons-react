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
var Star_exports = {};
__export(Star_exports, {
  default: () => Star_default
});
module.exports = __toCommonJS(Star_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528.53 171.49L382.171 150.195L316.739 17.805C310.866 5.971 299.395 -0.002 287.927 0C276.532 0 265.141 5.898 259.259 17.805L193.827 150.195L47.468 171.49C21.202 175.287 10.682 207.58 29.718 226.078L135.628 329.066L110.583 474.551C107.02 495.344 123.599 512 142.19 512C147.122 512 152.196 510.828 157.073 508.25L287.999 439.555L418.925 508.25C423.79 510.803 428.85 511.963 433.77 511.963C452.378 511.963 468.981 495.357 465.417 474.551L440.37 329.066L546.282 226.078C565.317 207.58 554.798 175.287 528.53 171.49ZM390.207 320.593L412.61 450.73L295.433 389.248C290.778 386.806 285.22 386.806 280.565 389.248L163.39 450.73L185.793 320.593C186.688 315.393 184.962 310.086 181.179 306.408L86.477 214.32L217.372 195.276C222.579 194.519 227.081 191.249 229.412 186.532L287.999 67.988L346.588 186.532C348.919 191.249 353.421 194.519 358.628 195.276L489.52 214.32L394.82 306.408C391.037 310.086 389.311 315.393 390.207 320.593Z" })
  }
));
StarRegular.displayName = "StarRegular";
var Star_default = StarRegular;
