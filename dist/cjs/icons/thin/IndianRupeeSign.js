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
var IndianRupeeSign_exports = {};
__export(IndianRupeeSign_exports, {
  default: () => IndianRupeeSign_default
});
module.exports = __toCommonJS(IndianRupeeSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IndianRupeeSignThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 176C320 180.406 316.422 184 312 184H255.191C251.014 258.406 190.588 317.74 115.604 319.637L269.516 466.219C272.719 469.25 272.844 474.313 269.797 477.531C268.219 479.156 266.109 480 264 480C262.016 480 260.031 479.281 258.484 477.781L92.814 320H8C3.578 320 0 316.406 0 312S3.578 304 8 304H112C179.84 304 234.971 250.805 239.191 184H8C3.578 184 0 180.406 0 176S3.578 168 8 168H239.191C234.971 101.195 179.84 48 112 48H8C3.578 48 0 44.406 0 40S3.578 32 8 32H312C316.422 32 320 35.594 320 40S316.422 48 312 48H176.586C221.182 70.609 252.238 115.395 255.191 168H312C316.422 168 320 171.594 320 176Z" })
  }
));
IndianRupeeSignThin.displayName = "IndianRupeeSignThin";
var IndianRupeeSign_default = IndianRupeeSignThin;
