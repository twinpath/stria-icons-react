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
var Rainbow_exports = {};
__export(Rainbow_exports, {
  default: () => Rainbow_default
});
module.exports = __toCommonJS(Rainbow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RainbowThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 32C143.547 32 0 175.547 0 352V472C0 476.406 3.578 480 8 480S16 476.406 16 472V352C16 184.375 152.375 48 320 48S624 184.375 624 352V472C624 476.406 627.578 480 632 480S640 476.406 640 472V352C640 175.547 496.453 32 320 32ZM320 128C192.078 128 88 232.078 88 360V472C88 476.406 91.578 480 96 480S104 476.406 104 472V360C104 240.891 200.891 144 320 144S536 240.891 536 360V472C536 476.406 539.578 480 544 480S552 476.406 552 472V360C552 232.078 447.922 128 320 128ZM320 224C249.422 224 192 281.422 192 352V472C192 476.406 195.578 480 200 480S208 476.406 208 472V352C208 290.25 258.25 240 320 240S432 290.25 432 352V472C432 476.406 435.578 480 440 480S448 476.406 448 472V352C448 281.422 390.578 224 320 224Z" })
  }
));
RainbowThin.displayName = "RainbowThin";
var Rainbow_default = RainbowThin;
