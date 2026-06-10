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
var Stethoscope_exports = {};
__export(Stethoscope_exports, {
  default: () => Stethoscope_default
});
module.exports = __toCommonJS(Stethoscope_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StethoscopeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 192C544 156.654 515.348 127.999 480 127.999C444.654 127.999 416 156.654 416 192C416 224.715 440.643 251.391 472.322 255.227C472.289 255.52 472 255.697 472 256V360.001C472 435.001 411 496.001 336 496.001S200 435.001 200 360.001V336C200 335.698 199.711 335.518 199.678 335.225C275.453 331.143 336 268.777 336 192V55.061C336 37.811 325 22.561 308.656 17.124L258.531 0.405C254.406 -0.97 249.813 1.28 248.406 5.467S249.281 14.186 253.469 15.592L303.594 32.311C313.406 35.561 320 44.718 320 55.061V192C320 262.594 262.594 320 192 320S64 262.594 64 192V55.061C64 44.718 70.594 35.561 80.406 32.311L130.531 15.592C134.719 14.186 137 9.655 135.594 5.467S129.688 -0.97 125.469 0.405L75.344 17.124C59 22.561 48 37.811 48 55.061V192C48 268.777 108.547 331.143 184.322 335.225C184.289 335.518 184 335.698 184 336V360.001C184 443.814 252.188 512.001 336 512.001S488 443.814 488 360.001V256C488 255.697 487.711 255.52 487.678 255.227C519.359 251.391 544 224.715 544 192ZM480 240C453.533 240 432 218.467 432 192S453.533 143.999 480 143.999S528 165.533 528 192S506.467 240 480 240Z" })
  }
));
StethoscopeThin.displayName = "StethoscopeThin";
var Stethoscope_default = StethoscopeThin;
