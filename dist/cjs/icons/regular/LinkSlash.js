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
var LinkSlash_exports = {};
__export(LinkSlash_exports, {
  default: () => LinkSlash_default
});
module.exports = __toCommonJS(LinkSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LinkSlashRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M211.823 435.969C193.105 454.672 168.527 464.031 143.933 464.031C119.355 464.031 94.761 454.672 76.042 435.969C38.62 398.531 38.62 337.625 76.042 300.187L156.722 219.52L118.669 189.695L42.105 266.25C-14.036 322.406 -14.036 413.75 42.105 469.906C98.261 526.031 189.605 526.031 245.761 469.906L302.603 413.057C288.214 405.633 274.693 396.529 262.614 385.172L211.823 435.969ZM487.136 356.492L597.894 245.75C654.034 189.594 654.034 98.25 597.894 42.094C541.738 -14.031 450.394 -14.031 394.238 42.094L337.396 98.943C351.784 106.367 365.306 115.471 377.384 126.828L428.175 76.031C446.894 57.328 471.472 47.969 496.066 47.969C520.644 47.969 545.238 57.328 563.956 76.031C601.378 113.469 601.378 174.375 563.956 211.813L450.816 324.938C450.224 325.529 449.53 325.973 448.925 326.545L397.288 286.072C399.667 275.98 401.075 265.604 401.075 254.953C401.075 216.484 386.089 180.313 358.886 153.125C331.698 125.922 295.527 110.938 257.058 110.938C234.55 110.938 213.093 116.633 193.493 126.344L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.188C-3.061 19.625 -1.249 34.717 9.189 42.889L601.185 506.883C611.685 515.086 626.747 513.211 634.872 502.805C643.06 492.367 641.247 477.273 630.81 469.102L487.136 356.492ZM238.722 161.793C269.23 156.1 302.3 164.414 324.948 187.063C342.169 204.283 351.743 226.932 352.7 251.125L238.722 161.793ZM281.113 358.875C308.3 386.078 344.472 401.063 382.941 401.063C384.573 401.063 386.124 400.648 387.747 400.594L241.989 286.352C247.607 313.633 260.96 338.734 281.113 358.875Z" })
  }
));
LinkSlashRegular.displayName = "LinkSlashRegular";
var LinkSlash_default = LinkSlashRegular;
