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
var Timeline_exports = {};
__export(Timeline_exports, {
  default: () => Timeline_default
});
module.exports = __toCommonJS(Timeline_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TimelineDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 256C640 273.666 625.666 288 608 288H352V358.754C342.188 354.459 331.395 352 320 352S297.811 354.459 288 358.754V288H32C14.334 288 0 273.666 0 256S14.334 224 32 224H96V153.246C105.812 157.541 116.605 160 128 160S150.189 157.541 160 153.246V224H480V153.246C489.812 157.541 500.605 160 512 160S534.189 157.541 544 153.246V224H608C625.666 224 640 238.334 640 256Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 0C83.818 0 48 35.82 48 80S83.818 160 128 160C172.184 160 208 124.18 208 80S172.184 0 128 0ZM128 112C110.355 112 96 97.645 96 80S110.355 48 128 48S160 62.355 160 80S145.645 112 128 112ZM320 352C275.816 352 240 387.82 240 432S275.816 512 320 512C364.182 512 400 476.18 400 432S364.182 352 320 352ZM320 464C302.355 464 288 449.645 288 432S302.355 400 320 400S352 414.355 352 432S337.645 464 320 464ZM512 0C467.818 0 432 35.82 432 80S467.818 160 512 160C556.184 160 592 124.18 592 80S556.184 0 512 0ZM512 112C494.355 112 480 97.645 480 80S494.355 48 512 48S544 62.355 544 80S529.645 112 512 112Z" })
    ]
  }
));
TimelineDuotone.displayName = "TimelineDuotone";
var Timeline_default = TimelineDuotone;
