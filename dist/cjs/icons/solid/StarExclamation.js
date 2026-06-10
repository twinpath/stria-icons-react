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
var StarExclamation_exports = {};
__export(StarExclamation_exports, {
  default: () => StarExclamation_default
});
module.exports = __toCommonJS(StarExclamation_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarExclamationSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528.53 171.49L382.171 150.195L316.739 17.805C310.866 5.971 299.393 0 287.927 0C276.532 0 265.141 5.898 259.259 17.805L193.827 150.195L47.468 171.49C21.202 175.287 10.682 207.58 29.718 226.078L135.628 329.066L110.583 474.551C107.018 495.344 123.599 512 142.19 512C147.122 512 152.196 510.828 157.073 508.25L287.999 439.555L418.925 508.25C423.79 510.803 428.85 511.963 433.77 511.963C452.378 511.963 468.981 495.357 465.415 474.551L440.37 329.066L546.282 226.078C565.317 207.58 554.798 175.287 528.53 171.49ZM263.999 168C263.999 154.75 274.749 144 287.999 144S311.999 154.75 311.999 168V264C311.999 277.25 301.249 288 287.999 288S263.999 277.25 263.999 264V168ZM287.999 384C270.325 384 255.999 369.672 255.999 351.998C255.999 334.326 270.325 320 287.999 320S319.999 334.326 319.999 351.998C319.999 369.672 305.673 384 287.999 384Z" })
  }
));
StarExclamationSolid.displayName = "StarExclamationSolid";
var StarExclamation_default = StarExclamationSolid;
