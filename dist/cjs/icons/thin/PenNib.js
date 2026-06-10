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
var PenNib_exports = {};
__export(PenNib_exports, {
  default: () => PenNib_default
});
module.exports = __toCommonJS(PenNib_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenNibThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496.031 73.725L437.797 15.427C417.203 -5.189 381.063 -5.048 360.75 15.286L283.797 88.507L138.048 134.369C115.798 140.72 98.11 157.629 90.626 179.997L0.298 501.817C-0.483 504.617 0.298 507.605 2.345 509.654C3.86 511.171 5.907 512 8.001 512C8.72 512 9.454 511.906 10.173 511.703L332.016 421.151C354.032 413.768 370.938 396.014 377.172 373.912L423.031 227.893L496.031 150.997C506.328 140.689 512 126.971 512 112.361S506.328 84.033 496.031 73.725ZM361.844 369.329C356.985 386.566 343.922 400.269 327.297 405.853L35.296 487.991L174.62 348.515C183.969 355.527 195.448 359.834 208.001 359.834C238.876 359.834 264 334.682 264 303.773S238.875 247.712 208.001 247.712S152.001 272.864 152.001 303.773C152.001 316.339 156.303 327.83 163.307 337.19L23.983 476.667L105.907 184.721C111.61 167.702 125.298 154.626 142.516 149.761C142.594 149.73 142.673 149.714 142.751 149.683L285.735 104.696L406.86 225.954L361.844 369.329ZM168.001 303.773C168.001 281.686 185.938 263.729 208.001 263.729C230.063 263.729 248 281.686 248 303.773C248 325.859 230.063 343.816 208.001 343.816C185.938 343.816 168.001 325.859 168.001 303.773ZM484.578 139.813L415.813 212.251L299.422 95.733L371.922 26.752C386.485 12.173 411.969 12.173 426.485 26.752L484.719 85.05C492 92.323 496 102.021 496 112.361C496 122.685 492 132.383 484.578 139.813Z" })
  }
));
PenNibThin.displayName = "PenNibThin";
var PenNib_default = PenNibThin;
