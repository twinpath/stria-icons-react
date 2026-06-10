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
var Volcano_exports = {};
__export(Volcano_exports, {
  default: () => Volcano_default
});
module.exports = __toCommonJS(Volcano_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VolcanoRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M159.99 144C172.865 144 184.742 140.125 194.742 133.625L223.996 192H288L317.254 133.625C327.254 140.125 339.131 144 352.006 144C387.26 144 416.012 115.25 416.012 80S387.26 16 352.006 16C336.256 16 322.004 21.875 310.752 31.375C299.627 12.75 279.375 0 255.998 0S212.369 12.75 201.244 31.375C189.992 21.875 175.742 16 159.99 16C124.736 16 95.984 44.75 95.984 80S124.736 144 159.99 144ZM505.52 460.75L384.756 306.504L384.76 306.5L329.754 236.25C323.504 228.5 314.254 224 304.377 224H207.619C197.744 224 188.492 228.5 182.367 236.25L126.736 307.25L126.738 307.252L6.477 460.75C-9.396 481.875 5.727 512 32.104 512H480.018C506.27 512 521.396 481.875 505.52 460.75ZM64.908 464L181.504 315.182C192 304 209.352 302.465 224.246 302.25C241.371 300.75 257.748 309.25 269 322.25L300.627 359.125C310.377 370.5 329.754 370.5 339.631 359.125L352.893 343.662L447.113 464H64.908Z" })
  }
));
VolcanoRegular.displayName = "VolcanoRegular";
var Volcano_default = VolcanoRegular;
