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
const ShishKebabDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M174.627 303.719L208.58 337.641L231.164 315.057L197.228 281.117L174.627 303.719ZM7.052 470.979C-2.344 480.354 -2.352 495.576 7.035 504.963C16.416 514.346 31.627 514.346 41.01 504.963L122.927 423.062L88.99 389.123L7.052 470.979ZM511.213 84.119C507.338 54.369 490.088 28.369 463.715 12.869C433.344 -4.756 395.72 -4.256 365.847 14.244C323.226 40.994 307.726 93.994 329.974 138.869C331.474 141.744 332.224 145.994 329.974 148.369L282.851 195.492L316.787 229.434L363.972 182.248C380.597 165.494 384.22 140.119 372.972 117.619C363.347 98.119 366.972 69.369 392.595 54.244C406.72 45.744 424.219 45.619 438.467 53.619C452.717 61.619 461.717 74.619 463.715 90.119C464.965 100.494 462.84 111.119 457.717 120.244C453.967 126.619 454.342 134.494 459.592 139.744L471.84 151.994C478.59 158.744 489.963 158.119 495.338 150.244C508.588 130.869 514.211 107.369 511.213 84.119Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M364.6 277.248L234.735 147.369C222.862 135.369 203.362 135.369 191.489 147.369L149.116 189.623C137.243 201.623 137.243 220.998 149.116 232.998L278.981 362.877C290.981 374.752 310.354 374.752 322.229 362.877L364.6 320.502C376.475 308.623 376.475 289.123 364.6 277.248ZM126.493 255.623C114.62 243.623 95.245 243.623 83.247 255.623L40.999 297.873C29 309.873 29 329.252 40.999 341.127L170.866 471.002C182.739 483.002 202.112 483.002 214.112 471.002L256.358 428.752C268.358 416.752 268.358 397.377 256.358 385.377L126.493 255.623Z" })
    ]
  }
));
ShishKebabDuotone.displayName = "ShishKebabDuotone";
var ShishKebab_default = ShishKebabDuotone;
