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
var UserTie_exports = {};
__export(UserTie_exports, {
  default: () => UserTie_default
});
module.exports = __toCommonJS(UserTie_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserTieLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M328.228 312.627C326.732 312.141 325.21 311.91 323.706 311.91C317.536 311.91 311.671 315.779 309.087 321.697L273.751 402.637L246.206 320H255.997C264.841 320 271.997 312.844 271.997 304S264.841 288 255.997 288H191.997C183.154 288 175.997 295.156 175.997 304S183.154 320 191.997 320H201.788L174.244 402.637L138.908 321.697C136.324 315.781 130.458 311.912 124.288 311.912C122.785 311.912 121.265 312.141 119.767 312.627C49.804 335.348 -0.692 401.217 0.007 478.922C0.173 497.426 16.158 512 34.661 512H413.333C431.837 512 447.822 497.426 447.988 478.922C448.687 401.217 398.195 335.346 328.228 312.627ZM34.661 480C33.15 480 32.117 478.936 32.005 478.635C31.494 421.73 64.562 371.127 115.66 348.424L173.101 480H34.661ZM239.997 479.953H207.997L193.38 446.473L223.997 354.594L254.615 446.473L239.997 479.953ZM413.333 480H274.894L332.335 348.424C383.431 371.123 416.501 421.727 415.999 478.598C415.878 478.936 414.845 480 413.333 480ZM223.997 256C294.747 256 351.997 198.75 351.997 128S294.747 0 223.997 0S95.997 57.25 95.997 128S153.247 256 223.997 256ZM223.997 32C276.933 32 319.997 75.064 319.997 128C319.997 180.934 276.933 224 223.997 224S127.997 180.934 127.997 128C127.997 75.064 171.062 32 223.997 32Z" })
  }
));
UserTieLight.displayName = "UserTieLight";
var UserTie_default = UserTieLight;
