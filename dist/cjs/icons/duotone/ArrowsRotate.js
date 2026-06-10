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
var ArrowsRotate_exports = {};
__export(ArrowsRotate_exports, {
  default: () => ArrowsRotate_default
});
module.exports = __toCommonJS(ArrowsRotate_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsRotateDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M458.344 282.094C437.312 274.969 414.719 286.281 407.641 307.219C385.688 372.281 324.734 416 256 416C205.246 416 158.068 391.906 128.07 352H146.703L146.695 351.992H192.008C209.676 351.992 224 337.668 224 320C224 302.328 209.676 288 192.004 288H47.996C39.156 288 31.156 291.578 25.367 297.367S16 311.156 16 319.996V464.004C16 481.672 30.324 496 47.996 496C65.664 496 79.992 481.676 79.992 464.008V418.695C124.869 467.207 188.227 496 256 496C359.094 496 450.5 430.406 483.453 332.781C490.516 311.875 479.266 289.156 458.344 282.094Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M495.556 47.996V192.004C495.556 200.844 491.978 208.844 486.189 214.633S472.4 224 463.56 224H319.552C301.88 224 287.556 209.672 287.556 192C287.556 174.332 301.88 160.008 319.548 160.008H364.861L364.853 160H383.486C353.488 120.094 306.31 96 255.556 96C186.822 96 125.884 139.719 103.9 204.812C98.275 221.5 82.697 232 66.009 232C61.775 232 57.447 231.344 53.212 229.906C32.275 222.812 21.041 200.125 28.119 179.188C61.087 81.594 152.478 16 255.556 16C323.33 16 386.687 44.793 431.564 93.305V47.992C431.564 30.324 445.892 16 463.56 16C481.232 16 495.556 30.328 495.556 47.996Z" })
    ]
  }
));
ArrowsRotateDuotone.displayName = "ArrowsRotateDuotone";
var ArrowsRotate_default = ArrowsRotateDuotone;
