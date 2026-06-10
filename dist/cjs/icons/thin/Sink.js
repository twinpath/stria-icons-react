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
var Sink_exports = {};
__export(Sink_exports, {
  default: () => Sink_default
});
module.exports = __toCommonJS(Sink_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SinkThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 288H384V264C384 250.781 394.781 240 408 240H472C476.406 240 480 236.406 480 232S476.406 224 472 224H408C385.938 224 368 241.938 368 264V288H264V72C264 41.125 289.125 16 320 16S376 41.125 376 72V120C376 124.406 379.594 128 384 128S392 124.406 392 120V72C392 32.312 359.688 0 320 0S248 32.312 248 72V288H144V264C144 241.938 126.062 224 104 224H40C35.594 224 32 227.594 32 232S35.594 240 40 240H104C117.219 240 128 250.781 128 264V288H32C14.328 288 0 302.326 0 320C0 337.672 14.328 352 32 352H480C497.674 352 512 337.672 512 320C512 302.326 497.674 288 480 288ZM480 336H32C23.178 336 16 328.822 16 320S23.178 304 32 304H480C488.822 304 496 311.178 496 320S488.822 336 480 336ZM472 376C467.594 376 464 379.594 464 384V408C464 456.531 424.531 496 376 496H136C87.469 496 48 456.531 48 408V384C48 379.594 44.406 376 40 376S32 379.594 32 384V408C32 465.344 78.656 512 136 512H376C433.344 512 480 465.344 480 408V384C480 379.594 476.406 376 472 376Z" })
  }
));
SinkThin.displayName = "SinkThin";
var Sink_default = SinkThin;
