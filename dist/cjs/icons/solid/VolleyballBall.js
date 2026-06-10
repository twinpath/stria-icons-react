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
var VolleyballBall_exports = {};
__export(VolleyballBall_exports, {
  default: () => VolleyballBall_default
});
module.exports = __toCommonJS(VolleyballBall_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VolleyballBallSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M380.932 281.109C386.979 244.898 396.395 125.09 289.209 18.563C278.326 17.055 267.299 16 256 16C230.029 16 205.078 20.25 181.652 27.879C264.502 115.812 272.129 215.531 272.221 247.156C287.691 256.008 326.709 275.172 380.932 281.109ZM240.217 246.391C240.133 228.578 237.219 185.191 215.258 135.266C180.83 148.156 72.262 199.977 33.697 346.246C47.488 380.18 68.881 410.109 95.674 434.227C130.432 318.688 212.857 262.273 240.217 246.391ZM200.609 106.648C188.037 84.793 171.393 62.539 149.607 41.109C70.508 80.352 16 161.711 16 256C16 267.445 17.078 278.617 18.627 289.637C67.98 169.652 162.395 121.664 200.609 106.648ZM345.355 33.371C424.785 136.211 419.15 242.102 413.051 282.727C438.238 282.758 465.805 279.461 495.227 271.32C495.549 266.23 496 261.172 496 256C496 155.062 433.609 68.832 345.355 33.371ZM255.645 274.43C240.311 283.375 204.135 307.594 171.811 351.656C200.189 375.023 299.324 443.016 445.072 403.477C467.109 375.266 483.084 342.117 490.75 305.828C463.406 312.297 437.51 315 413.594 315C333.912 315 276.246 286.344 255.645 274.43ZM154.383 378.598C141.703 400.469 130.721 426.086 123.049 455.762C161.117 481.148 206.811 496 256 496C311.941 496 363.281 476.703 404.092 444.613C387.822 446.805 372.057 448.031 357.094 448.031C253.158 448.031 182.176 400.832 154.383 378.598Z" })
  }
));
VolleyballBallSolid.displayName = "VolleyballBallSolid";
var VolleyballBall_default = VolleyballBallSolid;
