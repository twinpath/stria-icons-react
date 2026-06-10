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
var AnglesDown_exports = {};
__export(AnglesDown_exports, {
  default: () => AnglesDown_default
});
module.exports = __toCommonJS(AnglesDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AnglesDownRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M328.005 270.119L192 391.769L55.995 270.119C51.433 266.026 45.714 263.994 39.995 263.994C33.401 263.994 26.838 266.682 22.119 271.994C13.275 281.868 14.119 297.055 23.994 305.867L175.999 441.86C185.125 450.047 198.875 450.047 208.001 441.86L360.006 305.867C369.881 297.055 370.725 281.868 361.881 271.994C353.068 262.088 337.849 261.276 328.005 270.119ZM175.999 249.87C185.125 258.057 198.875 258.057 208.001 249.87L360.006 113.878C369.881 105.066 370.725 89.879 361.881 80.004C353.068 70.099 337.849 69.286 328.005 78.129L192 199.779L55.995 78.13C51.433 74.036 45.714 72.005 39.995 72.005C33.401 72.005 26.838 74.692 22.119 80.004C13.275 89.879 14.119 105.066 23.994 113.878L175.999 249.87Z" })
  }
));
AnglesDownRegular.displayName = "AnglesDownRegular";
var AnglesDown_default = AnglesDownRegular;
