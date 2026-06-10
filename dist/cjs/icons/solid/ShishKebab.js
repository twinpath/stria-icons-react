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
var ShishKebab_exports = {};
__export(ShishKebab_exports, {
  default: () => ShishKebab_default
});
module.exports = __toCommonJS(ShishKebab_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShishKebabSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M126.49 255.623C114.617 243.623 95.242 243.623 83.244 255.623L40.996 297.873C28.998 309.873 28.998 329.252 40.996 341.127L170.863 471.002C182.736 483.002 202.109 483.002 214.109 471.002L256.355 428.752C268.355 416.752 268.355 397.377 256.355 385.377L126.49 255.623ZM7.052 470.978C-2.344 480.353 -2.352 495.576 7.035 504.963C16.416 514.345 31.627 514.345 41.01 504.963L100.242 445.752L66.369 411.752L7.052 470.978ZM234.732 147.369C222.859 135.369 203.359 135.369 191.486 147.369L149.113 189.623C137.24 201.623 137.24 220.998 149.113 232.998L278.978 362.877C290.978 374.752 310.351 374.752 322.226 362.877L364.597 320.502C376.472 308.623 376.472 289.123 364.597 277.248L234.732 147.369ZM511.213 84.119C507.338 54.369 490.088 28.369 463.715 12.869C433.344 -4.756 395.72 -4.256 365.847 14.244C323.226 40.994 307.726 93.994 329.974 138.869C331.474 141.744 332.224 145.994 329.974 148.369L305.476 172.873L339.474 206.748L363.972 182.248C380.597 165.494 384.22 140.119 372.972 117.619C363.347 98.119 366.972 69.369 392.595 54.244C406.72 45.744 424.219 45.619 438.467 53.619C452.717 61.619 461.717 74.619 463.715 90.119C464.965 100.494 462.84 111.119 457.717 120.244C453.967 126.619 454.342 134.494 459.592 139.744L471.84 151.994C478.59 158.744 489.963 158.119 495.338 150.244C508.588 130.869 514.211 107.369 511.213 84.119Z" })
  }
));
ShishKebabSolid.displayName = "ShishKebabSolid";
var ShishKebab_default = ShishKebabSolid;
