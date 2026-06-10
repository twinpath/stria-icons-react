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
var StarOfLife_exports = {};
__export(StarOfLife_exports, {
  default: () => StarOfLife_default
});
module.exports = __toCommonJS(StarOfLife_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarOfLifeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M483.975 377.062C487.819 379.25 489.147 384.125 486.959 387.969C485.475 390.562 482.772 392 480.006 392C478.647 392 477.288 391.656 476.038 390.938L264.006 269.777V504C264.006 508.406 260.428 512 256.006 512S248.006 508.406 248.006 504V269.777L35.975 390.938C34.725 391.656 33.366 392 32.006 392C29.241 392 26.538 390.562 25.053 387.969C22.866 384.125 24.194 379.25 28.038 377.062L239.897 256L28.038 134.938C24.194 132.75 22.866 127.875 25.053 124.031C27.256 120.125 32.147 118.844 35.975 121.063L248.006 242.223V8C248.006 3.594 251.584 0 256.006 0S264.006 3.594 264.006 8V242.223L476.038 121.062C479.788 118.844 484.741 120.125 486.959 124.031C489.147 127.875 487.819 132.75 483.975 134.937L272.116 256L483.975 377.062Z" })
  }
));
StarOfLifeThin.displayName = "StarOfLifeThin";
var StarOfLife_default = StarOfLifeThin;
