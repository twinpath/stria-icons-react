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
var Scythe_exports = {};
__export(Scythe_exports, {
  default: () => Scythe_default
});
module.exports = __toCommonJS(Scythe_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScytheThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M505.711 184C505.711 179.594 502.117 176 497.711 176H21.555C80.711 74.125 193.524 16 333.399 16H535.992C540.399 16 543.992 12.406 543.992 8S540.399 0 535.992 0H333.399C182.117 0 60.93 65.719 0.899 180.281C-0.383 182.781 -0.289 185.75 1.149 188.156C2.586 190.531 5.18 192 7.992 192H497.711C502.117 192 505.711 188.406 505.711 184ZM632.572 11.625C626.572 4.25 617.447 0 607.949 0H582.451L522.705 288H415.963C398.291 288 383.965 302.326 383.965 320S398.291 352 415.963 352H509.455L480.658 474.193C476.613 493.699 491.506 512 511.428 512C526.305 512 539.145 501.566 542.188 487.006L639.445 38C641.195 28.625 638.695 19 632.572 11.625ZM526.528 483.73C525.041 490.84 518.692 496 511.428 496C506.768 496 502.406 493.926 499.465 490.311C496.524 486.697 495.379 482.006 496.233 477.863L525.029 355.67L529.664 336H415.963C407.141 336 399.965 328.822 399.965 320S407.141 304 415.963 304H535.727L538.371 291.25L595.473 16H607.949C612.682 16 617.246 18.139 620.262 21.844C623.336 25.547 624.594 30.365 623.809 34.613L526.528 483.73Z" })
  }
));
ScytheThin.displayName = "ScytheThin";
var Scythe_default = ScytheThin;
