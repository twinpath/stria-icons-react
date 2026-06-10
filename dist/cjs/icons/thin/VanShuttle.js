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
var VanShuttle_exports = {};
__export(VanShuttle_exports, {
  default: () => VanShuttle_default
});
module.exports = __toCommonJS(VanShuttle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VanShuttleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 304C431.398 304 392 343.398 392 392C392 440.6 431.398 480 480 480S568 440.6 568 392C568 343.398 528.602 304 480 304ZM480 464C440.299 464 408 431.701 408 392S440.299 320 480 320S552 352.299 552 392S519.701 464 480 464ZM160 304C111.398 304 72 343.398 72 392C72 440.6 111.398 480 160 480S248 440.6 248 392C248 343.398 208.602 304 160 304ZM160 464C120.299 464 88 431.701 88 392S120.299 320 160 320S232 352.299 232 392S199.701 464 160 464ZM628.875 210.625L494.391 49.268C485.271 38.326 471.764 32 457.52 32H48C21.6 32 0 53.6 0 80V336C0 359.244 16.744 378.768 38.766 383.102C43.584 384.051 48 380.076 48 375.166C48 371.275 45.168 368.113 41.361 367.307C26.893 364.242 16 351.369 16 336V208H605.859L616.539 220.814C621.35 226.639 624 233.939 624 241.375V336C624 351.369 613.109 364.242 598.639 367.307C594.834 368.113 592 371.275 592 375.166C592 380.076 596.418 384.051 601.234 383.102C623.256 378.768 640 359.244 640 336V241.375C640 230.125 636 219.25 628.875 210.625ZM144 192H16V80C16 62.326 30.328 48 48 48H144V192ZM288 192H160V48H288V192ZM432 192H304V48H432V192ZM448 192V48H457.518C467.014 48 476.021 52.217 482.102 59.514L592.523 192H448ZM360 368H280C275.582 368 272 371.582 272 376S275.582 384 280 384H360C364.418 384 368 380.418 368 376S364.418 368 360 368Z" })
  }
));
VanShuttleThin.displayName = "VanShuttleThin";
var VanShuttle_default = VanShuttleThin;
