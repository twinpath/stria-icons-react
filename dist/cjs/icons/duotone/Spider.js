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
var Spider_exports = {};
__export(Spider_exports, {
  default: () => Spider_default
});
module.exports = __toCommonJS(Spider_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SpiderDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M178.687 23.758C180.84 15.184 175.605 6.494 166.996 4.354L151.421 0.48C142.816 -1.66 134.099 3.553 131.948 12.123L103.719 122.188C101.827 129.73 103.719 137.719 108.799 143.623L162.273 205.77L191.335 224H207.397V184.445L153.487 121.781L178.687 23.758ZM471.688 122.188L443.459 12.123C441.308 3.553 432.592 -1.66 423.988 0.48L408.411 4.354C399.804 6.494 394.569 15.184 396.72 23.758L421.92 121.781L368.011 184.445V224H384.072L413.134 205.77L466.608 143.623C471.688 137.719 473.582 129.73 471.688 122.188Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M563.286 401.648C565.893 410.092 561.137 419.045 552.661 421.645L537.312 426.354C528.832 428.953 519.842 424.215 517.233 415.768L493.223 338.031L413.432 306.23L466.906 368.377C471.986 374.281 473.878 382.27 471.986 389.812L443.757 499.877C441.606 508.447 432.889 513.66 424.284 511.52L408.709 507.646C400.099 505.506 394.865 496.816 397.017 488.242L422.217 390.219L383.705 345.451C383.858 347.656 384.367 349.758 384.367 352C384.367 405.02 341.222 448 287.999 448S191.631 405.02 191.631 352C191.631 349.758 192.142 347.66 192.293 345.457L153.785 390.219L178.985 488.242C181.135 496.816 175.901 505.506 167.293 507.646L151.716 511.52C143.113 513.66 134.396 508.447 132.245 499.877L104.016 389.812C102.122 382.27 104.016 374.281 109.096 368.377L162.57 306.23L82.779 338.031L58.767 415.768C56.16 424.215 47.17 428.953 38.69 426.354L23.341 421.645C14.863 419.045 10.107 410.092 12.714 401.648L40.11 312.957C42.253 306.018 47.433 300.416 54.201 297.719L158.898 256H158.896L54.179 214.273C47.425 211.582 42.255 205.99 40.114 199.062L12.714 110.352C10.107 101.908 14.863 92.955 23.339 90.355L38.689 85.646C47.168 83.047 56.158 87.785 58.767 96.232L82.777 173.969L162.568 205.77L191.631 224H207.692V160H208.004C206.208 123.369 228.947 91.771 261.437 80.434C266.577 78.641 271.938 82.648 271.938 88.074V112H304.06V88.09C304.06 82.646 309.454 78.646 314.609 80.449C345.882 91.387 368.306 121.049 368.306 155.941C368.306 157.334 367.937 158.625 367.867 160H368.306V224H384.367L413.43 205.77L493.221 173.969L517.233 96.232C519.84 87.785 528.83 83.047 537.31 85.646L552.659 90.355C561.137 92.955 565.893 101.908 563.286 110.352L535.89 199.043C533.747 205.982 528.567 211.584 521.799 214.281L417.102 256H417.104L521.821 297.727C528.575 300.418 533.745 306.01 535.886 312.938L563.286 401.648Z" })
    ]
  }
));
SpiderDuotone.displayName = "SpiderDuotone";
var Spider_default = SpiderDuotone;
