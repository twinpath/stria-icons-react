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
var H2_exports = {};
__export(H2_exports, {
  default: () => H2_default
});
module.exports = __toCommonJS(H2_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const H2Thin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M632 432H404.625L577.297 274.344C601.859 253.531 616.75 224.656 619.219 193.125C621.687 161.781 611.594 131.219 590.812 107.094C546.5 55.656 468.125 49.562 416.141 93.625L386.828 118.438C383.453 121.281 383.047 126.313 385.891 129.688C388.75 133.094 393.828 133.531 397.172 130.625L426.484 105.813C471.797 67.469 540.078 72.688 578.688 117.531C596.656 138.406 605.391 164.813 603.266 191.875C601.141 219.125 588.234 244.094 566.734 262.344L378.609 434.094C376.172 436.312 375.344 439.812 376.547 442.906C377.734 445.969 380.703 448 384 448H632C636.422 448 640 444.406 640 440S636.422 432 632 432ZM312 64C307.578 64 304 67.594 304 72V240H16V72C16 67.594 12.422 64 8 64S0 67.594 0 72V440C0 444.406 3.578 448 8 448S16 444.406 16 440V256H304V440C304 444.406 307.578 448 312 448S320 444.406 320 440V72C320 67.594 316.422 64 312 64Z" })
  }
));
H2Thin.displayName = "H2Thin";
var H2_default = H2Thin;
