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
var Pencil_exports = {};
__export(Pencil_exports, {
  default: () => Pencil_default
});
module.exports = __toCommonJS(Pencil_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PencilThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M497.931 59.32L452.685 14.074C443.295 4.691 431 0 418.703 0S394.109 4.691 384.718 14.074L26.259 372.52C21.605 377.176 18.5 383.152 17.365 389.639L0.326 487.107C-1.987 500.336 8.328 512 21.166 512C22.392 512 23.64 511.895 24.904 511.672L122.435 494.568C128.912 493.434 134.882 490.328 139.531 485.68L497.933 127.242C516.689 108.486 516.689 78.076 497.931 59.32ZM80 341.41L317.052 104.365L407.621 194.934L170.58 432H80V341.41ZM128.218 474.365C125.881 476.701 122.927 478.238 119.672 478.809L21.166 496C19.039 496 17.697 494.676 17.218 494.107C16.511 493.266 15.74 491.846 16.088 489.863L33.127 392.395C33.697 389.133 35.236 386.172 37.574 383.834L64 357.408V440C64 444.422 67.593 448 72 448H154.582L128.218 474.365ZM486.619 115.928L418.933 183.621L328.365 93.053L396.027 25.393C402.09 19.336 410.142 16 418.703 16S435.314 19.336 441.373 25.387L486.619 70.635C492.668 76.684 496 84.727 496 93.281C496.002 101.836 492.67 109.879 486.619 115.928Z" })
  }
));
PencilThin.displayName = "PencilThin";
var Pencil_default = PencilThin;
