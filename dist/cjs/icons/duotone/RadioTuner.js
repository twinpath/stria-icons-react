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
var RadioTuner_exports = {};
__export(RadioTuner_exports, {
  default: () => RadioTuner_default
});
module.exports = __toCommonJS(RadioTuner_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RadioTunerDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 128H64C28.654 128 0 156.655 0 192V447.999C0 483.345 28.654 511.999 64 511.999H448C483.348 511.999 512 483.345 512 447.999V192C512 156.655 483.348 128 448 128ZM208 423.999C208 428.406 204.406 431.999 200 431.999H88C83.594 431.999 80 428.406 80 423.999V408C80 403.593 83.594 400 88 400H200C204.406 400 208 403.593 208 408V423.999ZM224 360C224 364.406 220.406 368 216 368H72C67.594 368 64 364.406 64 360V344C64 339.593 67.594 336 72 336H216C220.406 336 224 339.593 224 344V360ZM384 447.999C348.676 447.999 320 419.324 320 384S348.676 320 384 320C419.326 320 448 348.675 448 384S419.326 447.999 384 447.999ZM416 256H96C78.328 256 64 241.674 64 224S78.328 192 96 192H416C433.674 192 448 206.326 448 224S433.674 256 416 256Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M511.03 17.251C507.311 4.548 494.03 -2.749 481.248 0.97L51.748 126.86C43.696 129.217 36.52 133.174 30 137.961C39.87 131.739 51.469 128 63.998 128H218.508L494.748 47.032C507.467 43.298 514.748 29.969 511.03 17.251ZM416 192H96C78.329 192 64 206.326 64 224S78.329 256 96 256H416C433.674 256 448 241.674 448 224S433.674 192 416 192ZM384 320C348.676 320 320 348.675 320 384S348.676 447.999 384 447.999C419.327 447.999 448 419.324 448 384S419.327 320 384 320Z" })
    ]
  }
));
RadioTunerDuotone.displayName = "RadioTunerDuotone";
var RadioTuner_default = RadioTunerDuotone;
