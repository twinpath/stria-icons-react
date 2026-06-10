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
var Tag_exports = {};
__export(Tag_exports, {
  default: () => Tag_default
});
module.exports = __toCommonJS(Tag_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TagThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M112 104C89.916 104 72 121.902 72 144C72 166.096 89.916 184 112 184S152 166.096 152 144C152 121.902 134.084 104 112 104ZM112 168C98.768 168 88 157.232 88 144C88 130.766 98.768 120 112 120C125.234 120 136 130.766 136 144C136 157.232 125.234 168 112 168ZM431.598 225.604L254.402 48.402C245.381 39.381 227.562 32 214.805 32H28C12.537 32 0 44.535 0 60V246.803C0 259.561 7.381 277.381 16.402 286.402L193.592 463.598C204.527 474.533 218.857 480 233.189 480C247.52 480 261.854 474.531 272.787 463.6L431.598 304.801C453.467 282.932 453.469 247.475 431.598 225.604ZM420.283 293.486L261.473 452.285C253.918 459.84 243.873 464 233.189 464S212.461 459.838 204.906 452.283L27.717 275.088C21.693 269.066 16 255.32 16 246.803V60C16 53.383 21.383 48 28 48H214.805C223.32 48 237.066 53.693 243.088 59.715L420.285 236.918C427.84 244.473 432 254.518 432 265.203C432 275.887 427.84 285.932 420.283 293.486Z" })
  }
));
TagThin.displayName = "TagThin";
var Tag_default = TagThin;
