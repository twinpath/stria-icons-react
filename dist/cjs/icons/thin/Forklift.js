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
var Forklift_exports = {};
__export(Forklift_exports, {
  default: () => Forklift_default
});
module.exports = __toCommonJS(Forklift_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ForkliftThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M632 432H496V8C496 3.594 492.406 0 488 0S480 3.594 480 8V440C480 444.406 483.594 448 488 448H632C636.406 448 640 444.406 640 440S636.406 432 632 432ZM416 263.285C416 258.488 414.98 253.879 412.906 249.555C394.883 212.023 304.25 23.281 303.938 22.562C297.313 8.875 283.156 0 267.938 0H168C145.906 0 128 17.906 128 40V160H64C28.656 160 0 188.652 0 224V410.57C0 462.551 38.926 509.148 90.836 511.863C146.203 514.762 192 470.73 192 416H256C256 474.664 308.617 521.039 369.234 510.5C408.023 503.754 439.734 471.836 446.508 433.047C452.645 397.891 439.348 365.941 416 344.914V263.285ZM144 40C144 26.797 154.801 16 168 16H267.938C277.148 16 285.547 21.266 289.563 29.562L399.109 256H267.836C260.199 256 252.813 253.266 247.012 248.297L144 160V40ZM96 496C51.816 496 16 460.18 16 416C16 371.816 51.816 336 96 336S176 371.816 176 416C176 460.18 140.184 496 96 496ZM190.387 400C182.734 354.637 143.539 320 96 320C62.566 320 33.191 337.133 16 363.055V224C16 197.492 37.492 176 64 176H138.082L241.094 264.297C246.895 269.266 254.281 272 261.922 272H400V333.312C385.828 325.07 369.578 320 352 320C304.461 320 265.266 354.637 257.613 400H190.387ZM432 416C432 460.18 396.184 496 352 496S272 460.18 272 416C272 371.816 307.816 336 352 336S432 371.816 432 416Z" })
  }
));
ForkliftThin.displayName = "ForkliftThin";
var Forklift_default = ForkliftThin;
