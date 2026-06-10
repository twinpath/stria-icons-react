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
var ArrowsRetweet_exports = {};
__export(ArrowsRetweet_exports, {
  default: () => ArrowsRetweet_default
});
module.exports = __toCommonJS(ArrowsRetweet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsRetweetThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M351.999 400H159.997C146.763 400 135.997 389.219 135.997 376V90.404L242.546 189.844C244.077 191.281 246.046 192 247.999 192C250.14 192 252.265 191.156 253.843 189.469C256.858 186.219 256.686 181.156 253.452 178.156L133.45 66.156C130.388 63.281 125.606 63.281 122.544 66.156L2.544 178.156C-0.691 181.156 -0.862 186.219 2.153 189.469C5.184 192.687 10.231 192.875 13.45 189.844L119.997 90.404V376C119.997 398.062 137.934 416 159.997 416H351.999C356.421 416 359.999 412.406 359.999 408S356.421 400 351.999 400ZM637.847 322.531C634.847 319.313 629.768 319.156 626.55 322.156L520.001 421.596V136C520.001 113.938 502.063 96 480.001 96H287.999C283.577 96 279.999 99.594 279.999 104S283.577 112 287.999 112H480.001C493.235 112 504.001 122.781 504.001 136V421.596L397.454 322.156C394.251 319.156 389.188 319.312 386.157 322.531C383.141 325.781 383.313 330.844 386.548 333.844L506.548 445.844C508.079 447.281 510.048 448 512.001 448S515.923 447.281 517.454 445.844L637.456 333.844C640.69 330.844 640.862 325.781 637.847 322.531Z" })
  }
));
ArrowsRetweetThin.displayName = "ArrowsRetweetThin";
var ArrowsRetweet_default = ArrowsRetweetThin;
