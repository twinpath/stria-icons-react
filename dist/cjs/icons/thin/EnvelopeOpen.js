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
var EnvelopeOpen_exports = {};
__export(EnvelopeOpen_exports, {
  default: () => EnvelopeOpen_default
});
module.exports = __toCommonJS(EnvelopeOpen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EnvelopeOpenThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M490.945 178.254L292.031 13.139C281.812 4.666 269.02 0 256 0S230.188 4.666 219.973 13.135L21.051 178.256C7.676 189.357 0 205.992 0 223.891V447.975C0 483.277 28.711 512 64 512H448C483.289 512 512 483.277 512 447.975V223.891C512 205.992 504.324 189.357 490.945 178.254ZM31.27 190.574L230.188 25.457C237.781 19.156 246.891 16.006 256 16.006S274.219 19.156 281.812 25.457L480.73 190.574C489.844 198.137 499.422 209.793 480.73 225.324L281.809 390.529C274.219 396.832 265.109 399.984 256 399.984S237.781 396.832 230.188 390.529L31.27 225.324C12.492 209.725 22.375 197.951 31.27 190.574ZM496 447.975C496 474.494 474.508 495.994 448 495.994H64C37.492 495.994 16 474.494 16 447.975V231.846C17.688 233.783 19.047 235.984 21.055 237.65L219.969 402.854C230.188 411.332 242.98 416 256 416C269.023 416 281.816 411.332 292.023 402.855L490.949 237.648C492.953 235.982 494.312 233.783 496 231.848V447.975Z" })
  }
));
EnvelopeOpenThin.displayName = "EnvelopeOpenThin";
var EnvelopeOpen_default = EnvelopeOpenThin;
