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
var Mace_exports = {};
__export(Mace_exports, {
  default: () => Mace_default
});
module.exports = __toCommonJS(Mace_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MaceRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M500.123 209.785L419.369 184.121C405.775 139.016 370.244 103.898 325.021 91.199L297.699 10.703C295.514 4.18 291.83 1.051 288 0C284.17 1.051 280.486 4.18 278.301 10.703L250.979 91.199C205.756 103.898 170.225 139.016 156.631 184.121L75.877 209.785C60.131 214.781 59.996 228.289 75.742 233.555L155.824 260.977C160.033 276.078 166.91 289.957 175.611 302.453L7.031 471.031C-2.344 480.406 -2.344 495.594 7.031 504.969C11.719 509.656 17.844 512 24 512S36.281 509.656 40.969 504.969L209.518 336.422C221.299 344.68 234.287 351.359 248.422 355.648L273.994 436.688C276.902 445.922 282.631 449.141 288 447.648C293.369 449.141 299.098 445.922 302.006 436.688L327.578 355.648C372.531 342.008 407.525 306.352 420.176 260.977L500.258 233.555C516.004 228.289 515.869 214.781 500.123 209.785ZM288 312C239.531 312 200 272.469 200 224C200 175.527 239.531 136 288 136S376 175.527 376 224C376 272.469 336.469 312 288 312ZM288 192C270.326 192 256 206.328 256 224S270.326 256 288 256S320 241.672 320 224S305.674 192 288 192Z" })
  }
));
MaceRegular.displayName = "MaceRegular";
var Mace_default = MaceRegular;
