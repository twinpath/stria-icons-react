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
var SdCards_exports = {};
__export(SdCards_exports, {
  default: () => SdCards_default
});
module.exports = __toCommonJS(SdCards_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SdCardsThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 0H224L96 128V352C96 387.25 124.75 416 160 416H384C419.25 416 448 387.25 448 352V64C448 28.75 419.25 0 384 0ZM432 352C432 378.467 410.467 400 384 400H160C133.533 400 112 378.467 112 352V134.627L230.627 16H384C410.467 16 432 37.533 432 64V352ZM344 448C339.578 448 336 451.594 336 456C336 478.062 318.062 496 296 496H72C41.125 496 16 470.875 16 440V152C16 129.938 33.938 112 56 112C60.422 112 64 108.406 64 104S60.422 96 56 96C25.125 96 0 121.125 0 152V440C0 479.688 32.297 512 72 512H296C326.875 512 352 486.875 352 456C352 451.594 348.422 448 344 448ZM248 64C243.594 64 240 67.594 240 72V152C240 156.406 243.594 160 248 160S256 156.406 256 152V72C256 67.594 252.406 64 248 64ZM312 64C307.594 64 304 67.594 304 72V152C304 156.406 307.594 160 312 160S320 156.406 320 152V72C320 67.594 316.406 64 312 64ZM376 64C371.594 64 368 67.594 368 72V152C368 156.406 371.594 160 376 160S384 156.406 384 152V72C384 67.594 380.406 64 376 64Z" })
  }
));
SdCardsThin.displayName = "SdCardsThin";
var SdCards_default = SdCardsThin;
