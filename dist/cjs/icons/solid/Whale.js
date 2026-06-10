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
var Whale_exports = {};
__export(Whale_exports, {
  default: () => Whale_default
});
module.exports = __toCommonJS(Whale_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WhaleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 128C388.906 128 303.281 163.469 238.875 227.875L153.219 310.562C146.906 316.656 138.594 320 129.812 320C111.156 320 96 304.844 96 286.188C96 254.631 108.277 224.982 130.582 202.67L140.393 192.859L197.139 206.473C207.568 208.592 218.439 205.324 226.041 197.723L283.316 140.447C292.332 131.432 287.648 115.963 275.096 113.488L191.324 96.699L191.301 96.676L174.51 12.902C172.035 0.352 156.568 -4.334 147.553 4.682L90.277 61.957C82.676 69.561 79.406 80.43 81.527 90.861L95.139 147.605L57.371 185.371L57.377 185.373L49.125 193.625C17.438 225.312 0 267.438 0 312.25C0 404.75 75.25 480 167.75 480H544C596.938 480 640 436.938 640 384V288C640 199.781 568.219 128 480 128ZM384 312C370.746 312 360 301.254 360 288C360 274.744 370.746 264 384 264S408 274.744 408 288C408 301.254 397.254 312 384 312Z" })
  }
));
WhaleSolid.displayName = "WhaleSolid";
var Whale_default = WhaleSolid;
