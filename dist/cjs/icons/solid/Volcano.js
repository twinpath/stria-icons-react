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
const VolcanoSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M304.377 224H207.619C197.743 224 188.492 228.5 182.367 236.25L126.737 307.25L139.988 323.75C149.739 336 170.241 336 180.117 323.75C190.868 310.25 206.869 302.5 224.246 302.25C241.372 300.75 257.748 309.25 268.999 322.25L300.627 359.125C310.378 370.5 329.754 370.5 339.63 359.125L384.759 306.5L329.754 236.25C323.504 228.5 314.253 224 304.377 224ZM159.99 144C172.866 144 184.742 140.125 194.743 133.625L223.995 192H288.001L317.253 133.625C327.254 140.125 339.13 144 352.006 144C387.259 144 416.012 115.25 416.012 80S387.259 16 352.006 16C336.255 16 322.004 21.875 310.753 31.375C299.627 12.75 279.375 0 255.998 0C232.621 0 212.37 12.75 201.244 31.375C189.993 21.875 175.741 16 159.99 16C124.737 16 95.985 44.75 95.985 80S124.737 144 159.99 144ZM505.519 460.75L404.761 332.125L363.757 379.75C352.756 392.625 336.755 400 320.004 400S287.251 392.75 276.25 379.75L244.622 343C239.747 337.25 232.621 334 225.121 334H224.746C216.995 334.25 209.869 337.75 205.119 343.75C182.992 371.25 136.988 371.25 114.986 343.75L106.611 333.125L6.477 460.75C-9.397 481.875 5.727 512 32.104 512H480.017C506.269 512 521.396 481.875 505.519 460.75Z" })
  }
));
VolcanoSolid.displayName = "VolcanoSolid";
var Volcano_default = VolcanoSolid;
