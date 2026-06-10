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
const WhaleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 128.001C388.906 128.001 303.281 163.469 238.875 227.876L153.219 310.563C146.906 316.657 138.594 320.001 129.812 320.001C111.156 320.001 96 304.844 96 286.188C96 254.631 108.277 224.983 130.582 202.671L140.393 192.86L197.139 206.473C207.568 208.592 218.439 205.325 226.041 197.723L283.316 140.448C292.332 131.432 287.648 115.963 275.096 113.489L191.324 96.7L191.301 96.676L174.51 12.903C172.035 0.352 156.568 -4.333 147.553 4.682L90.277 61.958C82.676 69.561 79.406 80.43 81.527 90.862L95.139 147.606L57.371 185.372L57.377 185.374L49.125 193.626C17.438 225.313 0 267.438 0 312.251C0 404.751 75.25 480.001 167.75 480.001H544C596.938 480.001 640 436.938 640 384.001V288.001C640 199.782 568.219 128.001 480 128.001ZM384 312.001C370.746 312.001 360 301.254 360 288.001C360 274.745 370.746 264.001 384 264.001S408 274.745 408 288.001C408 301.254 397.254 312.001 384 312.001Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 312.001C370.746 312.001 360 301.254 360 288.001C360 274.745 370.746 264.001 384 264.001S408 274.745 408 288.001C408 301.254 397.254 312.001 384 312.001Z" })
    ]
  }
));
WhaleDuotone.displayName = "WhaleDuotone";
var Whale_default = WhaleDuotone;
